import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItems from '../components/CartItems'

const Cart = () => {
    const { cart } = useSelector((state) => state)
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        setTotalAmount(cart.reduce((a,b)=>{
            return a+b.price;
        },0))
    },)
    return (
        <div >
            {cart.length > 0 ? (<div>
                <div>{
                    cart.map((item, index) => {
                        <CartItems key={index} item={item} />
                    })
                }</div>
                <div>
                    <div>
                        <h1>Your Cart</h1>
                        <div>Summary</div>
                        <p>Total items :{cart.length}</p>
                    </div>
                    <div>
                        <h1>Total Amount:{totalAmount}</h1>
                    </div>
                </div>
            </div>) : (
                <div className='mt-20 font-bold'>
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