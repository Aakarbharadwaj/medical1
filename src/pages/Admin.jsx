import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const AdminPanelForm = () => {
    const [formValue, setFormValue] = useState({
        id: "",
        title: "",
        price: "",
        image: "",
        description: "",
        rating: ""
    });
    const changeHandler = (e) => {
        const { name, value, type } = e.target;
        setFormValue((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    const onSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            const response = await axios.post("http://localhost:4000/api/v1/addProducts", formValue);

            toast.success("data sent successfully from Admin");
            setFormValue({
                id: "",
                title: "",
                price: "",
                image: "",
                description: "",
                rating: ""
            });
        }
        catch (err) {
            toast.err("An error occured while adding product")
        }
        // const onSubmit = async (e) => {
        //     e.preventDefault(); // Prevent default form submission behavior

        //     try {
        //         const response = await axios.post("http://localhost:1000/api/v1/addProducts", formValue);

        //         // Assuming the server responds with a success message
        //         toast.success(response.data.message);

        //         // Clear the form after successful submission
        //         setFormValue({
        //             id: "",
        //             title: "",
        //             price: "",
        //             image: "",
        //             description: "",
        //             role: ""
        //         });
        //     } catch (error) {
        //         // Handle errors from the server
        //         if (error.response) {
        //             toast.error(error.response.data.message);
        //         } else {
        //             toast.error("An error occurred while processing your request.");
        //         }
        //     }
        // }

    }
    // useEffect(() => {
    //     handleAdd();
    // }, [value])
    return (
        <div className="max-w-4xl mx-auto mt-8 p-6 bg-black rounded-lg shadow-md text-white border-4 border-sky-600">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Add Product</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                    <label htmlFor="id" className="block text-sm font-medium">ID</label>
                    <input type="text" onChange={changeHandler} id="id" name="id" value={formValue.id} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-800 text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium">Title</label>
                    <input type="text" onChange={changeHandler} id="title" name="title" value={formValue.title} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-800 text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium">Price</label>
                    <input type="text" onChange={changeHandler} id="price" name="price" value={formValue.price} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-800 text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium">Description</label>
                    <textarea id="description" onChange={changeHandler} name="description" value={formValue.description} rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-800 text-white"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium">Category</label>
                    <input onChange={changeHandler} placeholder='tablet / serup / steroid / energy drink' type="text" id="category" value={formValue.category} name="category" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-800 text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium">Image</label>
                    <input onChange={changeHandler} type="file" id="image" name="image" value={formValue.image} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-800 text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block text-sm font-medium">Rating</label>
                    <input onChange={changeHandler} type="text" id="rating" name="rating" value={formValue.rating} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-800 text-white" />
                </div>
                <div className="mt-4">
                    <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminPanelForm;
