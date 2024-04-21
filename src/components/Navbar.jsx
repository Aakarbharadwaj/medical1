import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';


const
    Navbar = () => {
        const cart = useSelector((state) => state.cart);
        return (

            <nav className='flex justify-between items-center p-2 bg-blue-900'>
                <div className='w-20'>
                    <NavLink to={'/'}><img src='https://uploads.turbologo.com/uploads/design/hq_preview_image/881852/draw_svg20210625-19886-u8ghol.svg.png' alt='Logo' className='h-auto w-auto max-w-20 max-h-full' /></NavLink>
                </div>

                <div>
                    <ul className='flex text-blue-50'>
                        <li className='hover:text-green-400'><NavLink to={'/'}>Home</NavLink></li>
                        <li className='ml-10 hover:text-green-400'><NavLink to={'/about'}>About</NavLink></li>
                        <li className='ml-10 hover:text-green-400'><NavLink to={'/login'}>LogIn</NavLink></li>
                        <li className='ml-20 hover:text-green-400'>
                            <NavLink to={'/cart'}>
                                <div className="relative">
                                    <FaShoppingCart className="absolute top-0 right-1 text-2xl" />
                                    {
                                        cart.length > 0 &&
                                        <span className="absolute top-[-7px] left-[-11px] bg-green-500 rounded-full w-4 h-4 flex justify-center items-center text-white text-xs animate-bounce">{cart.length}</span>
                                    }
                                </div>

                            </NavLink></li>
                    </ul>
                </div>
            </nav>


        )
    }

export default Navbar