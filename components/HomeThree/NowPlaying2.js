import React from 'react'
import Link from 'next/link';
import _ from 'lodash'
import ModalVideo from 'react-modal-video'
import ScrollableAnchor from 'react-scrollable-anchor'
import useWindowSize from '../../hooks/useWindowSize'
import ReactPlayer from 'react-player/youtube'
import { ChevronLeft, ChevronRight, Play, Rewind, FastForward, Volume2, VolumeX, Pause, Repeat } from 'react-feather'
import { ProgressBar } from 'react-bootstrap';
import ChapterModal from './ChapterModal';
const NowPlaying2 = React.memo(({ data }) => {
    const player = React.useRef(null)
    const progressWrapper = React.useRef(null)
    const [width, height] = useWindowSize()
    // let width =722
    const [muted, setMuted] = React.useState(true)
    const [playing, setPlaying] = React.useState(true)
    const [progress, setProgress] = React.useState(0)
    const [seeking, setSeeking] = React.useState(false)
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

    const _getVideoToPlay = React.useCallback(() => {
        let chidx = 4//randomIntFromInterval(0, videos.length - 1)
        let vididx = 0//randomIntFromInterval(0, videos[chidx].episodes.length - 1)
        return { chidx, vididx }
    })
    
     const _getVideoBlocks = () => {
        // return [_getVideoToPlay(), _getVideoToPlay(), _getVideoToPlay(), _getVideoToPlay(),_getVideoToPlay(),_getVideoToPlay()]
        // let chapterIndex = videos.length -2
        // return videos[chapterIndex].episodes.map((video, idx) => ({chidx:chapterIndex, vididx:idx}))
        return _.flatten(videos.map((chapter, chapteridx) => chapter.episodes.map((video, videoidx)=> ({chidx: chapteridx, vididx:videoidx})))).reverse()
        
    }
    const [videosforBlocks, setVideosForBlocks] = React.useState(_getVideoBlocks())
    const [playingIdx, setPlayingIdx] = React.useState(0)
    const [videoForPlayer, setVideoForPlayer] = React.useState(videosforBlocks[playingIdx])

    React.useEffect(() => {
       
    }, [videoForPlayer])

    const seek = (p)=> {
        setSeeking(true)
        if(player.current !== null) {
            console.log('seeking to', p)
            player.current.seekTo(p)
        }
        setTimeout(()=>setSeeking(false), 800)
    }
    const seekProgress = (event) =>{
        if(progressWrapper.current !== null) {

            let left = (event.pageX - progressWrapper.current.offsetLeft) / progressWrapper.current.clientWidth
            seek(left)
        }
    }
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setPlaying(false)
        setIsOpen(!isOpen);
    }
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
<ScrollableAnchor id={'now-playing'}>
            <div className={`nowplaying-container`} id={`#now-playing`}><style jsx>{`
            .spaced-text {
                letter-spacing: 1.2px;
                font-style: normal !important;
                font-size: 16px;
            }
            .nowplaying-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 2rem 0;
                // min-width: 400px;
            }
            .header-div {
                width: ${width < 1450 ? '85%' : '50%'};
            }
            h2 {
                display: inline-block;
                color: #fff;
                font-size: 40px;
                font-weight: 700 !important;
                letter-spacing: 1.2px;
            }
            .nowplaying-div {
                background-color: #fff;
                width: ${width < 1450 ? '85%' : '50%'};
                color: black;
                height: 100%;
                min-height: ${width < 900? '700px' : '400px'}; 
                display: grid;
                grid-template-columns:${width < 900? '2fr' : '2fr 3fr'}; 
            }
            .left-column {
                grid-column: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 350px;   
            }
            .videoplay-wrapper {
                width: 100%;
                height: 60%;
                max-height: 200px;
            }
            .chevron {
                display: inline;
                position: relative;
                top: -24px;
            }
            .chevron > p {
                font-size:20px;
                font-weight:700;
            }
            .chevron-left {
                left: 10px;
            }
            .chevron-right {
                right: 10px;
            }
            .videoplayer {
               
            }
            .nowplaying-reactplayer {
                height: 100% !important;
            }
            .progress-bar {
                background-color: #fce14f !important;
            }
            .videoplayer-controls {
                min-height: 40px;
            }
            .videobuttons{
                width: 85%;
                max-width: 280px;
                
            }
            .btns {
                width: 100%;
            }
            .btns > div {
                // color: white;
                min-width: 120px;
                background-color: #fce14f;
            }
            .btns > a {
                // color: white;
                min-width: 120px;
                background-color: #fce14f;
            }
            .long-btn {
                width: 85%;
                background-color: #fce14f;
                max-width: 280px;
            }
            .right-column {
                grid-column: ${width < 900 ? 1 : 2};
                display: flex;
                flex-direction: column;
                align-items: center;
                // justify-content: center;  
                height: ${width < 900? '350px' : '400px'};
                overflow: scroll;
            }
            /* width */
            ::-webkit-scrollbar {
            width: 5px;
            }

            /* Track */
            ::-webkit-scrollbar-track {
            background: #f1f1f1;
            }

            /* Handle */
            ::-webkit-scrollbar-thumb {
            background: #888;
            }

            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
            background: #555;
            }
            .btn-blocks {
                width: ${width < 900? '65%' : '95%'};
                min-width: 280px;
                
            }
            
            `}

            </style>

                <div className={`header-div rounded`}>
                    <h2>Now Playing</h2>
                </div>
                <div className={`nowplaying-div rounded flex-shrink-0`}>
                    <div className={`left-column`}>
                        <div className={`videoplay-wrapper d-flex align-items-center justify-content-center`}>
                            <div className={`chevron chevron-left btn btn-sm`} onClick={() => {let idx = playingIdx===0?videosforBlocks.length-1:playingIdx-1;setPlayingIdx(idx);setVideoForPlayer(videosforBlocks[idx])}}><p><ChevronLeft /></p></div>
                            <div className={`videoplayer rounded`}>
                                <h4 className={`block`} style={{textAlign: 'center', fontSize: '14px', marginTop: `${width < 900? '14px': ''}`}}>{videos[videoForPlayer.chidx].episodes[videoForPlayer.vididx].title.replace(`| Confessing the Faith`, ``)}</h4>
                                <ReactPlayer
                                ref={player}
                                    width={`100%`}
                                    height={`100%`}
                                    playsinline={true}
                                    className={`nowplaying-reactplayer`}
                                    url={`www.youtube.com/watch?v=${videos[videoForPlayer.chidx].episodes[videoForPlayer.vididx].videoId}`}
                                    playing={playing}
                                    loop={true}
                                    controls={false}
                                    muted={muted}
                                    config={{
                                        youtube: {
                                            playerVars: { showinfo: 0, modestbranding: 0, rel: 0 }
                                        }
                                    }}
                                    onProgress={e => setProgress(e)} //setProgress(state.played)
                                    onSeek={(e)=>console.log('onSeek', e)}
                                />
                                <ProgressBar ref={progressWrapper} onClick={e => seekProgress(e)} variant="warning" now={progress.played*100} label={fancyTimeFormat(progress.playedSeconds)} style={{height: '10px'}}/>
                                 <div className={`videoplayer-controls d-flex justify-content-between`}>
                                 <div className={`btn-sm videoplayer-rewind `} onClick={()=>seek(0)}><Repeat width={'18px'}/></div>
                                 <div className={`btn-sm videoplayer-rewind `}onClick={()=>seek(progress.played-0.05)}><Rewind width={'18px'}/></div>
                                 <div className={`btn-sm videoplayer-play `} onClick={()=> setPlaying(!playing)}>{playing?<Pause width={'18px'}/>:<Play width={'18px'}/>}</div>
                                 <div className={`btn-sm videoplayer-forward `} onClick={()=>seek(progress.played+0.05)}><FastForward width={'18px'}/></div>
                                 <div className={`btn-sm videoplayer-volume `} onClick={()=> setMuted(!muted)}>{muted? <Volume2 width={'18px'}/>:<VolumeX width={'18px'}/>}</div>
                                 </div>
                            </div>
                            <div className={`chevron chevron-right btn btn-sm`} onClick={() => {let idx = playingIdx===videosforBlocks.length-1?0:playingIdx+1;setPlayingIdx(idx);setVideoForPlayer(videosforBlocks[idx])}}><p><ChevronRight /></p></div>
                        </div>
                        <div className={`videobuttons d-flex`}>
                            <div className={`btns my-3 d-flex justify-content-between`}>
                                <div className={`shadow btn btn-outline-dark`} onClick={e => {e.preventDefault(); openModal()}}>Full Screen</div>
                                <ModalVideo 
                                    channel='youtube' 
                                    isOpen={!isOpen} 
                                    videoId={`${videos[videoForPlayer.chidx].episodes[videoForPlayer.vididx].videoId}`}
                                    onClose={() => setIsOpen(!isOpen)} 
                                    autoplay
                                    t={`0m${progress.playedSeconds}`}
                                />
                                <Link href={`//www.youtube.com/watch?v=${videos[videoForPlayer.chidx].episodes[videoForPlayer.vididx].videoId}&t=0m${progress.playedSeconds}s`} passHref={true} prefetch={false} onClick={()=>setPlaying(false)}>
                                    <a target="_blank" rel="noreferrer" className={`shadow btn btn-outline-dark `} onClick={()=>setPlaying(false)}>Youtube
                                        
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className={`long-btn shadow white btn btn-outline-dark block`}  onClick={() => setModalShow(true)}>Read Chapter</div>
                        <ChapterModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                chapter={{chapterNumber: videoForPlayer.chidx+1,title: _getChapterName(LBCFChapters, videoForPlayer.chidx+1)}}
                            />
                    </div>
                    <div className={`right-column`}>
                        {videosforBlocks.map((x, idx)=> {
                            // if(idx ===0 ) return 
                        //    else { 
                            return(
                            <div key={idx} className={`shadow btn-blocks btn btn-outline-dark my-2 spaced-text d-flex align-items-center justify-content-start`} style={{ backgroundColor: `${playingIdx===idx? '#343A40': '#fce14f'}`, color: `${playingIdx===idx?'#fff':`black`}`}} onClick={() => {setPlayingIdx(idx);setVideoForPlayer(videosforBlocks[idx])}}><i className="flaticon-play mx-2 spaced-text" /><p className={`spaced-text`}>{truncate(videos[x.chidx].episodes[x.vididx].title.replace(`| Confessing the Faith`, ``), 40)}</p></div>
                            )
                            // )}
})}
                    </div>
                </div>
            </div>
            </ScrollableAnchor>
        </>
    )
})

export default NowPlaying2

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

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

function truncate(str, max) {
    return str.length > max ? str.substr(0, max - 1) + '…' : str;
}

function fancyTimeFormat(duration)
{   
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}