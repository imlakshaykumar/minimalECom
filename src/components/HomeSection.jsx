import image1 from '../assets/static/home/home-img-1.3de7da0f1e4634169c62.jpg'
import image2 from '../assets/static/home/home-img-2.4daa711cfda65062efd0.jpg'
import image3 from '../assets/static/home/home-img-3.60734311499ba1dbbc41.jpg'
import image4 from '../assets/static/home/home-img-4.672d1d0d7656e2a778f6.jpg'

export const HomeSection = () => {
    return (
        <>
            <div className="container mx-auto max-w-[1200px] px-5">
                <div className="grid-container grid h-[32rem] gap-3 mt-8">
                    <div style={ { gridArea: 'one' } } className='relative object-cover block cursor-pointer'>
                        <img src={ image1 } alt="img1" className='object-cover w-[100%] h-[100%] ' />
                        <div className="overlay-text absolute inset-0 flex justify-start items-end bg-blur hover:bg-hover transition-all duration-300 ease-in">
                            <p className='text-white font-bold text-4xl p-4'>Live comfortably</p>
                        </div>
                    </div>
                    <div style={ { gridArea: 'two' } } className='relative object-cover block cursor-pointer'>
                        <img src={ image2 } alt="img2" className='object-cover h-[100%]' />
                        <div className="overlay-text absolute inset-0 flex justify-start items-end bg-blur hover:bg-hover transition-all duration-300 ease-in">
                            <p className='text-white font-bold text-4xl p-4'>Skincare</p>
                        </div>
                    </div>
                    <div style={ { gridArea: 'four' } } className='relative object-cover block cursor-pointer'>
                        <img src={ image3 } alt="img3" className='object-cover h-[100%]' />
                        <div className="overlay-text absolute inset-0 flex justify-start items-end bg-blur hover:bg-hover transition-all duration-300 ease-in">
                            <p className='text-white font-bold text-4xl p-4'>Kitchen</p>
                        </div>
                    </div>
                    <div style={ { gridArea: 'four-low' } } className='relative object-cover block cursor-pointer'>
                        <img src={ image4 } alt="img4" className='object-cover h-[100%]' />
                        <div className="overlay-text absolute inset-0 flex justify-start items-end bg-blur hover:bg-hover transition-all duration-300 ease-in">
                            <p className='text-white font-bold text-4xl p-4'>Electronics</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
