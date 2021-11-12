import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "./MakeAdmin.css"

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    console.log(data);

                    setSuccess(true);
                }


            })

        e.preventDefault()
    }
    return (
        <div >
            <h1>Make Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <div className="mb-3  adminbutton ">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" onBlur={handleOnBlur}
                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>


                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            {success && alert('Made Admin successfully!')}

        </div>
    );
};

export default MakeAdmin;