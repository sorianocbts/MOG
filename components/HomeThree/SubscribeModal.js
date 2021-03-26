import React from 'react'
import Link from 'next/link';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import useForm from '../../hooks/useForm';


const SubscribeModal = (props) => {
    const [user, handleChange] = useForm({ fname: "", lname: '', email: "" });

    const handleSubmit = (e) => {
        e.preventDefault()
        async function postData() {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ pass: process.env.TEMP_POST_PASS, user })
            })

            return response.json()
        }
        postData()
        alert('Thank you!');
        props.onHide()
    }
    return (
        <>
            <style jsx global>{`
            .modal-container {
                postition: absolute;
                 top: 10%; 
                 left: 35%; 
                 width: 400px; 
                 height: 600px;
                 border: none; 
                 padding: 0 10px;
            }
        .custom-blue {
            background-color: #7fa2b1;
            border:none;
        }
        .custom-dark {
           background-color: #3b3a39;
           border: none;
        }
        .transparent {
            background-color:transparent;
            color: #fff;
            border-radius: 4px;
            margin: 4px 0;
         }
         .close-btn {
             position:absolute;
             top: -4%;
             right: -10px;
             border-radiux: 30px;
         }
         .close-btn > button {
            background-color: #3b3a39;
            border:none;
            border-radius: 50%;
         }
         .main-text {
             font-weight:400;
         }
         .input-padding-left {
             padding-left: .25rem;
         }
         .input-padding-right {
            padding-right: .25rem;
        }
         @media only screen and (max-width: 669px) {
            .modal-container {
                postition: absolute;
                 top: 10%; 
                 left: 5%; 
                 width: 400px; 
                 height: 600px;
                 border: none; 
                 padding: 0 10px;
            }
        }
        @media (max-width: 539px) {
            .modal-container {
                postition: absolute;
                 top: 10%; 
                 left: 0%; 
                 width: 300px; 
                 height: 600px;
                 border: none; 
                 padding: 0 10px;
            }
            .input-padding-left {
                padding-left: 1rem;
            }
            .input-padding-right {
               padding-right: 1rem;
           }
        }
        `}</style>



            <Modal
                {...props}
                // size="lg"
                // aria-labelledby="contained-modal-title-vcenter"
                centered
                className={`modal-container`}
            >

                <Modal.Body className={`custom-blue`}>
                    <div className={`close-btn`}>
                        <Button className="btn-secondary" onClick={props.onHide}>X</Button>
                    </div>
                    <div className={`custom-blue`} style={{ maxWidth: '100%', height: '150px' }}><img src="https://cbtseminary.s3.amazonaws.com/images/CBTS_Logo(horizontal_white)-transparent+cropped.png" /></div>
                    <Modal.Title id="contained-modal-title-vcenter" className={`custom-blue text-light main-text`}>
                        Subscribe to our Newsletter
                    </Modal.Title>
                    <p className={`text-light`}>
                        Join our mailing list to receive the latest news and updates from CBTS.
                    </p>
                </Modal.Body>

                <Modal.Footer className={`custom-dark`}>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Row>
                            <Col sm="6" className={`input-padding-right`} >
                                <Form.Control className={`transparent`} name="fname" value={user.fname} onChange={handleChange} type="text" placeholder="First Name" />
                            </Col>
                            <Col sm="6" className={`input-padding-left`}>
                                <Form.Control className={`transparent`} name="lname" value={user.lname} onChange={handleChange} type="text" placeholder="Last Name" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12">
                                <Form.Control className={`transparent`} name="email" value={user.email} onChange={handleChange} type="email" placeholder="Email" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm='12'>
                                <Button variant="outline-secondary" block className={`mt-2 block`} type="submit">Subscribe</Button>
                            </Col>
                        </Row>

                    </Form>


                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SubscribeModal



const useDelayedRender = delay => {
    const [delayed, setDelayed] = React.useState(true);
    React.useEffect(() => {
        const timeout = setTimeout(() => setDelayed(false), delay);
        return () => clearTimeout(timeout);
    }, []);
    return fn => !delayed && fn();
};

export const DelayedRender = ({ delay, children }) => useDelayedRender(delay)(() => children);