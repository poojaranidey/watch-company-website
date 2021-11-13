
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import { FaCheck, FaTrash } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';
import "./ManageOrder.css"

const ManageOrder = () => {
    const { user } = useAuth()
    const [approve, setApprove] = useState(false)
    const [all, setAll] = useState([])
    const [allEvent, setAllEvent] = useState([])

    useEffect(() => {
        fetch('https://damp-taiga-36214.herokuapp.com/myorder')
            .then(res => res.json())
            .then(data => setAll(data))
    }, [approve])

    useEffect(() => {
        fetch('https://damp-taiga-36214.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllEvent(data))
    }, [])


    const deleteBtn = id => {
        fetch(`https://damp-taiga-36214.herokuapp.com/myorder/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Delete successfull')
                    const newAll = all.filter(b => b._id !== id)
                    setAll(newAll)
                }
            })
    }
    const update = {
        status: 'Shipped'
    }
    const handleApproved = id => {
        fetch(`https://damp-taiga-36214.herokuapp.com/myorder/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(update)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('approved successfully')
                    setApprove(!approve)
                }
            })
    }



    return (
        <div>
            <div className="col-12 col-md-12">
                {
                    user.email && <Container>
                        <div >
                            <h3 className="text-center py-5 ">All Order Management</h3>
                            <div className="d-flex justify-content-between text-start">
                                <p className="display  event w20">Product</p>
                                <p className="w20 event">Userr</p>
                                <p className="display   w20">Email</p>
                                <p className=" w20">Status</p>
                                <p className="w20">Action</p>
                            </div>
                            {
                                all.map(a => <div className="d-flex justify-content-between text-start" key={a._id}>

                                    <p className="w20 event ">{a.name}</p>
                                    <p className="w20 event">{a.displayName}</p>
                                    <p className=" w20 ">{a.email}</p>
                                    <p className="w20 ">{a?.status}</p>
                                    <p className="w20"><FaCheck className="w20" onClick={() => handleApproved(a._id)} /><FaTrash onClick={() => deleteBtn(a._id)} className="w20" /></p>
                                </div>)
                            }
                        </div>



                    </Container>
                }
            </div>
        </div>
    );
};

export default ManageOrder;