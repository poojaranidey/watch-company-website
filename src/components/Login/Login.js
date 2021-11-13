import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


import "./Login.css";
const Login = () => {
    const { signInUsingGoogle, handleEmail, handlePass, error, loggIn } = useAuth()

    const location = useLocation();
    const history = useHistory();



    const handleLogIn = (e) => {
        e.preventDefault();
        loggIn(history, location)
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(location.state?.from || '/dashboard');
            })
    }


    return (
        <div className="login-form py-5">
            <div className="login">
                <h2>Login</h2>
                <div>
                    <form onSubmit={handleLogIn} > <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePass} type="password" placeholder="Password" />
                        </Form.Group>

                        <button type="submit" className="bg-warning rounded py-2 px-3 border-0">Login</button></form>

                    <p>{error}</p>
                </div>
                <p>new to our website? <Link to="/register">Create Account</Link></p>
                <div>-------or----------</div>
                <button
                    className="btn btn-warning"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;