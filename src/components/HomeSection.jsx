/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import image1 from '../assets/home/home1.webp'
import image2 from '../assets/home/home2.webp'
import image3 from '../assets/home/home3.webp'
import image4 from '../assets/home/home4.webp'


export const HomeSection = ({ setCategory }) => {
    return (
        <>
            <div className="container mx-auto max-w-[1200px]">
                <div className="grid-container grid h-[32rem] gap-3 mt-8">
                    <div
                        style={ { gridArea: 'one' } }
                        className='relative object-cover block cursor-pointer' onClick={ () => setCategory('furnitures') }>
                        <Link to={ `/categories/furnitures` }>
                            <img src={ image1 } alt="img1" className='object-cover w-[100%] h-[100%] ' />
                            <div className="overlay-text absolute inset-0 flex justify-start items-end bg-blur hover:bg-hover transition-all duration-300 ease-in">
                                <p className='text-white font-bold text-4xl p-4'>Live comfortably</p>
                            </div>
                        </Link>
                    </div>

                    <div
                        style={ { gridArea: 'two' } }
                        className='relative object-cover block cursor-pointer' onClick={ () => setCategory('skin-care') }>
                        <Link to={ `/categories/skin-care` }>
                            <img src={ image2 } alt="img2" className='object-cover h-[100%]' />
                            <div className="overlay-text absolute inset-0 flex justify-start items-end bg-blur hover:bg-hover transition-all duration-300 ease-in">
                                <p className='text-white font-bold text-4xl p-4'>Skincare</p>
                            </div>
                        </Link>
                    </div>
                    <div
                        style={ { gridArea: 'four' } }
                        className='relative object-cover block cursor-pointer' onClick={ () => setCategory('kitchen') }>
                        <Link to={ `/categories/kitchen` }>
                            <img src={ image3 } alt="img3" className='object-cover h-[100%]' />
                            <div className="overlay-text absolute inset-0 flex justify-start items-end bg-blur hover:bg-hover transition-all duration-300 ease-in">
                                <p className='text-white font-bold text-4xl p-4'>Kitchen</p>
                            </div>
                        </Link>
                    </div>

                    <div
                        style={ { gridArea: 'four-low' } }
                        className='relative object-cover block cursor-pointer' onClick={ () => setCategory('electronics') }>
                        <Link to={ `/categories/electronics` }>
                            <img src={ image4 } alt="img4" className='object-cover h-[100%]' />
                            <div className="overlay-text absolute inset-0 flex justify-start items-end bg-blur hover:bg-hover transition-all duration-300 ease-in">
                                <p className='text-white font-bold text-4xl p-4'>Electronics</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}
