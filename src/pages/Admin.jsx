import React from 'react';

const AdminPanelForm = () => {
    return (
        <div className="max-w-4xl mx-auto mt-8 p-6 bg-black rounded-lg shadow-md text-white border-4 border-sky-600">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Add Product</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="id" className="block text-sm font-medium">ID</label>
                    <input type="text" id="id" name="id" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-800 text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium">Title</label>
                    <input type="text" id="title" name="title" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-800 text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium">Price</label>
                    <input type="text" id="price" name="price" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-800 text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium">Description</label>
                    <textarea id="description" name="description" rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-800 text-white"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium">Category</label>
                    <input placeholder='tablet / serup / steroid / energy drink' type="text" id="category" name="category" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-800 text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium">Image</label>
                    <input type="file" id="image" name="image" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-800 text-white" />
                </div>
                <div className="mt-4">
                    <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminPanelForm;
