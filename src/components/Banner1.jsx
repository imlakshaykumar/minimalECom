import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'

export const Banner1 = () => {

    // eslint-disable-next-line no-unused-vars
    let [bannerData, setBannerData] = useState([]);
    let [bannerImage, setBannerImage] = useState();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/bannerImage`);
                const data = res.data;
                setBannerData(data)
                setBannerImage(data[0].image)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // let bannerImage = bannerData[0].image;

    return (
        <>
            <div className="container max-w-[1200px] w-full mx-auto my-[6rem]">
                <div className="w-full flex justify-between overflow-hidden h-[25rem]">
                    <div className="banner-info flex flex-col gap-5 justify-center items-start bg-[#e9e9e9] text-start w-1/2 px-[123px]">
                        <h3 className="heading text-2xl font-bold">Creative harmonious living</h3>
                        <p className="para">RAOUF Products are all made to standard sizes so that you can mix and match them freely.</p>
                        <Link to='/categories/all'>
                            <button className="shop-btn uppercase border-2 border-black bg-black text-white py-2 px-5 text-base font-semibold hover:bg-transparent hover:text-black transition-all duration-100 ease-in">shop now</button>
                        </Link>
                    </div>
                    <div className="banner-image-div block object-cover w-1/2">
                        <img src={ bannerImage } alt="banner1 image" className="banner-image w-[100%] h-[100%] object-cover" />
                    </div>
                </div>
            </div>
        </>
    )
}
