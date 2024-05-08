import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import Spinner from '../components/Spinner';
import { useSelector } from 'react-redux';
import axios from 'axios'; // Import Axios

const Home = () => {
    // const apiUrl = "http://localhost:4000/api/v1";
    const apiUrl = "https://medical1backend.onrender.com/api/v1";
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const keyword = useSelector((state) => state.search.keyword);

    const fetchProductData = async () => {
        setLoading(true);

        try {
            const res = await axios.get(`${apiUrl}/getProducts`); // Use axios.get with the correct URL
            setPost(res.data); // Access the data property of the response object
        } catch (err) {
            console.log("Error in loading:", err);
            setPost([]);
        }

        setLoading(false);
    }

    const fetchProductDataWithKeyword = async (keyword) => {
        setLoading(true);

        try {
            const res = await axios.get(`${apiUrl}/getProducts`); // Use axios.get with the correct URL
            const data = res.data; // Access the data property of the response object


            if (keyword !== '') {
                // Filter products based on categories that include the keyword
                const filteredProducts = data.filter(product =>
                    product.category.toLowerCase().includes(keyword.toLowerCase())
                );
                setPost(filteredProducts);
                keyword = "";
            } else {
                setPost(data);
            }
        } catch (err) {
            console.log("Error in loading:", err);
            setPost([]);
        }

        setLoading(false);
    }

    useEffect(() => {
        if (keyword === '') {
            fetchProductData();
        }
        else {
            fetchProductDataWithKeyword(keyword);
        }
    }, [keyword]);

    return (
        <div className="flex flex-wrap gap-6 bg-sky-100 mx-auto my-6 px-6 py-6 justify-center min-h-80">
            {loading ?
                <Spinner /> :
                post ? post.map(item => <Product key={item.id} item={item} />) : ("no data found")
            }
        </div>
    );
}

export default Home;