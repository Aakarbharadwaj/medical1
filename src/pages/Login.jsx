import React from 'react'

const Login = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-1/3">
        <h2 className="text-center text-xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">Role</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="role" type="text" placeholder="Enter your role" />
          </div>
          <div className="mb-6 text-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Login
            </button>
          </div>
        </form>
        <div className="flex justify-center">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Login with Google
          </button>
        </div>
      </div>
    </div>

  )
}

export default Login