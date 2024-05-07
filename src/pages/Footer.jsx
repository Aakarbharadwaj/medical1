import React from "react";
import { FaShoppingCart } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-black flex text-gray-400">
            <ul className="flex flex-col text-left p-4">
                <li>Contact</li>
                <li>Career</li>
                <li>Head Office</li>
                <li>Email</li>
            </ul>
            <ul className="flex flex-col text-left p-4 ml-20">
                <li>Jobs</li>
                <li>opportunities</li>
                <li>year of establishment</li>
                <li>Company Details</li>
            </ul>
        <div><FaShoppingCart className="absolute top-0 right-12 sm:right-1 text-2xl" /></div>
        </div>
    )
}

export default Footer;