import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <nav>
            <div>
                <img src=''>logo</img>
            </div>
            <div>
                <ul flex>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/cart'}>Cart</Link></li>
                    
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar