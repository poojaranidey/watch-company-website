import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';


import useFirebase from '../../hooks/useFirebase';
import "./Details.css"
import { Link } from 'react-router-dom';

const Details = () => {

    const { user } = useFirebase();


    const { serviceId } = useParams();
    console.log(serviceId);

    const [services, setServices] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then((data) => setServices(data.find(x => x.id == serviceId))

            )
    }, []);
    console.log(services);
    // const { name, image, description, price } = services[0] || {};
    return (
        <div>

            <h1>{services.name}</h1>
            <img className="my-5 w-50" style={{ height: '440px' }} src={services.image} alt="" />
            <h5 className="mx-3  ">Details :{services.details}</h5>
            <h3>Total cost :{services.price}</h3>


            <div className="mb-5">

                <h1> Book your Watch {user.displayName}</h1>
                <h2> Your email : {user.email}</h2>
                <Link to={`/bookingservice/${services._id}`}>
                    <button className="btn btn-warning">
                        Place an order
                    </button>
                </Link>

            </div>


        </div >
    );
};

export default Details;