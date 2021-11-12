import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';

import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import {
    Switch,
    Route,

    useRouteMatch
} from "react-router-dom";

import "./DashBoard.css"
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const DashBoard = () => {
    const { admin, user, signOutt } = useAuth();
    let { path, url } = useRouteMatch();
    console.log(path, url)

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
                            {/* <Link to="/makeadmin" className=" link mb-1">
                                Make Admin
                            </Link> */}
                            <Link to={`${url}/makeadmin`}>Make Admin</Link>

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
                    {
                        user.email ?
                            <button className="btn btn-info text-blue fw-bold my-3" onClick={signOutt}>log out</button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}


                </div>

                <div className="col-12 col-md-9 ">
                    {/* <img className="w-100 row" src="https://images.unsplash.com/photo-1525342306245-c6a1e32087ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" /> */}
                    <Switch>

                        <Route path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>

                    </Switch>
                </div>


            </div>


        </Container>
    );
};

export default DashBoard;