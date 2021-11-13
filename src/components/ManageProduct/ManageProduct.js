import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

import { FaTrash } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';

const ManageProduct = () => {
    const { user } = useAuth()
    const [approve, setApprove] = useState(false)
    const [all, setAll] = useState([])
    const [allEvent, setAllEvent] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/myorder')
            .then(res => res.json())
            .then(data => setAll(data))
    }, [approve])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setAllEvent(data))
    }, [])


    const deleteBtn = id => {
        fetch(`http://localhost:5000/myorder/${id}`, {
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
        status: 'Approved'
    }
    const handleApproved = id => {
        fetch(`http://localhost:5000/myorder/${id}`, {
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

    const deleteEvent = id => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Product Delete successfull')
                    const newAllEvent = allEvent.filter(c => c._id !== id)
                    setAllEvent(newAllEvent)
                }
            })
    }
    return (
        <div className=" pb-5 mb-5">
            <div className="col-12 col-md-12 pb-5 mb-5">
                {
                    user.email && <Container>

                        <div>
                            <h3 className="text-center py-5">Product Management</h3>
                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <Table className="customWidth" striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        {
                                            allEvent.map(b => <tbody key={b._id}>
                                                <tr>
                                                    <td>{b.name}</td>
                                                    <td><FaTrash onClick={() => deleteEvent(b._id)} className="mx-2" /></td>
                                                </tr>
                                            </tbody>)
                                        }
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </Container>
                }
            </div>
        </div>
    );
};

export default ManageProduct;