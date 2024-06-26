import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { setSearchKeyword } from '../redux/slice/SearchSlice';
import { useDispatch } from 'react-redux';
// import Search from './Search';


const Navbar = () => {
    const cart = useSelector((state) => state.cart);
    const [login, setLogin] = useState(true);
    const dispatch = useDispatch();
    const handleSearch = () => {
        dispatch(setSearchKeyword(""))
    }
    return (

        <nav className='flex justify-between items-center p-2 bg-blue-950'>
            <div className='w-20'>
                <NavLink to={'/'}><img src='https://uploads.turbologo.com/uploads/design/hq_preview_image/881852/draw_svg20210625-19886-u8ghol.svg.png' alt='Logo' className='h-auto w-auto max-w-20 max-h-full' /></NavLink>
            </div>

            <div>
                <ul className='flex flex-wrap text-blue-50 text-xs gap-0 sm:text-xl'>
                    <li className='hover:text-green-400' onClick={handleSearch}><NavLink to={'/'}>Home</NavLink></li>
                    <li className='ml-2 sm:ml-10 hover:text-green-400'><NavLink to={'/about'}>About</NavLink></li>
                    <li className='ml-2 sm:ml-10 hover:text-green-400'><NavLink to={'/admin'}>Admin</NavLink></li>
                    {login ? (<li className='ml-2 sm:ml-10 hover:text-green-400' onClick={() => setLogin(false)}><NavLink to={'/login'}>LogIn</NavLink></li>) : (<li className='ml-10 hover:text-green-400 ' onClick={() => setLogin(true)}><NavLink to={'/signup'}>SignUp</NavLink></li>)}
                    <li className='ml-20 hover:text-green-400 text-orange-300'>
                        <NavLink to={'/cart'}>
                            <div className="relative">
                                <FaShoppingCart className="absolute top-0 right-12 sm:right-1 text-2xl" />
                                {
                                    cart.length > 0 &&
                                    <span className="absolute top-[-7px] left-[-60px] sm:left-[-11px] bg-green-500 rounded-full w-4 h-4 flex justify-center items-center text-white text-xs animate-bounce">{cart.length}</span>
                                }
                            </div>

                        </NavLink></li>
                </ul>
            </div>
        </nav>


    )
}

export default Navbar