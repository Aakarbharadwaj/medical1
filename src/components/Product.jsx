import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { add, remove } from '../redux/slice/CartSlice';
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';


const Product = (props) => {
    const item = props.item;
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const addToCart = (item) => {
        dispatch(add(item))
        toast.success("product added to cart");
    }
    const removeFromCart = (item) => {
        dispatch(remove(item.id))
        toast.error("Product removed from cart");
    }

    return (
        <div className="bg-white shadow-md rounded-md p-4 border w-full sm:w-1/2 md:w-auto lg:w-1/4 xl:w-1/5 hover:scale-110 transition duration-300 ease-in">
            <Link to={`/description/${item._id}`}>
                <div>
                    <img src={item.image} alt={`${item.category} image`} className="w-full h-48 object-cover" />
                </div>
            </Link>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-gray-600 mt-2 text-[10px] text-left ">{item.description && item.description.length > 20 ? `${item.description.slice(0, 100)}...` : item.description}</p>
                    <p className="text-gray-800 font-semibold mt-2">${item.price}/-</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                    {
                        cart.some((p) => p.id === item.id) ? (
                            <button onClick={() => removeFromCart(item)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Remove</button>
                        ) : (
                            <button onClick={() => addToCart(item)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add</button>
                        )
                    }
                    <p className='flex items-center  bg-green-700 px-2 py-1 rounded-lg text-green-50 font-bold'>{item.rating}<span className='text-xs ml-1'><IoIosStar /></span></p>
                </div>
        </div>

    );
}

export default Product;
