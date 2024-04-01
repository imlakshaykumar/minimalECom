import { Link } from "react-router-dom";
// import { data } from "../utils/data"
import { useState, useEffect } from "react";
import axios from 'axios'

export const ProudSection = () => {

    // const slicedData = data.slice(0, 8);
    let [filteredData, setFilteredData] = useState([]);


    //  filteredData = data.slice(startIndex, endIndex);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/products`);
                const data = res.data;
                const filtered = data.slice(0, 8);
                setFilteredData(filtered);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="container max-w-[1200px] mx-auto my-16">
                <div className="heading-div w-full mb-10">
                    <h3 className="heading text-2xl font-bold">Products we are proud of</h3>
                </div>
                <div className="products-div grid grid-cols-4 gap-5">
                    {
                        filteredData?.map((item, key) => {
                            return (
                                <div key={ key } className="border-2 border-gray-300 hover:border-black transition-all duration-100 ease-in cursor-pointer">
                                    <Link to={ `/product/${item.id}` }>
                                        <div className="item-image-div">
                                            <img src={ item.image } alt="image1" className="item-image" />
                                        </div>
                                        <div className="item-info-div p-2">
                                            <p className="item-name">{ item.name }</p>
                                            <p className="item-price text-xl font-bold mt-3">${ item.price }</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
