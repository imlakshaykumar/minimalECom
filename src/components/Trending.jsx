import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// import { data } from "../utils/data";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useState } from "react";

export const Trending = () => {
    // let startIndex = 8;
    // let endIndex = 20;

    let [filteredData, setFilteredData] = useState([]);


    //  filteredData = data.slice(startIndex, endIndex);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/products');
                const data = res.data;
                const filtered = data.slice(8, 20);
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
                <div className="trending-head flex justify-between items-center mb-10">
                    <h3 className="text-2xl font-bold">Trending Now</h3>
                    <div className="trending-btn-div flex justify-center items-center gap-1">
                        <button className="tending-btn bg-[#373737] p-3 hover:bg-black transition-all duration-100 ease-in">
                            <FaArrowLeft className="text-white text-lg" />
                        </button>
                        <button className="tending-btn p-3 bg-[#373737] hover:bg-black transition-all duration-100 ease-in">
                            <FaArrowRight className="text-white text-lg" />
                        </button>
                    </div>
                </div>
                <div className="trending-content w-full grid grid-rows-1 grid-flow-col overflow-y-hidden overflow-x-auto scrollbar-none">
                    <div className="flex gap-5">
                        {
                            filteredData.map((item, key) => {
                                return (
                                    <div key={ key } className="w-[13rem] h-fit border-2 border-gray-300 hover:border-black transition-all duration-100 ease-in cursor-pointer">
                                        <Link to={ `/product/${item.id}` }>
                                            <div className="item-image-div block" >
                                                <img src={ item.image } alt="image1" className="item-image object-cover" />
                                            </div>
                                            <div className="item-info-div p-2">
                                                <p className="item-name">{ item.name }</p>
                                                <p className="item-price text-xl font-bold mt-3">${ item.price }</p>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div >
            </div >
        </>
    )
}
