
import React from 'react';
import { ButtonGroup, Form } from 'react-bootstrap';
import "./Footer.css";

const Footer = () => {
    return (
        // footer section 
        <div className="bg-dark pt-5">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div><h3 className=" text-secondary">Address</h3>
                        <div className="text-secondary">
                            <p>Email: online@school.com</p><p>Phone: +8801752432222</p></div>
                    </div>
                    <div className=" text-light">
                        <div className="footer-cont"><h1>Subscribe</h1><div className="address"> <Form.Label>Student's Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" /> <ButtonGroup className="btn btn-info mt-3">Send</ButtonGroup><div className="icons"></div>
                        </div>
                        </div>
                        <p className="bg-dark text-white m-3">© 2021 education. All rights reserved</p>
                    </div>

                </div>

            </div>

        </div>


    );
};

export default Footer;