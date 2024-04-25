import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { setSearchKeyword } from '../redux/slice/SearchSlice';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
const Search = () => {
    const [searchItem, setSearchItem] = useState("");
    const handleChange = (e) => {
        setSearchItem(e.target.value);
    }
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(setSearchKeyword(searchItem))
    }
    return (
        <div className='border-2 rounded-full w-1/3 m-auto mt-5 flex px-2 hover:border-orange-500 hover:scale-150 transition duration-300'>
            <input type='text' placeholder='Search here' className='w-full outline-none' onChange={handleChange} />
            <button className='hover:text-orange-500' onClick={handleSearch} ><FaSearch /></button>
        </div>
    )
}

export default Search


// import React, { useState } from 'react'
// import { FaSearch } from "react-icons/fa";

// const Search = () => {
//     const [searchItem, setSearchItem] = useState("");
//     const handleChange = (e) => {
//         setSearchItem(e.target.value);
//     }
//     const handleSearch = () => {
//         dispatch(search(searchItem))
//     }
//     return (
//         <div className='border-2 rounded-full w-1/3 m-auto mt-5 flex px-2 hover:border-orange-500 hover:scale-150 transition duration-300'>
//             <input type='text' placeholder='Search here' className='w-full outline-none' onChange={handleChange} />
//             <button className='hover:text-orange-500' onClick={handleSearch} ><FaSearch /></button>
//         </div>
//     )
// }

// export default Search