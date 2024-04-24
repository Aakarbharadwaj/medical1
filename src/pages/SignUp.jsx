import React, { useState } from 'react'

const SignUp = () => {
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        password: "",
        role: ""
    });
    const changeHandler = (e) => {
        const { name, value, type } = e.target;
        setFormdata((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formdata); // Log the form data to the console
    }

    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen mt-20">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-1/3">
                <h2 className="text-center text-xl font-bold mb-4 text-cyan-400">SignUp</h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name='name' value={formdata.name} onChange={changeHandler} placeholder="Enter your name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name='email' value={formdata.email} onChange={changeHandler} placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name='password' value={formdata.password} onChange={changeHandler} placeholder="Enter your password" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">Role</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="role" type="text" name='role' value={formdata.role} onChange={changeHandler} placeholder="Enter your role" />
                    </div>
                    <div className="mb-6 text-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            SignUp
                        </button>
                    </div>
                </form>
                <div className="flex justify-center">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        SignUp with Google
                    </button>
                </div>
            </div>
        </div>

    )
}

export default SignUp