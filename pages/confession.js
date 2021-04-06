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
                background-color:black;
            }
            .confession-container{
                background-color:#fff;
                padding: 10rem 4rem;
            }
            .font-light {
                text-transform: capitalize;
                font-family: 'Open Sans' !important;
                font-weight:400 !important;
                font-size: 13px !important;
                color: blue !important;
            }
            .paragraphs {
                font-family: 'Lora', serif !important;
            }
            .ch-link {
                color: #272B2B !important;
            }
            .ch-link:hover {
                color: #fce14f !important;
                text-decoration: underline;
            }
            `}
            </style>
            <div className={`container confession-container shadow`}>
                <div className={`mb-4`}><h1 className={`text-center`}>The London Baptist Confession of Faith of 1689</h1></div>
                <div className={`row flex-wrap`}>
                    <div className={`col-sm-12 col-md-4`}>
                        {LBCF["Data"].slice(0, 11).map((chapter, chapterIndex) => (
                            <>
                                <div className={`chapter-container `} key={chapterIndex}>
                                    <Link href={`/confession/#${formatURI(chapter["Title"])}`}><a onClick={() => goToAnchor(`${formatURI(chapter["Title"])}`)}>
                                        <h4 className={`text-left font-light ch-link`}><strong>Chapter {chapter["Chapter"]}</strong>: {chapter["Title"]}</h4></a></Link>
                                </div>
                            </>
                        ))}</div>
                    <div className={`col-sm-12 col-md-4`}>
                        {LBCF["Data"].slice(11, 22).map((chapter, chapterIndex) => (
                            <>
                                <div className={`chapter-container `} key={chapterIndex}>
                                    <Link href={`/confession/#${formatURI(chapter["Title"])}`}><a onClick={() => goToAnchor(`${formatURI(chapter["Title"])}`)}>
                                        <h4 className={`text-left font-light ch-link`}><strong>Chapter {chapter["Chapter"]}</strong>: {chapter["Title"]}</h4></a></Link>
                                </div>
                            </>
                        ))}</div>
                    <div className={`col-sm-12 col-md-4`}>
                        {LBCF["Data"].slice(22, 32).map((chapter, chapterIndex) => (
                            <>
                                <div className={`chapter-container `} key={chapterIndex}>
                                    <Link href={`/confession/#${formatURI(chapter["Title"])}`}><a onClick={() => goToAnchor(`${formatURI(chapter["Title"])}`)}>
                                        <h4 className={`text-left font-light ch-link`}><strong>Chapter {chapter["Chapter"]}</strong>: {chapter["Title"]}</h4></a></Link>
                                </div>
                            </>
                        ))}</div>

                </div>
                {LBCF["Data"].map((chapter, chapterIndex) => (
                    <>
                        <ScrollableAnchor id={`${formatURI(chapter["Title"])}`} key={chapterIndex}>
                            <div className={`chapter-container mt-4 mb-4`}>
                                <h3 className={`text-center `} style={{ lineHeight: '0.9' }}>Chapter {chapter["Chapter"]}</h3>
                                <h2 className={`text-center`}>{chapter["Title"]}</h2>
                                {chapter["Sections"].map((paragraph, paragraphIndex) => (
                                    <>
                                        <div className={`mb-4 paragraphs`} key={paragraphIndex}>
                                            {/* <p><span className={`font-weight-bold mr-2`}>{paragraph["Section"]}</span>{paragraph["Content"]}</p> */}
                                            <div className="content paragraphs" dangerouslySetInnerHTML={{ __html: paragraph[0] }}></div>
                                            <div className="content paragraphs" dangerouslySetInnerHTML={{ __html: paragraph[1] }}></div>
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