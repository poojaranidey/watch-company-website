import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import "./AddProduct.css"

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added sucessfully');
                    reset();
                }
            })
    };
    return (
        <div className="add-product">
            <h1>Please add a product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input {...register("description")} placeholder="Description" />
                <textarea className="mb-3" {...register("details")} placeholder="Details" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("image")} placeholder="image-url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;