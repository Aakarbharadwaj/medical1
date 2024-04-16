import React from 'react'
import { MdDelete } from "react-icons/md";


const CartItems = ({item}) => {

    return (
        <div className='flex flex-row'>
            <div>
                <img src='' alt='product image' className='w-full'/>
            </div>
            <div>
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <div className='flex justify-between'>
                    <p>{item.price}</p>
                    <div><MdDelete/></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartItems