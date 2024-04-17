import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItems from '../components/CartItems'

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        setTotalAmount(cart.reduce((a, b) => {
            return a + b.price;
        }, 0))
    }, [cart])
    return (
        <div >
            {cart.length > 0 ? (<div>
                <div className='border border-x-0 border-b-0 mt-10 pt-10'>{
                    cart.map((item, index) => (
                        <CartItems key={index} item={item} />
                    ))
                }</div>
                <div className=' border-blue-500 border-8'>
                    <div >
                        <h1 className='text-2xl'>Your Cart</h1>
                        <div>Summary</div>
                        <p>Total items :{cart.length}</p>
                    </div>
                    <div>
                        <h1 >Total Amount:<span className='text-green-700'>{totalAmount}</span></h1>
                    </div>
                </div>
            </div>) : (
                <div className='mt-20 font-bold '>
                    <h1 className='font-bold text-2xl'>cart is Empty</h1>
                    <Link to={'/'}><button className='bg-green-800 text-green-50 py-2 px-4 rounded-full mt-20'>
                        Shop Now
                    </button></Link>
                </div>
            )}

        </div>

    )
}

export default Cart