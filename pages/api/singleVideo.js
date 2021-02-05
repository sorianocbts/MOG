const axios = require('axios');
const PLAYLISTID = process.env.PLAYLISTID
const YTAPIKEY = process.env.YTAPIKEY

// const _getVideoContent = async () => {
//     return
// }

// const _getVideoObject = async (vidId, req, res) => {
//     let video = axios(`https://youtube.googleapis.com/youtube/v3/videos?id=${vidId}&part=snippet&key=${YTAPIKEY}`,
//         {
//             headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=120, stale-while-revalidate=60' },
//         }).then(resp => {
//             if (!resp.data) { throw Error('No location found.') }
//             res.statusCode = 200
//             res.setHeader('Content-Type', 'application/json')
//             res.end(JSON.stringify(resp.data))
//         })

//     return video
// }


export default function handler(req, res) {
    if (req.method === 'GET') {  //&& req.body.pass === process.env.TEMP_POST_PASS
        // _getVideoObject(videoId, req, res).catch(err => {
        //     res.statusCode = 400
        //     res.setHeader('Content-Type', 'application/json')
        //     res.end(JSON.stringify({ name: `Error` }))
        // })
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ msg: `Try later` }))
    }
    else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ msg: `Good try` }))
    }

}