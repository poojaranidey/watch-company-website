import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import "./Register.css";
const Register = () => {
    const { signInUsingGoogle, signUpp, handleName, handleEmail, handlePass, error, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handlesignUpp = (e) => {
        e.preventDefault();
        signUpp(history)
    }
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            }).catch((error) => {
                setError(error.message)
            });
    }
    return (
        <div className="login-form py-5">
            <div className="login">
                <h2>Register: Create Account</h2>
                <form onSubmit={handlesignUpp}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control onBlur={handleName} type="name" placeholder="Enter Your Name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
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

                    <Button variant="primary" type="submit">
                        Sign up
                    </Button>
                </form>

                <p>{error}</p>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>----------or-------------</div>
                <button
                    onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;