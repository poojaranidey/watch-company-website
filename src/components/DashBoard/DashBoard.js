import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import "./DashBoard.css"

const DashBoard = () => {
    const { admin } = useAuth();

    return (
        <Container>
            <div className="row">

                <div className="col-12 col-md-3 sidebar">
                    <h1 className="heading">DashBoard</h1>
                    <div >
                        {admin && <div className="anotherSidebar" >
                            <Link to="/addproduct" className=" link">
                                Add A Product
                            </Link>
                            <Link to="/manageproduct" className=" link">
                                Manage all products
                            </Link>
                            <Link to="/manageorder" className=" link mb-1">
                                manage all orders
                            </Link>
                            <Link to="/makeadmin" className=" link mb-1">
                                Make Admin
                            </Link>

                        </div>}
                    </div>
                    <Link to="/addreview" className=" link">
                        Add your review
                    </Link>
                    <Link to="/myorder" className=" link">
                        My order
                    </Link>
                    <Link to="/payment" className=" link">
                        Payment
                    </Link>



                </div>
                <div className="col-12 col-md-9">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, saepe?
                </div>
            </div>

        </Container>
    );
};

export default DashBoard;