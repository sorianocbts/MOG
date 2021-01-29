import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import ModalVideo from 'react-modal-video';

const options = {
    loop:true,
    margin: 30,
    nav:false,
    mouseDrag: true,
    dots: true,
    autoplay: true,
    smartSpeed:1500,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:2,
        },
        768:{
            items:2,
        },
        992:{
            items:2,
        },
        1200:{
            items:2,
        }
    }
};

const UpcomingMovies = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    // Popup Video
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <React.Fragment>
            <div className="latest-trailer ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="latest-trailer-content">
                                <span>Latest Trailer</span>
                                <h2>Upcoming Movies By Our Production</h2>
                                <p>Video production work with producing video content. It is the analogical of film making, but the images are digitally recorded instead of film stock. There are three levels of video production: production, pre-production and post-production.</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            {display ? <OwlCarousel 
                                className="latest-trailer-wrap owl-carousel owl-theme"
                                {...options}
                            >
                                <div className="latest-trailer-item">
                                    <img src="/img/latest-trailer/latest-trailer1.jpg" alt="Image" />

                                    <div className="caption">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                <Link href="#play-video">
                                                    <a
                                                        onClick={e => {e.preventDefault(); openModal()}}
                                                        className="play-video popup-youtube"
                                                    > 
                                                        <i className='bx bx-play'></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>  
                                    </div>
                                </div>

                                <div className="latest-trailer-item">
                                    <img src="/img/latest-trailer/latest-trailer2.jpg" alt="Image" />

                                    <div className="caption">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                <Link href="#play-video">
                                                    <a
                                                        onClick={e => {e.preventDefault(); openModal()}}
                                                        className="play-video popup-youtube"
                                                    > 
                                                        <i className='bx bx-play'></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>  
                                    </div>
                                </div>

                                <div className="latest-trailer-item">
                                    <img src="/img/latest-trailer/latest-trailer3.jpg" alt="Image" />

                                    <div className="caption">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                <Link href="#play-video">
                                                    <a
                                                        onClick={e => {e.preventDefault(); openModal()}}
                                                        className="play-video popup-youtube"
                                                    > 
                                                        <i className='bx bx-play'></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>  
                                    </div>
                                </div>

                                <div className="latest-trailer-item">
                                    <img src="/img/latest-trailer/latest-trailer4.jpg" alt="Image" />

                                    <div className="caption">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                <Link href="#play-video">
                                                    <a
                                                        onClick={e => {e.preventDefault(); openModal()}}
                                                        className="play-video popup-youtube"
                                                    > 
                                                        <i className='bx bx-play'></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>  
                                    </div>
                                </div>

                                <div className="latest-trailer-item">
                                    <img src="/img/latest-trailer/latest-trailer5.jpg" alt="Image" />

                                    <div className="caption">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                <Link href="#play-video">
                                                    <a
                                                        onClick={e => {e.preventDefault(); openModal()}}
                                                        className="play-video popup-youtube"
                                                    > 
                                                        <i className='bx bx-play'></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>  
                                    </div>
                                </div>

                                <div className="latest-trailer-item">
                                    <img src="/img/latest-trailer/latest-trailer6.jpg" alt="Image" />

                                    <div className="caption">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                <Link href="#play-video">
                                                    <a
                                                        onClick={e => {e.preventDefault(); openModal()}}
                                                        className="play-video popup-youtube"
                                                    > 
                                                        <i className='bx bx-play'></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </OwlCarousel> : ''}
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

export default UpcomingMovies;