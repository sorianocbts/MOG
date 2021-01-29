import React from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import ReactPlayer from 'react-player/vimeo'

const MaminBanner = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <React.Fragment>
            <div className="banner-area jarallax">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">

                                <div className="col-lg-6 right-col">
                                    <div className="banner-text">
                                        <h1>A theological and Devotional</h1>
                                        <h2>Walk Through The</h2>
                                        <div className={`lbcf-btn rounded`}>
                                            <h1>1689</h1>
                                        </div>
                                        <h2>Baptist Confession of Faith</h2>
                                        <h3>with Dr. Sam Waldron</h3>
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

                                    </div>

                                </div>

                                <div className="col-lg-6">
                                    <div className="banner-video" style={{ pointerEvents: 'none' }}>
                                        <ReactPlayer
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
        </React.Fragment>
    )
}

export default MaminBanner;