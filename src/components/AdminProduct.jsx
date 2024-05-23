import axios from 'axios';
import React from 'react';

import { toast } from 'react-hot-toast';

import { IoIosStar } from "react-icons/io";


const AdminProduct = (props) => {
    const item = props.item;
    const handleButtonClick = async (id) => {
        try {
            const response = await axios.delete(`https://medical1backend.onrender.com/api/v1/deleteProducts/${id}`);
            // const response = await axios.delete(`http://localhost:4000/api/v1/deleteProducts/${id}`);
            console.log('Response:', response.data);
            window.location.reload();
            // Handle response if needed
        } catch (error) {
            console.error('Error deleting product:', error);
            // Handle error if needed
        }
    };
    return (
        <div className="bg-white shadow-md rounded-md p-4 border w-full sm:w-1/2 md:w-auto lg:w-1/4 xl:w-1/5 hover:scale-110 transition duration-300 ease-in">
            <div>
                <img src={item.image} alt={`${item.category} image`} className="w-full h-48 object-cover" />
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600 mt-2 text-[10px] text-left ">{item.description && item.description.length > 20 ? `${item.description.slice(0, 100)}...` : item.description}</p>
                <p className="text-gray-800 font-semibold mt-2">${item.price}/-</p>
            </div>
            <div className="flex justify-between items-center mt-4">


                <button onClick={() => { handleButtonClick(item.id) }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Remove</button>

                <p className='flex items-center  bg-green-700 px-2 py-1 rounded-lg text-green-50 font-bold'>{item.rating}<span className='text-xs ml-1'><IoIosStar /></span></p>
            </div>
        </div>


    );
}

export default AdminProduct;
