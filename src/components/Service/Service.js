import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = (props) => {
    console.log(props.service._id)

    return (
        <Col>
            <div className="service pb-3">
                <img style={{ height: '220px' }} src={props.service?.image} className=" w-100 " alt="" />
                <h3>{props.service?.name}</h3>
                <h5>Price: {props.service?.price}</h5>
                <p className="px-3">{props.service?.description}</p>
                <Link to={`/details/${props.service?._id}`}>
                    <button className="btn btn-warning">Buy now {props.service?.name.toLowerCase()}</button>
                </Link>
            </div></Col>
    );
};

export default Service;