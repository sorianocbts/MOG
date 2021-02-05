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
            width: ${width < 1140 ? '70%' : '50%'};
        }
        .index-header {
            color : #fff;
            letter-spacing: 1.2px;
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
                        <Card key={idx}>
                            {/* <Card.Header className={`cardheader`} style={{ backgroundColor: 'black' }} > */}
                            {/* <Accordion.Toggle as={Button} variant="link" eventKey={`${idx}`} style={{ color: '#fff', border: 'none', outline: 'none' }} > */}
                            <Accordion.Toggle as={Card.Header} variant="link" eventKey={`${idx}`} style={{ backgroundColor: 'black', color: '#fff', fontSize: '20px', border: 'none', outline: 'none' }} >
                                <span className={`card-titleheader`}>{`Chapter ${x.chapter}`}</span>
                                <span><ChevronDown className={`card-arrow`} /></span>
                            </Accordion.Toggle>
                            {/* </Card.Header> */}
                            {x.episodes.map((episode, idx2) => (
                                // <>
                                <Accordion.Collapse eventKey={`${idx}`} key={idx2} >
                                    <Link href={`//youtube.com/watch?v=${episode.id}`}>
                                        <a className={`w-100`}>
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




const ctfData = [
    {
        chapter: 1,
        episodes: [
            {
                title: "1689 Chapter 1: Of Scripture - Introduction",
                linkUrl: '/'
            },
            {
                title: "The Necessity of Scripture Asserted | Confessing the Faith", linkUrl: '/'
            },
            {
                title: "The Necessity of Scripture Grounded | Confessing the Faith", linkUrl: '/'
            },
            {
                title: "The Necessity of Scripture, What it Presupposes | Confessing the Faith", linkUrl: '/'
            },
            {
                title: "The Necessity of Scripture Explained | Confessing the Faith", linkUrl: '/'
            },
            {
                title: "Why Scripture is Authoritative | Confessing the Faith", linkUrl: '/'
            },
        ]
    },
    {
        chapter: 2,
        episodes: [
            {
                title: "Divine Singularity, Aseity, Incomprehensibility, & Simplicity | Confessing the Faith", linkUrl: '/'

            },
            {
                title: "Divine Infinity, Sovereignty, Love, & Justice | Confessing the Faith", linkUrl: '/'
            },
            {
                title: "God's Relation to the World & Mankind | Confessing the Faith", linkUrl: '/'
            },
            {
                title: "The Father, The Son, & The Holy Spirit | Confessing the Faith", linkUrl: '/'
            },
            {
                title: "The Father is God, the Son is God, & the Spirit is God | Confessing the Faith", linkUrl: '/'
            },
            {
                title: "The Foundation of All Our Communion with God & Comfortable Dependence Upon Him", linkUrl: '/'
            },
        ]
    }, {
        chapter: 3,
        episodes: [
            {
                title: "Divine Singularity, Aseity, Incomprehensibility, & Simplicity | Confessing the Faith", linkUrl: '/'

            },
            {
                title: "Divine Infinity, Sovereignty, Love, & Justice | Confessing the Faith", linkUrl: '/'
            },
            {
                title: "God's Relation to the World & Mankind | Confessing the Faith", linkUrl: '/'
            },
            {
                title: "The Father, The Son, & The Holy Spirit | Confessing the Faith", linkUrl: '/'
            },
            {
                title: "The Father is God, the Son is God, & the Spirit is God | Confessing the Faith", linkUrl: '/'
            },
            {
                title: "The Foundation of All Our Communion with God & Comfortable Dependence Upon Him", linkUrl: '/'
            },
        ]
    }, {
        chapter: 4,
        episodes: [
            {
                title: "Divine Singularity, Aseity, Incomprehensibility, & Simplicity | Confessing the Faith", linkUrl: '/'

            },
            {
                title: "Divine Infinity, Sovereignty, Love, & Justice | Confessing the Faith", linkUrl: '/'
            }
        ]
    }

]

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