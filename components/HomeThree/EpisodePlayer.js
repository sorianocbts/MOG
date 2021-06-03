import React from 'react'
import Link from 'next/link';
import _ from 'lodash'
import moment from 'moment'
import ReactPlayer from 'react-player/file'
import ScrollableAnchor from 'react-scrollable-anchor'
import useWindowSize from '../../hooks/useWindowSize'
import { ChevronLeft, ChevronRight, Play, Rewind, FastForward, Volume2, VolumeX, Pause, Repeat, PlayCircle } from 'react-feather'
import { ProgressBar } from 'react-bootstrap';
// import wave from '/img/banner/wave.svg';

const Wave = () => {
    return (<svg viewBox="0 0 992 219" className="wave-svg" ><path stroke="transparent" fill="rgba(125,125,125,0.1)" d="M -297.84 109.5 Q -368.7 133.59, -297.84 109.5 Q -226.99 85.4, -156.13 109.5 Q -85.27 133.59, -14.42 109.5 Q 56.44 85.4, 127.3 109.5 Q 198.16 133.59, 269.01 109.5 Q 339.87 85.4, 410.73 109.5 Q 481.58 133.59, 552.44 109.5 Q 623.3 85.4, 694.16 109.5 Q 765.01 133.59, 835.87 109.5 Q 906.73 85.4, 977.58 109.5 Q 1048.44 133.59, 1119.3 109.5 Q 1190.16 85.4, 1261.01 109.5 L 1261.01 219 L -297.84 219 Z"></path></svg>)
}

const EpisodePlayer = ({ episodes }) => {

    const [currentEpisode, setCurrentEpisode] = React.useState(episodes[0])
    const [filteredEpisodes, setFilteredEpisodes] = React.useState(episodes)
    const [selectedOption, setSelectedOption] = React.useState("Search Show");
    const player = React.useRef(null)
    const progressWrapper = React.useRef(null)
    const [width, height] = useWindowSize()
    const [muted, setMuted] = React.useState(false)
    const [playing, setPlaying] = React.useState(false)
    const [progress, setProgress] = React.useState(0)
    const [seeking, setSeeking] = React.useState(false)

    const seek = (p) => {
        setSeeking(true)
        if (player.current !== null) {
            console.log('seeking to', p)
            player.current.seekTo(p)
        }
        setTimeout(() => setSeeking(false), 800)
    }
    const seekProgress = (event) => {
        if (progressWrapper.current !== null) {

            let left = (event.pageX - progressWrapper.current.offsetLeft) / progressWrapper.current.clientWidth
            seek(left)
        }
    }
    if (!currentEpisode) {
        return (<div>Error</div>)
    }
    const filterList = (targetValue) => {
        // setFilteredEpisodes(_contains(episodes, e.target.value)) 
        targetValue === "All Shows" ? setFilteredEpisodes(episodes) : setFilteredEpisodes(_contains(episodes, targetValue))
        return
    }

    return (
        <ScrollableAnchor id={'now-playing'}>
            <div className={`nowplaying-container`} id={`#now-playing`}>

                {/* <div className={`header-div rounded`}>
                    <h2>Now Playing</h2>
                </div> */}


                <div className={`playlist-container rounded-top`}>
                    <div className={`episode-img d-none d-lg-block`}>
                        <img
                            className={`rounded-lg`}
                            src={currentEpisode.itunes.image}
                            alt="Picture of the author"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <div className={`player-right-col`}>
                        {/* <Wave style={{ position: "fixed", bottom: '0' }} /> */}
                        <div className={``}>
                            <div className={``}>
                                <h3>{currentEpisode.title}</h3>
                            </div>
                            <div className={``}>
                                <h6>The Man of God • {moment(currentEpisode.pubDate).format(`MMM DD`)}</h6>
                            </div>
                            <div className={`mb-4`} dangerouslySetInnerHTML={_createMarkup(truncate(currentEpisode.itunes.summary, 1000).replace('\n', ""))} style={{ maxHeight: '120px', overflowY: 'scroll' }} />
                        </div>
                        <div className={`videoplayer rounded`}>
                            <ReactPlayer
                                ref={player}
                                width={`100%`}
                                height={`100%`}
                                playsinline={true}
                                className={`nowplaying-reactplayer`}
                                url={currentEpisode.enclosure.url}
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
                                onSeek={(e) => console.log('onSeek', e)}
                            />
                            <ProgressBar ref={progressWrapper} onClick={e => seekProgress(e)} variant="secondary" now={progress.played * 100} label={fancyTimeFormat(progress.playedSeconds)} style={{ height: '14px' }} />
                            <div className={`videoplayer-controls d-flex justify-content-between`}>
                                <div className={`btn-sm videoplayer-rewind `} onClick={() => seek(0)}><Repeat width={'18px'} /></div>
                                <div className={`btn-sm videoplayer-rewind `} onClick={() => seek(progress.played - 0.05)}><Rewind width={'18px'} /></div>
                                <div className={`btn-sm videoplayer-play `} onClick={() => setPlaying(!playing)}>{playing ? <Pause width={'18px'} /> : <Play width={'18px'} />}</div>
                                <div className={`btn-sm videoplayer-forward `} onClick={() => seek(progress.played + 0.05)}><FastForward width={'18px'} /></div>
                                <div className={`btn-sm videoplayer-volume `} onClick={() => setMuted(!muted)}>{muted ? <Volume2 width={'18px'} /> : <VolumeX width={'18px'} />}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`episode-list rounded-bottom shadow-lg`}>
                    <div className={`card-filter`}>
                        {/* <select>
                            {episodes.map((ep, idx) => (
                                <option>{ep.title}</option>
                            ))}
                        </select> */}
                        <select onChange={e => { handleChange(e.target.value, setSelectedOption); filterList(e.target.value) }} value={selectedOption}>
                            <option>All Shows</option>
                            {_getShows(episodes).map((ep, idx) => (<option value={ep}>{ep}</option>))}
                        </select>
                    </div>

                    {filteredEpisodes.map((ep, idx) => (
                        <>
                            <div key={idx} className={`episode-card card rounded-lg shadow hover flex-row`} style={{ cursor: 'pointer' }} onClick={() => { setCurrentEpisode(ep); setPlaying(true) }}>

                                <div className={`episode-card-img`} style={{ backgroundImage: width > 990 ? `url(${ep.itunes.image})` : ``, backgroundSize: 'contain', backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                                    {/* <img
                                        src={ep.itunes.image}
                                        alt="Picture of the author"
                                        style={{ width: '100%', height: '100%', position: 'relative', left: 0, bottom: 0 }}
                                    /> */}
                                    <button className={`card-play-btn btn h-100 w-100`}><PlayCircle style={{ backgroundColor: "#fff", borderRadius: "50%", height: "30px", width: "30px" }} /></button>
                                </div>

                                <div className={`episode-card-info d-flex flex-row`}>
                                    <div className={`episode-card-title`}>
                                        <h4>{ep.title}</h4>
                                        <p className={`d-none d-lg-block`} >{truncate(ep.itunes.summary.replace(/(<([^>]+)>)/ig, ''), 200)}</p>
                                    </div>
                                    <div className={`episode-card-time d-flex flex-md-column flex-row justify-content-between`}>
                                        <span>{moment(ep.pubDate).format(`MMM DD, YYYY`)}</span>
                                        <span>
                                            {fancyTimeFormat(ep.itunes.duration)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <style jsx>{`
                .hover {
                    position:relative;
                    transition: top ease 0.5s;
                }
                .hover:hover {
                    opacity: 1;
                    // transform: translateY(1);
                    
                    top: -2px;
                    
                   }
                    .nowplaying-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 8rem 0;
                    }
                    .header-div {
                        width: ${width < 1450 ? '95%' : '50%'};
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
                        width: ${width < 1450 ? '95%' : '50%'};
                        color: black;
                        height: 100%;
                        min-height: ${width < 900 ? '700px' : '400px'}; 
                        display: grid;
                        grid-template-columns:${width < 900 ? '2fr' : '2fr 3fr'}; 
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
                    .playlist-container {
                        width:80%;
                        max-width: 1100px;
                        height: 100%;
                        background-color: #EBEBEC; //#fff;
                        display: flex;
                        align-items: flex-end;
                    }
                    .episode-img {
                        width:30%;
                        border: #EBEBEC 2px solid;
                    }
                    .player-right-col {
                        width: ${width < 991 ? '95%' : '65%'};
                        padding-top: ${width < 991 ? '10px' : '0'};
                        margin: 0 auto 10px;
                    }
                    .videoplayer {
                        z-index: 99;
                    }
                    .nowplaying-reactplayer {
                        height: 100% !important;
                    }
                    .episode-list {
                        width:80%;
                        max-width: 1100px;
                        height: 100%;
                        max-height: 60vh;
                        overflow-y: scroll;
                        padding: 2rem auto;
                        background-color: #EBEBEC;
                        display: grid;
                        place-items: center;
                    }
                    .episode-card {
                        width: 95%;
                        margin: 0.5rem 0; 
                        display:flex !important;
                        height: ${width < 991 ? '105px' : '200px'};
                    }
                    .episode-card-img {
                        width: ${width < 991 ? '10%' : '20%'};
                        opacity: .70;
                    }
                    .card-play-btn{
                        // background-color:#fff;
                        border-radius: 40px;
                        z-index: 99;
                    }
                    .episode-card-info{
                        width:80%;
                        padding: .5rem .2rem .5rem 1rem;
                    }
                    .episode-card-title {
                        width:80%;
                    }
                    .episode-card-title > p {
                        max-height: 85px;
                        overflow: scroll;
                    }
                    .episode-card-title > p::-webkit-scrollbar {
                        display:none;
                    }
                    .episode-card-time{
                        width:20%;
                        margin: 0 auto;
                        opacity: .70;
                    }

// .videoplayer-controls {
//     min-height: 40px;
// }
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
    background-color: #3b3a39;
}
.btns > a {
    // color: white;
    min-width: 120px;
    background-color: #3b3a39;
}
.long-btn {
    width: 85%;
    background-color: #3b3a39;
    max-width: 280px;
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
                        width: ${width < 900 ? '65%' : '95%'};
                        min-width: 280px;
                        
                    }
                `}</style>
            </div>
        </ScrollableAnchor>
    )

}

export default React.memo(EpisodePlayer)


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function truncate(str, max) {
    return str.length > max ? str.substr(0, max - 1) + '…' : str;
}

function fancyTimeFormat(duration) {
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


const _createMarkup = (str) => {
    return { __html: `${str}` };
}

const _getShows = (episodes) => {
    let epArr = episodes.map((ep) => ep.title.split("|"))
    let showsArr = epArr.map(epi => {
        let epLength = epi.length
        return epi[epLength - 1].trim()
    })
    return Array.from(new Set(showsArr)).sort()
}

const _filterShows = (filteredEpisodes, show) => {

    return
}

const handleChange = (value, selectOptionSetter) => {
    selectOptionSetter(value)
}

const _contains = (arr, str) => {
    console.log(arr)
    console.log(str)
    return arr.filter(el => el.title.includes(str))
}