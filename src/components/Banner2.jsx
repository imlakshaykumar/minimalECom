import { Link } from 'react-router-dom'
import banner2 from '../assets/static/banner/banner2.03a2ebf8d998e53d1019.jpg'

export const Banner2 = () => {
    return (
        <>
            <div className="container max-w-[1200px] w-full mx-auto my-[6rem]">
                <div className="w-full flex justify-between overflow-hidden h-[25rem]">
                    <div className="banner-image-div block object-cover w-1/2">
                        <img src={ banner2 } alt="banner1 image" className="banner-image w-[100%] h-[100%] object-cover" />
                    </div>
                    <div className="banner-info flex flex-col gap-5 justify-center items-start bg-[#e9e9e9] text-start w-1/2 px-[123px]">
                        <h3 className="heading text-2xl font-bold">Comfortable & Elegante Living</h3>
                        <p className="para">RAOUF Products are all made to standard sizes so that you can mix and match them freely.</p>
                        <Link to='categories/all'>
                            <button className="shop-btn uppercase border-2 border-black bg-black text-white py-2 px-5 text-base font-semibold hover:bg-transparent hover:text-black transition-all duration-100 ease-in">shop now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
