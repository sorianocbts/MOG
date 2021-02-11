import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import Iframe from 'react-iframe'
import { LBCF } from './LBCF'

const ChapterModal = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        London Baptist Confession of Faith of 1689
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{`Chapter  ${props.chapter.chapterNumber}-  ${props.chapter.title}`}</h4>
                    {/* <p> */}
                    {/* {LBCF[`Chapter 1`][0]} */}
                    <Iframe url={`https://www.the1689confession.com/1689/chapter-${props.chapter.chapterNumber}`}
                        width="100%"
                        height="450px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative" />
                    {/* </p> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} className={`btn-outline`} style={{ backgroundColor: '#fce14f' }}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ChapterModal
