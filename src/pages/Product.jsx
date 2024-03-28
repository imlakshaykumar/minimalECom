import { useState } from "react";
import { data } from "../utils/data"
import { FiMinus, FiPlus } from "react-icons/fi";
import { Trending } from "../components/Trending";

export const Product = () => {
    const filteredData = data.slice(0, 1);

    let [count, setCount] = useState(1);
    const handleMinus = () => {
        if (count === 1) {
            return;
        }
        setCount(count - 1);
    }

    const handlePlus = () => {
        setCount(count + 1)
    }

    return (
        <>
            <div className="container max-w-[1200px] mx-auto mb-16 mt-8">
                <div className="product-content-div">
                    {
                        filteredData?.map((item, key) => {
                            return (
                                <div key={ key }>
                                    <div className="product-content flex gap-5 items-center justify-center relative">
                                        <div className="productName inset-0 w-fit h-fit absolute mx-auto mt-1 text-3xl p-5 font-bold">{ item.name }</div>
                                        <div className="product-img-div w-1/2">
                                            <img src={ item.image } alt="" />
                                        </div>
                                        <div className="product-desc flex flex-col gap-8 bg-gray-200 pt-[9rem] p-[4rem] w-1/2">
                                            <p className="description text-lg">
                                                { item.description }
                                            </p>
                                            <div className="quantity-div mt-[2rem] flex items-center justify-between px-1">
                                                <p className="text-xl font-semibold">Quantity</p>
                                                <div className="product-btn-div flex items-center border-2 border-black">
                                                    <div className="minus p-4 text-lg cursor-pointer bg-white border-r-2 border-black" onClick={ handleMinus }>
                                                        <FiMinus />
                                                    </div>
                                                    <span className="count py-2 px-6 text-lg font-medium">{ count }</span>
                                                    <div className="plus p-4 text-lg cursor-pointer bg-white border-l-2 border-black" onClick={ handlePlus }>
                                                        <FiPlus />
                                                    </div>
                                                </div>
                                                <p className="amount text-2xl font-bold p-2">${ item.price * count }</p>
                                            </div>
                                            <div className="add-buy-btn-div mt-[2rem] text-lg font-semibold w-full flex justify-between items-center">
                                                <button className="py-2 px-9 bg-none uppercase border-2 border-black hover:text-white hover:bg-black transition-all duration-75 ease-in cursor-pointer">add to cart</button>
                                                <button className="uppercase py-2 px-12 bg-red-600 text-white border-2 border-red-600 hover:bg-transparent hover:text-red-600 transition-all duration-75 ease-in cursor-pointer">buy now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="additional-info-div w-full grid grid-cols-3 gap-8 mt-[4rem] mb-[8rem]">
                                        <div className="bg-gray-200 p-5">
                                            <p className="label font-bold text-xl mb-3">Texture:</p>
                                            <span className="text-sm">{ item.texture }</span>
                                        </div>
                                        <div className="bg-gray-200 p-5">
                                            <p className="label font-bold text-xl mb-3">Weight:</p>
                                            <span className="text-sm">{ item.weight }</span>
                                        </div>
                                        <div className="bg-gray-200 p-5">
                                            <p className="label font-bold text-xl mb-3">Size:</p>
                                            <span className="text-sm">{ item.size }</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Trending />
            </div>
        </>
    )
}
