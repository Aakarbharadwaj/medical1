import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { add, remove } from '../redux/slice/CartSlice';


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
        <div className="bg-white shadow-md rounded-md p-4 border w-1/6  hover:scale-110 transition duration-300 ease-in">
            <div>
                <img src={item.image} alt='image' className="w-full h-48 object-cover" />
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">{item.category}</h2>
                <p className="text-gray-600 mt-2 text-[10px] text-left ">{item.description && item.description.length > 20 ? `${item.description.slice(0, 100)}...` : item.description}</p>
                <p className="text-gray-800 font-semibold mt-2">${item.price}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
                {
                    cart.some((p) => p.id === item.id) ? (<button onClick={() => removeFromCart(item)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Remove</button>) : (<button onClick={() => addToCart(item)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add</button>)
                }



            </div>
        </div>
    );
}

export default Product;
