import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://damp-taiga-36214.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])

    return (



        <Container  >
            <h2 className="text-warning my-5">Our Watches</h2>
            <Row xs={1} md={3} className="g-4 mb-5">
                {
                    services?.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </Container>
    )
};
export default Services;