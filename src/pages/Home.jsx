import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import Spinner from '../components/Spinner';

const Home = () => {
    const API_url = "https://fakestoreapi.com/products"
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const fetchProductData = async () => {
        setLoading(true);

        try {
            const res = await fetch(API_url);
            const data = await res.json();
            setPost(data);
        }
        catch (err) {
            console.log("error in loading");
            setPost([]);
        }

        setLoading(false);
    }
    useEffect(() => {
        fetchProductData();
    }, [])
    return (
        <div className="flex flex-wrap gap-6 w-90 bg-green-50 mx-auto my-6 px-6 py-6 justify-center">

            {loading ?
                <Spinner /> :

                post.map(item => {

                    return (
                        <Product key={item.id} item={item} />
                    )
                })

            }
        </div>
    )
}

export default Home