import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddReview.css"

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const date = new Date();
    const time = date.toLocaleTimeString();
    const onSubmit = data => {
        data.time = time;
        axios.post('http://localhost:5000/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added sucessfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-review">
            <h1>Please add a review about our watches</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />

                <textarea className="mb-3" {...register("message")} placeholder="Message" />
                <input type="text" {...register("point")

                } placeholder="review point" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReview;