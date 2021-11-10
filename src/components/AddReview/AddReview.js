import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddReview.css"

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added sucessfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service">
            <h1>Please add a review about our watches</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />

                <textarea className="mb-3" {...register("message")} placeholder="Message" />
                <input type="number" {...register("point")

                } placeholder="review point" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReview;