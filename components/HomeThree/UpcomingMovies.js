import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
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
            items:3,
        },
        992:{
            items:4,
        },
        1200:{
            items:4,
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
            <div className="latest-trailer-three ptb-100 jarallax">
                <div className="container">
                    <div className="section-title white-title">
                        <span>Latest Trailer</span>
                        <h2>Upcoming Movies By Our Production House</h2>
                    </div>

                    {display ? <OwlCarousel 
                        className="latest-trailer-wrap-two owl-carousel owl-theme"
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