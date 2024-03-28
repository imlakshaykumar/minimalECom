import { data } from "../utils/data"

export const ProudSection = () => {

    const slicedData = data.slice(0, 8);

    return (
        <>
            <div className="container max-w-[1200px] mx-auto my-16 px-5">
                <div className="heading-div w-full mb-10">
                    <h3 className="heading text-2xl font-bold">Products we are proud of</h3>
                </div>
                <div className="products-div grid grid-cols-4 gap-5">
                    {
                        slicedData?.map((item, key) => {
                            return (
                                <div key={ key } className="border-2 border-gray-300 hover:border-black transition-all duration-100 ease-in cursor-pointer">
                                    <div className="item-image-div">
                                        <img src={ item.image } alt="image1" className="item-image" />
                                    </div>
                                    <div className="item-info-div p-2">
                                        <p className="item-name">{ item.name }</p>
                                        <p className="item-price text-xl font-bold mt-3">{ item.price }</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
