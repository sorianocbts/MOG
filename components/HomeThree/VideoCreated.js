import React from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

const VideoCreated = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <React.Fragment>
            <div className="video-created-area-three bg-color-two pb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-3 p-0">
                            <div className="video-img">
                                <img src="/img/video-created/video-created1.jpg" alt="Image"/>

                                <h3>Video Created By Vivi</h3>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 p-0">
                            <div className="video-wrap">
                                <img src="/img/video-created/video-created2.jpg" alt="Image" />

                                <Link href="#play-video">
                                    <a
                                        onClick={e => {e.preventDefault(); openModal()}}
                                        className="popup-youtube"
                                    > 
                                        <i className="flaticon-play"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 p-0">
                            <div className="video-img">
                                <img src="/img/video-created/video-created3.jpg" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </React.Fragment>
        
    )
}

export default VideoCreated;