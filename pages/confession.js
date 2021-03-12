import React from 'react';
import Link from 'next/link';
import { goToAnchor } from 'react-scrollable-anchor'
import ScrollableAnchor from 'react-scrollable-anchor'
import Navbar from '../components/_App/Navbar';
import LBCF from "../components/HomeThree/LBCF"

const Confession = () => {
    const formatURI = (str) => {
        return str.split(" ").join("-").toLowerCase()
    }
    return (
        <>
            <Navbar />
            <style jsx global>{`
            body {
                background-color:#fff;
            }
            .confession-container{
                padding: 10rem 4rem;
            }
            .font-light {
                text-transform: capitalize;
                font-family: 'Open Sans' !important;
                font-weight:400 !important;
                font-size: 12px !important;
                color: blue !important;
            }
            `}
            </style>
            <div className={`container confession-container shadow`}>
                <div className={`mb-1`}><h1 className={`text-center`}>The London Baptist Confession of Faith of 1689</h1></div>
                {LBCF["Data"].map((chapter, chapterIndex) => (
                    <>
                        <div className={`chapter-container `}>
                            <Link href={`/confession/#${formatURI(chapter["Title"])}`}><a onClick={() => goToAnchor(`${formatURI(chapter["Title"])}`)}>
                                <h4 className={`text-left font-light`}>Chapter {chapter["Chapter"]}: {chapter["Title"]}</h4></a></Link>
                        </div>
                    </>
                ))}
                {LBCF["Data"].map((chapter, chapterIndex) => (
                    <>
                        <ScrollableAnchor id={`${formatURI(chapter["Title"])}`} key={chapterIndex}>
                            <div className={`chapter-container mt-4 mb-4`}>
                                <h3 className={`text-center `} style={{ lineHeight: '0.9' }}>Chapter {chapter["Chapter"]}</h3>
                                <h2 className={`text-center`}>{chapter["Title"]}</h2>
                                {chapter["Sections"].map((paragraph, paragraphIndex) => (
                                    <>
                                        <div className={`mb-4`} key={paragraphIndex}>
                                            <p><span className={`font-weight-bold mr-2`}>{paragraph["Section"]}</span>{paragraph["Content"]}</p>
                                        </div>

                                    </>
                                ))}
                            </div>
                        </ScrollableAnchor>
                    </>
                ))}
            </div>
        </>
    )
}

export default Confession;