import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/slice/CartSlice';
import toast from 'react-hot-toast';

const CartItems = ({ item }) => {
    const dispatch = useDispatch();
    // const cart = useSelector((state)=>state.cart)
    const removeProduct = (item) => {
        dispatch(remove(item.id));
        toast.error("product removed from cart")
    }
    return (
        <div className='flex flex-row w-1/2 m-auto'>
            <div className='w-1/4'>
                <img src={item.image} alt='product image' className='w-full' />
            </div>
            <div>
                <div className='flex flex-col space-y-4 text-justify ml-10 '>
                    <h2>{item.title}</h2>
                    <p className='text-sm text-gray-500 mt-4'>{item.description.length > 20 ? `${item.description.slice(0, 100)}...` : (item.description)}</p>
                    <div className='flex justify-between'>
                        <p className='text-green-500 font-bold text-2xl'>${item.price}</p>
                        <div className='text-2xl text-red-500 cursor-pointer' onClick={() => removeProduct(item)}><MdDelete /></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartItems