import { Rating } from '@mui/material';
import React from 'react';
import { Col } from 'react-bootstrap';

const Review = (props) => {
    console.log(props.review)
    return (
        <Col>
            <div className="service pb-3">

                <h3>{props.review?.name}</h3>
                <Rating name="read-only" value={props.review?.point} readOnly />
                {/* <h5>Rating: {props.review?.point}</h5> */}
                <p className="px-3">{props.review?.message}</p>

            </div></Col>
    );
};

export default Review;