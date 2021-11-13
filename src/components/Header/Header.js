import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';






const Header = () => {
    const { user, signOutt } = useAuth();
    // Header section 
    return (
        <div>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">watch company</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav >

                            <Nav.Link as={Link} to="/home">Home</Nav.Link>

                            <Nav.Link className="navlink" as={Link} to="/services">Explore</Nav.Link>

                            {/* <Nav.Link className="navlink" as={Link} to="/about">About-us</Nav.Link> */}

                            {
                                user.email ?
                                    <>
                                        <Nav.Link className="navlink" as={Link} to="/dashboard">DashBoard</Nav.Link>
                                        {user.email && <span className="px-3 pt-2" style={{ color: 'white' }}>Hello {user.displayName} </span>}
                                        <button className="btn btn-warning text-blue fw-bold" onClick={signOutt}>log out</button>
                                    </>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;