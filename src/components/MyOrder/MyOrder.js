import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';

import useAuth from '../../hooks/useAuth';


const MyOrder = () => {
    const { user } = useAuth()
    const mail = user.email;

    const [myOrder, setMyOrder] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/myorder')
            .then(res => res.json())
            .then(data => {
                const onlyMine = data.filter(mine => mine.email === mail)
                setMyOrder(onlyMine)
                console.log(data);
            })
    }, []);


    const deleteBtn = id => {
        fetch(`http://localhost:5000/myorder/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Delete successfull')
                    const newAll = myOrder.filter(b => b._id !== id)
                    setMyOrder(newAll)
                }
            })
    }

    return (
        <div>
            {
                user.email && <div>
                    <Container>
                        <div className="row my-5 py-5">
                            <div className="col-12 col-md-3"></div>
                            <div className="col-12 col-md-9">
                                {
                                    (myOrder.length !== 0) ? <Row xs={1} md={2} className="g-4">
                                        {
                                            myOrder.map(order => <div key={order._id}>
                                                {
                                                    console.log('ok', order)
                                                }
                                                <div style={{ height: '150px' }} className="d-flex align-items-center justify-content-center w-100 border border-1">
                                                    <div className="d-flex align-items-center">
                                                        <div className="w-50 h-100"><img className="w-50 h-100" src={order?.image} alt="" /></div>
                                                        <div className="text-start">

                                                            <h6 className="p-0 m-0">watch name : {order?.name}</h6>
                                                            <p>date : {order?.date || 'not given'}</p>
                                                            {/* <Button variant="warning" className="mx-2" >{order?.status}</Button> */}
                                                            <Button variant="danger" className="mx-2" onClick={() => deleteBtn(order._id)}>Cancel</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                        }
                                    </Row> : <h1>Loading...</h1>
                                }
                            </div>
                        </div>
                    </Container>
                </div>
            }
        </div>
    );
};

export default MyOrder;