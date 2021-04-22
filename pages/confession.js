import React from 'react';
import Link from 'next/link';
import { goToAnchor } from 'react-scrollable-anchor'
import ScrollableAnchor from 'react-scrollable-anchor'
import Navbar from '../components/_App/Navbar';
import londonBaptistData from "../components/HomeThree/LBCF2"

const Confession = () => {
    const formatURI = (str) => {
        return str.split(" ").join("-").toLowerCase()
    }
    const LBCF = londonBaptistData.content

    const getParagraphs = (chapterIndex) => {
        let paragraph = LBCF[chapterIndex].chapterContent.map((par, parIndex) => {
            return par
        })
        return paragraph
    }

    const formatParagraph = (chapterIndex, paragraphIndex) => {
        let paragraphs = getParagraphs(chapterIndex)
        // console.log(paragraphs.length)
        let finalParagraph = paragraphs[paragraphIndex].map((line, lineIndex) => `${line.text} <sup>${line.superscript}</sup>`).join(' ');
        let finalParagraphScriptureRefs = paragraphs[paragraphIndex].map((line, lineIndex) => `<sup>${line.superscript}</sup>${line.scriptures}`).join(' ');
        return { finalParagraph, finalParagraphScriptureRefs }

    }
    console.log(formatParagraph(0, 0))
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
                        {LBCF.slice(0, 11).map((chapter, chapterIndex) => (
                            <>
                                <div className={`chapter-container `} key={chapterIndex}>
                                    <Link href={`/confession/#${formatURI(chapter["Title"])}`}><a onClick={() => goToAnchor(`${formatURI(chapter["Title"])}`)}>
                                        <h4 className={`text-left font-light ch-link`}><strong>Chapter {chapter["Chapter"]}</strong>: {chapter["Title"]}</h4></a></Link>
                                </div>
                            </>
                        ))}</div>
                    <div className={`col-sm-12 col-md-4`}>
                        {LBCF.slice(11, 22).map((chapter, chapterIndex) => (
                            <>
                                <div className={`chapter-container `} key={chapterIndex}>
                                    <Link href={`/confession/#${formatURI(chapter["Title"])}`}><a onClick={() => goToAnchor(`${formatURI(chapter["Title"])}`)}>
                                        <h4 className={`text-left font-light ch-link`}><strong>Chapter {chapter["Chapter"]}</strong>: {chapter["Title"]}</h4></a></Link>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className={`col-sm-12 col-md-4`}>
                        {LBCF.slice(22, 32).map((chapter, chapterIndex) => (
                            <>
                                <div className={`chapter-container `} key={chapterIndex}>
                                    <Link href={`/confession/#${formatURI(chapter["Title"])}`}><a onClick={() => goToAnchor(`${formatURI(chapter["Title"])}`)}>
                                        <h4 className={`text-left font-light ch-link`}><strong>Chapter {chapter["Chapter"]}</strong>: {chapter["Title"]}</h4></a></Link>
                                </div>
                            </>
                        ))}
                    </div>

                </div>
                {LBCF.map((chapter, chapterIndex) => (
                    <>
                        <ScrollableAnchor id={`${formatURI(chapter["Title"])}`} key={chapterIndex}>
                            <div className={`chapter-container mt-4 mb-4`}>
                                <h3 className={`text-center `} style={{ lineHeight: '0.9' }}>Chapter {chapter["Chapter"]}</h3>
                                <h2 className={`text-center`}>{chapter["Title"]}</h2>
                                {chapter.chapterContent.map((paragraph, paragraphIndex) => (
                                    <>
                                        <div className={`mb-4 paragraphs`} key={paragraphIndex}>
                                            <div className="content paragraphs" dangerouslySetInnerHTML={{ __html: `<p key=${paragraphIndex}}>${paragraphIndex + 1}. ${formatParagraph(chapterIndex, paragraphIndex).finalParagraph}</p>` }}></div>
                                            <div className="content paragraphs mt5" style={{ paddingLeft: '30px' }} dangerouslySetInnerHTML={{ __html: `<p key=${paragraphIndex + 99}}>${(formatParagraph(chapterIndex, paragraphIndex).finalParagraphScriptureRefs !== "") && formatParagraph(chapterIndex, paragraphIndex).finalParagraphScriptureRefs}.</p>` }}></div>
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