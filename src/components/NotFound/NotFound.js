import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        // not found section 
        <div>

            <div>
                <h1 className="mb-2 pb-2">OOPS!!!! page not found</h1>
                <img className="mb-3" src="https://cdn.dribbble.com/users/992274/screenshots/7392790/media/95483df50a0a3324c4cf9ccb1094b825.jpg" alt="" />
            </div>
            <Link to="/home"><Button className="btn btn-primary mb-3 px-5 fw-bold" size="lg">
                Go to home
            </Button>{' '}</Link>
        </div>

    );
};

export default NotFound;