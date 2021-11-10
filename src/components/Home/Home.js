import React, { useEffect, useState } from 'react';
import { Accordion, Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import Service from '../Service/Service';

import Services from '../Services/Services';
import "./Home.css"

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])

    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            style={{ height: '93vh', objectFit: 'cover' }}
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className="heading text-uppercase ">Your Journeys begins</h1>
                            <p className="tag-p">A journey of a 1000 miles begins with a single step</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: '93vh', objectFit: 'cover' }}
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1 className="heading text-uppercase ">Your Journeys begins</h1>
                            <p className="tag-p">A journey of a 1000 miles begins with a single step</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: '93vh', objectFit: 'cover' }}
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1 className="heading text-uppercase ">Your Journeys begins</h1>
                            <p className="tag-p">A journey of a 1000 miles begins with a single step</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Container>
                <h1>Our Watches</h1>
                <Row xs={1} md={3} className="g-4  py-5">
                    {
                        services.slice(0, 6)?.map(service => <Col>
                            <div className="service pb-3">
                                <img style={{ height: '220px' }} src={service?.image} className=" w-100 " alt="" />
                                <h3>{service?.name}</h3>
                                <h5>Price: {service?.price}</h5>
                                <p className="px-3">{service?.description}</p>
                                <Link to={`/details/${service?.id}`}>
                                    <button className="btn btn-warning">See details for   {service?.name.toLowerCase()}</button>
                                </Link>
                            </div></Col>)
                    }
                </Row>
            </Container>

            <div>
                <Reviews></Reviews>
            </div>

            <div className="mb-5 pb-2 accordition-items">

                <section className="container mt-5 pb-3">
                    <h1 className="fw-bold text-center  mt-2">People Why Choose Our Watches
                    </h1>
                    <div className="row align-items-center">

                        <div className="col-lg-6 ">
                            <Accordion >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        We are building a bigger community of responsible travellers </Accordion.Header>
                                    <Accordion.Body>
                                        We are building a bigger community of responsible travellers by providing information on responsible travel throughout our website and online magazine, Days to Come.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        To make it easy for travellers to tour responsibly</Accordion.Header>
                                    <Accordion.Body>
                                        We are showcasing how operators incorporate sustainability into their tours, so you know exactly what impact your trip can have.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        To connect people to life-enriching travel experiences</Accordion.Header>
                                    <Accordion.Body>
                                        ourRadar has been built on the guiding belief that travel has the ability to not only enrich our lives but the lives of all living things around us. We believe that travel is a superpower
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>You Need to Know About Journeys Are Best Measured In New Friends </Accordion.Header>
                                    <Accordion.Body>
                                        We always have and always will strive to connect people to life-enriching travel experiences, and that means playing our part in protecting the planet.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </div>
                        <div className="col-lg-6">
                            <img src="https://images.unsplash.com/photo-1506193095-80bc749473f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" className="w-100 p-5" alt=""></img>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;