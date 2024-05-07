import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


const Description = () => {
  const { _id } = useParams();
  console.log(_id, "<<<id>>>>")

  const [apidata, setapidata] = useState([]);

  useEffect(() => {

    async function GetData() {

      let data = await fetch('https://medical1backend.onrender.com/api/v1/getProducts');
      let json_data = await data.json()
      setapidata(json_data.filter((item) => {
        return item._id == _id
      }))

    }

    GetData()


  }, [])




  console.log(apidata)







  return (

    <>
      {
        apidata.map((item) => (
          <div>
            <h1 className='align-centre'>Product Description</h1>
            <div className="flex bg-white shadow-md rounded-md p-4 border w-full  hover:scale-110 transition duration-300 ease-in">
              <div>
                <img src={item.image} alt='image' className="w-full h-48 object-cover hover:scale-110 transition duration-300 ease-in" />
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">{item.category}</h2>
                <p className="text-gray-600 mt-2 text-[10px] text-left ">{item.description}</p>
                <p className="text-gray-800 font-semibold mt-2">${item.price}</p>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Description