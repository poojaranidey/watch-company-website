import React, { useEffect, useState } from 'react';
import { Accordion, Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';

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
            <section>
                <Carousel>
                    <Carousel.Item>
                        <img
                            style={{ height: '93vh', objectFit: 'cover' }}
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className="heading text-uppercase ">Time to be Different - That's our Motto</h1>
                            <p className="tag-p">  A watch says a lot about you and it should help you stand out (no Apple watches here). We only carry watch brands that make a statement.</p>
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
                            <h1 className="heading text-uppercase ">50% OFF ARSENALE COLLECTION</h1>
                            <p className="tag-p">Watches.com Exclusive Offer
                                Take an EXTRA 20% off any Arsenale watch plus get a FREE rubber strap</p>
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
                            <h1 className="heading text-uppercase ">Time to be Different - That's our Motto</h1>
                            <p className="tag-p"> A watch says a lot about you and it should help you stand out (no Apple watches here). We only carry watch brands that make a statement.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section>
                <Container>
                    <h1 className="text-warning mt-5">Our Watches</h1>
                    <Row xs={1} md={3} className="g-4  py-5">
                        {
                            services.slice(0, 6)?.map(service => <Col>
                                <div className="service pb-3">
                                    <img style={{ height: '220px' }} src={service?.image} className=" w-100 " alt="" />
                                    <h3>{service?.name}</h3>
                                    <h5>Price: {service?.price}</h5>
                                    <p className="px-3">{service?.description}</p>
                                    <Link to={`/details/${service?._id}`}>
                                        <button className="btn btn-warning">Buy Now{service?.name.toLowerCase()}</button>
                                    </Link>
                                </div></Col>)
                        }
                    </Row>
                    <Link to='/services'>
                        <button className="btn btn-warning">See more </button>
                    </Link>

                </Container>
            </section>

            <section>
                <div className="review mt-5">
                    <Reviews></Reviews>
                </div>
            </section>

            <div className="mb-5 pb-2 accordition-items mt-5">

                <section className="container mt-5 pb-3">
                    <h1 className="fw-bold text-center text-warning mt-5">People Why Choose Our Watches
                    </h1>
                    <div className="row align-items-center">

                        <div className="col-lg-6 ">
                            <Accordion >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        We are building a bigger collection of responsible Watches </Accordion.Header>
                                    <Accordion.Body>
                                        We are building a bigger community of responsible all watches by providing best offer on responsible watch throughout our website .
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        To make it easy for people to select watch responsibly</Accordion.Header>
                                    <Accordion.Body>
                                        We are showcasing how operators incorporate sustainability for all watches, so you know exactly what impact your watch can have.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        To have people to life-enriching smart watch experiences</Accordion.Header>
                                    <Accordion.Body>
                                        ourRadar has been built on the guiding belief that watches has the ability to not only enrich our lives for time but the lives of all living things around us. We believe that time is a superpower
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>You Need to Know About offers Are Best Measured In New Friends </Accordion.Header>
                                    <Accordion.Body>
                                        We always have and always will strive to connect people to life-enriching best watches experiences, and that means playing our part in protecting the planet for your best time.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </div>
                        <div className="col-lg-6">
                            <img src="https://images.unsplash.com/photo-1506193095-80bc749473f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" className="w-75 p-5" alt=""></img>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;