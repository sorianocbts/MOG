import React from 'react';
import Link from 'next/link';
// import ModalVideo from 'react-modal-video';
import ReactPlayer from 'react-player/vimeo'
import useWindowSize from '../../hooks/useWindowSize'
import { ArrowDownCircle } from 'react-feather';
import { goToAnchor } from 'react-scrollable-anchor'
const MaminBanner = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    const [width, height] = useWindowSize()
    const fonSizes = () => {
        return width < 439 ? {
            h2: 40,
            h4: 30
        } :
            {
                h2: 50,
                h4: 40
            }
    }
    fonSizes()
    console.log(height)
    return (
        <React.Fragment>
            <div className="banner-area jarallax" style={{ minHeight: '900px' }}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center justify-content-center">

                                <div className="col-lg-4 left-col" > {/*style={{ marginLeft: '10px' }}*/}
                                    <div className="banner-text">
                                        <h1 style={{ letterSpacing: '1.5px' }}>A theological &</h1>
                                        <h1>Devotional Walk</h1>
                                        {/* <h1>A theological & <br /> Devotional Walk</h1> */}
                                        <h3>Through The</h3>
                                        <div className={`lbcf-btn rounded`}>
                                            <img src="/img/banner/banner1689.png" alt="Image" />
                                        </div>
                                        <h4 style={{ fontSize: `${fonSizes().h4}px` }}>Baptist Confession of Faith</h4>
                                        <h2 style={{ fontSize: `${fonSizes().h2}px` }}>with Dr. Sam Waldron</h2>
                                        <div className={`play-btn d-flex`} style={{ marginTop: '1rem' }}>
                                            <Link href="#" >
                                                <a href="https://www.youtube.com/playlist?list=PLN-CfeDuojiSNUJRNP5whOhA-XyQobZmo"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="popup-youtube"
                                                    style={{ color: '#fff', fontSize: '24px' }}
                                                >
                                                    <i className="flaticon-play"></i>
                                                    <span>Play Series</span>
                                                </a>
                                            </Link>
                                            <Link href="#">
                                                <a href="https://www.youtube.com/c/CBTSeminary?sub_confirmation=1"
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    <div className={`follow-btn rounded`}>
                                                        <span>Follow Us</span>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className={`d-flex`} style={{ marginTop: '46px' }}>
                                            <Link href="#contact-section" >
                                                <a
                                                    style={{ color: '#fff', fontSize: '24px' }}
                                                >
                                                    <ArrowDownCircle width='200px' height='40px' color='#fce14f' onClick={() => goToAnchor('contact-section')} />

                                                </a>
                                            </Link>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-lg-9 right-col">
                                    <div className="banner-video" style={{ pointerEvents: 'none' }}>
                                        <ReactPlayer
                                            playsinline={true}
                                            className={`reactplayer`}
                                            url="https://vimeo.com/506225501"
                                            playing={true}
                                            loop={true}
                                            controls={false}
                                            muted={true}
                                            config={{
                                                youtube: {
                                                    playerVars: { showinfo: 0, modestbranding: 0, rel: 0 }
                                                }
                                            }}
                                        />
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-img">
                    {/* <img src="/img/banner/ctf.png" alt="Image" /> */}
                </div>
            </div>
            <style jsx global>{`
                .reactplayer {
                    height:650px !important;
                    width: 100% !important;
                    min-height: 100% !important;
                    display: flex;
                    align-items: center;
                    margin-top: 0px;
                }
                .left-col {
                    height: 100%;
                }
                .right-col {
                    height: 100%;
                }
                @media (min-width: 380px) {
                    .reactplayer {
                        width:100% !important;
                    }
                }
                @media (min-width: 414px) {
                    .reactplayer {
                        width: 100% !important;

                    }
                    .left-col {
                        height: 100%;
                    }
                }
                @media (min-width: 539px) {
                    .reactplayer {
                        width: 100% !important;
                        margin-top: 20px;
                    }
                    .left-col {
                        height: 100%;
                    }
                }
                @media only screen and (min-width: 669px) and (max-width: 991px) {
                    .reactplayer {
                        margin-top: 40px;
                    }
                    .left-col {
                        height: 100%;
                    }
                }
                @media only screen and (min-width: 540px) and (max-width: 991px) {
                    .reactplayer {
                        height: 800px !important;
                        min-height: 100% !important;
                        width: 100% !important;
                        
                    }
                    .left-col {
                        height: 100%;
                    }
                }
                @media (min-width: 992px) {
                        .reactplayer {
                            height: ${height}px !important; 
                            width: 118% !important;
                            min-height: 100% !important;
                        }
                        .left-col {
                            // height: 750px;
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-start;

                        }
                }
                @media only screen and (min-width: 991px) and (max-width: 1198px) {
                    .left-col {
                        flex: 0 0 50%;
                        max-width: 50%;
                    }
                    .right-col {
                        min-height: 750px !important;
                        flex: 0 0 50%;
                        max-width: 50%;
                    }
                    .reactplayer {
                        height: ${height}px !important;  
                        width: 118% !important;
                        min-height: 100% !important;
                    }
                }
                @media only screen and (min-width: 1199px) and (max-width: 1479px) {
                    .left-col {
                        height: ${height}px !important;  
                        flex: 0 0 50%;
                        max-width: 50%;
                    }
                    
                    .right-col {
                        min-height: 750px !important;
                        flex: 0 0 50%;
                        max-width: 50%;
                    }
                }
                @media only screen and (min-width: 1480px) and (max-width: 1679px) {
                    .left-col {
                        flex: 0 0 50%;
                        max-width: 50%;
                    }
                    .right-col {
                        min-height: 750px !important;
                        flex: 0 0 50%;
                        max-width: 50%;
                    }
                }
                @media (min-width: 1680px) {
                    .left-col {
                        flex: 0 0 50%;
                        max-width: 50%;
                    }
                    .right-col {
                        min-height: 750px !important;
                        flex: 0 0 50%;
                        max-width: 50%;
                    }
                }
            `}</style>
        </React.Fragment >
    )
}

export default MaminBanner;