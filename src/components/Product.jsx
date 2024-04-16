import React from 'react';

const Product = (props) => {
    const item = props.item;

    return (
        <div className="bg-white shadow-md rounded-md p-4 border w-1/6 ">
            <img src={item.image} alt='image' className="w-full h-48 object-cover" />
            <div className="mt-4">
                <h2 className="text-xl font-semibold">{item.category}</h2>
                <p className="text-gray-600 mt-2 text-sm text-left">{item.description && item.description.length > 20 ? `${item.description.substring(0, 100)}...` : item.description}</p>
                <p className="text-gray-800 font-semibold mt-2">{item.price}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Remove</button>
            </div>
        </div>
    );
}

export default Product;
