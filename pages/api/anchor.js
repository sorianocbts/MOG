const axios = require('axios');
const Parser = require('rss-parser')
const FEEDURL = process.env.FEEDURL
let parser = new Parser();

// const _getFeed = async (req, res) => {

//     let video = axios(`https://anchor.fm/s/22f76698/podcast/rss`,
//         {
//             headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=120, stale-while-revalidate=60' },
//         }).then(resp => {
//             if (!resp.data) { throw Error('No location found.') }
//             let finalVideosResponse = resp.data
//             res.statusCode = 200
//             res.setHeader('Content-Type', 'application/json')
//             res.end(JSON.stringify(finalVideosResponse))
//         })

//     return video
// }


const _getFeed = async (req, res) => {
    let feed = await parser.parseURL('https://anchor.fm/s/22f76698/podcast/rss');

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(feed))

    return feed
}


export default function handler(req, res) {
    if (req.method === 'GET') {  //&& req.body.pass === process.env.TEMP_POST_PASS
        _getFeed(req, res).catch(err => {
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