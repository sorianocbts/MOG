const axios = require('axios');
const PLAYLISTID = process.env.PLAYLISTID
const YTAPIKEY = process.env.YTAPIKEY

const _getVideoObject = async (videos, req, res) => {
    let videoIds = videos.items.map(video => {
        return video.contentDetails.videoId
    })
    let video = axios(`https://youtube.googleapis.com/youtube/v3/videos?id=${videoIds}&part=snippet&key=${YTAPIKEY}`,
        {
            headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=120, stale-while-revalidate=60' },
        }).then(resp => {
            if (!resp.data) { throw Error('No location found.') }
            let finalVideosResponse = resp.data.items
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(finalVideosResponse))
        })

    return video
}


const _getPlaylist = async (req, res) => {
    axios(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLISTID}&part=contentDetails&maxResults=50&key=${YTAPIKEY}`,
        {
            headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=120, stale-while-revalidate=60' },
        }).then(response => {
            if (!response.data) { throw Error('No location found.') }
            _getVideoObject(response.data, req, res)
        })
}



export default function handler(req, res) {
    if (req.method === 'GET') {  //&& req.body.pass === process.env.TEMP_POST_PASS
        _getPlaylist(req, res)
            .catch(err => {
                res.statusCode = 400
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ name: `Error` }))
            })
    }
    else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ name: `Good try` }))
    }

}