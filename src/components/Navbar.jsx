import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    return (

        <nav className='flex justify-between items-center p-2 bg-blue-900 '>
            <div className='w-20'>
                <NavLink to={'/'}><img src='https://uploads.turbologo.com/uploads/design/hq_preview_image/881852/draw_svg20210625-19886-u8ghol.svg.png' alt='Logo' className='h-auto w-auto max-w-20 max-h-full' /></NavLink>
            </div>

            <div>
                <ul className='flex text-blue-50'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li className='ml-10 mt-1'><Link to={'/cart'}><FaShoppingCart /></Link></li>
                </ul>
            </div>
        </nav>


    )
}

export default Navbar