/* eslint-disable react/prop-types */
import { MdChevronLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line react/prop-types
export const Categories = ({ category, setCategory }) => {
    let [filteredData, setFilteredData] = useState([]);

    const handleFilterClick = (e) => {
        let value = e.target.textContent;
        setCategory(value);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/products');
                const data = res.data;
                if (category.toLowerCase() === 'all') {
                    setFilteredData(data);
                } else {
                    const filtered = data.filter(item => item.dataCategory.toLowerCase() === category.toLowerCase());
                    setFilteredData(filtered);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [category]);




    return (
        <>
            <div className="category-div container max-w-[1200px] mx-auto my-16">
                <div className="category-header flex flex-col gap-5">
                    <div className="title-home flex items-center w-full mb-10">
                        <Link to='/'>
                            <div className="homeBtn flex items-center cursor-pointer">
                                <MdChevronLeft className="text-2xl" />
                                <span className="hover:underline">Home</span>
                            </div>
                        </Link>
                        <h3 className=" uppercase text-center mx-auto text-2xl font-bold">{ category }</h3>
                    </div>
                    <div className="filter-btns-div">
                        <ul className="filter-btn-list flex w-full items-center justify-center gap-3 text-xs">
                            <li
                                className="filter-btn border-2 border-gray-400 hover:border-gray-600 py-1 px-3 cursor-pointer"
                                onClick={ handleFilterClick }>All</li>
                            <li
                                className="filter-btn border-2 border-gray-400 hover:border-gray-600 py-1 px-3 cursor-pointer"
                                onClick={ handleFilterClick }>Furnitures</li>
                            <li
                                className="filter-btn border-2 border-gray-400 hover:border-gray-600 py-1 px-3 cursor-pointer"
                                onClick={ handleFilterClick }>Electronics</li>
                            <li
                                className="filter-btn border-2 border-gray-400 hover:border-gray-600 py-1 px-3 cursor-pointer"
                                onClick={ handleFilterClick }>Lamps</li>
                            <li
                                className="filter-btn border-2 border-gray-400 hover:border-gray-600 py-1 px-3 cursor-pointer"
                                onClick={ handleFilterClick }>Kitchen</li>
                            <li
                                className="filter-btn border-2 border-gray-400 hover:border-gray-600 py-1 px-3 cursor-pointer"
                                onClick={ handleFilterClick }>Chairs</li>
                            <li
                                className="filter-btn border-2 border-gray-400 hover:border-gray-600 py-1 px-3 cursor-pointer"
                                onClick={ handleFilterClick }>Skin-Care</li>
                        </ul>
                    </div>
                </div>
                <div className="content grid grid-cols-4 gap-5 mt-[4rem] mb-[8rem]">
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
