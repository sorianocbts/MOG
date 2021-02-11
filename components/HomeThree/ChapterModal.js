import React from 'react'
import { Modal, Button } from 'react-bootstrap'

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
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
            </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} className={`btn-outline`} style={{ backgroundColor: '#fce14f' }}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ChapterModal
