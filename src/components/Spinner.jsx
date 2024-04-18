import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='border-8 border-x-0 border-blue-600 rounded-full h-12 w-12 animate-spin'></div>
            <p className='ml-2'>Loading...</p>
        </div>
    );
}

export default Spinner;
