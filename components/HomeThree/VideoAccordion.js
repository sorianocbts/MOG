import React from 'react'
import Link from 'next/link';
import { Accordion, Button, Card } from 'react-bootstrap'
import { ChevronDown } from 'react-feather'
import useWindowSize from '../../hooks/useWindowSize';

function VideoAccordion({ data }) {
    const [width, height] = useWindowSize()
    let videos = _transformVideoObject(data);
    if (!data || !videos) {
        return (
            <>
                <div>Error</div>
            </>
        )
    }
    const _getChapterName = (LBCFChapters, chapterNumber) => {
        return LBCFChapters[`Chapter ${chapterNumber}`]
    }
    return (
        <div className={`video-accordion`}><style jsx>{`
        .video-accordion {
            background-color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            paddding: 2rem;
        }
       .video-accordion div {
            width: ${width < 1140 ? '85%' : '50%'};
        }
        .index-header {
            color : #fff;
            letter-spacing: 1.2px;
        }
        .card {
            border: none !important;
        }
        .card-header{
            border: none;
            outline: none;
            background-color: black !important;
            border-bottom: none;
        }
        .card-titleheader{
            // font-size: 20px
            letter-spacing: 1.2px;
        }
        .card-arrow {
            float: right; 
        }
        .card-body {
            padding: 0 0 1rem 0 !important;
        }
    }
        `}</style>
            <div>
                <Accordion defaultActiveKey="0">
                    <h1 className={`index-header`} id="video-index">CTF Video Index</h1>
                    {videos.map((x, idx) => (
                        // < >
                        <Card key={idx} className={`shadow-lg`} style={{ border: '1px solid rgba(0,0,0,.70)' }}>
                            {/* <Card.Header className={`cardheader`} style={{ backgroundColor: 'black' }} > */}
                            {/* <Accordion.Toggle as={Button} variant="link" eventKey={`${idx}`} style={{ color: '#fff', border: 'none', outline: 'none' }} > */}
                            <Accordion.Toggle as={Card.Header} variant="link" eventKey={`${idx}`} style={{ backgroundColor: '#fce14f', color: 'black', fontSize: '20px', border: 'none', outline: 'none' }} >
                                <span className={`card-titleheader`}>{`Chapter ${x.chapter}- ${_getChapterName(LBCFChapters, x.chapter)}`}</span>
                                <span><ChevronDown className={`card-arrow`} /></span>
                            </Accordion.Toggle>
                            {/* </Card.Header> */}
                            {x.episodes.map((episode, idx2) => (
                                // <>
                                <Accordion.Collapse eventKey={`${idx}`} key={idx2} >
                                    <Link href={`//www.youtube.com/watch?v=${episode.videoId}`} passHref={true} prefetch={false}>
                                        <a target="_blank" rel="noreferrer" className={`w-100`}>
                                            <Card.Body className={`shadow-sm pl-5`}>
                                                <li style={{ fontSize: '18px', letterSpacing: '1.2px' }}>
                                                    {episode.title}
                                                </li>
                                            </Card.Body>
                                        </a>
                                    </Link>
                                </Accordion.Collapse>
                                // </>
                            ))}
                        </Card>
                        // </>
                    ))}
                </Accordion>
            </div> </div >
    )
}

export default VideoAccordion



const _transformVideoObject = (videos) => {


    let titles = videos.map(vid => {
        return { title: vid.snippet.title.trim().split("1689")[1], videoId: vid.id }
    })

    let ch = 1
    let result = [{ chapter: ch, episodes: [] }]
    for (let idx in titles) {
        let title = titles[idx].title
        if (title.includes(`${ch}:`)) {
            result.find(chap => chap.chapter === ch).episodes.push(titles[idx])
        }
        else {
            ch++
            result.push({ chapter: ch, episodes: [] })
            result.find(chap => chap.chapter === ch).episodes.push(titles[idx])
        }
    }
    return result
}

const LBCFChapters = {
    "Chapter 1": "The Holy Scriptures",
    "Chapter 2": "God and the Holy Trinity",
    "Chapter 3": "God's Decree",
    "Chapter 4": "Creation",
    "Chapter 5": "Divine Providence",
    "Chapter 6": "The Fall of Mankind, and Sin and Its Punishment",
    "Chapter 7": "God's Covenant",
    "Chapter 8": "Christ the Mediator",
    "Chapter 9": "Free Will",
    "Chapter 10": "Effectual Calling",
    "Chapter 11": "Justification",
    "Chapter 12": "Adoption",
    "Chapter 13": "Sanctification",
    "Chapter 14": "Saving Faith",
    "Chapter 15": "Repentance to Life and Salvation",
    "Chapter 16": "Good Works",
    "Chapter 17": "The Perseverance of the Saints",
    "Chapter 18": "Assurance of Grace and Salvation",
    "Chapter 19": "The Law of God",
    "Chapter 20": "The Gospel and the Extent of Its Grace",
    "Chapter 21": "Christian Liberty and Liberty of Conscience",
    "Chapter 22": "Religious Worship and the Sabbath Day",
    "Chapter 23": "Lawful Oaths and Vows",
    "Chapter 24": "Civil Government",
    "Chapter 25": "Marriage",
    "Chapter 26": "The Church",
    "Chapter 27": "The Communion of Saints",
    "Chapter 28": "Baptism and the Lord's Supper",
    "Chapter 29": "Baptism",
    "Chapter 30": "The Lord's Supper",
    "Chapter 31": "The State of Humanity after Death and the Resurrection of the Dead",
    "Chapter 32": "The Last Judgment",
}