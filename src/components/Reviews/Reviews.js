import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://damp-taiga-36214.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));

    }, [])
    return (
        <Container  >
            <h2 className="text-warning my-5">Customer review</h2>
            <Row xs={1} md={3} className="g-4 mb-5">
                {
                    reviews?.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </Row>
        </Container>
    );
};

export default Reviews;