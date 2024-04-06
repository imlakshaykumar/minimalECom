import { Link } from 'react-router-dom'

export const HomeSection = ({ setCategory, homeData }) => {
    return (
        <>
            <div className="container mx-auto max-w-[1200px]">
                <div className="grid-container grid h-[32rem] gap-3 mt-8">
                    {
                        homeData?.map((item, index) => {
                            if (index === 0) {
                                return (
                                    <div key={ index } style={ { gridArea: `one` } } className='relative object-cover block cursor-pointer' onClick={ () => setCategory(item.category) }>
                                        <Link to={ `/categories/${item.category}` }>
                                            <img src={ item.image } loading="lazy" alt="img1" className='object-cover w-[100%] h-[100%] ' />
                                            <div className="overlay-text absolute inset-0 flex justify-start items-end bg-blur hover:bg-hover transition-all duration-300 ease-in">
                                                <p className='text-white font-bold text-4xl p-4'>{ item.text }</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            } else if (index === 1) {
                                return (
                                    <div key={ index } style={ { gridArea: `two` } } className='relative object-cover block cursor-pointer' onClick={ () => setCategory(item.category) }>
                                        <Link to={ `/categories/${item.category}` }>
                                            <img src={ item.image } loading="lazy" alt="img1" className='object-cover w-[100%] h-[100%] ' />
                                            <div className="overlay-text absolute inset-0 flex justify-start items-end bg-blur hover:bg-hover transition-all duration-300 ease-in">
                                                <p className='text-white font-bold text-4xl p-4'>{ item.text }</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            } else if (index === 2) {
                                return (
                                    <div key={ index } style={ { gridArea: `three` } } className='relative object-cover block cursor-pointer' onClick={ () => setCategory(item.category) }>
                                        <Link to={ `/categories/${item.category}` }>
                                            <img src={ item.image } loading="lazy" alt="img1" className='object-cover w-[100%] h-[100%] ' />
                                            <div className="overlay-text absolute inset-0 flex justify-start items-end bg-blur hover:bg-hover transition-all duration-300 ease-in">
                                                <p className='text-white font-bold text-4xl p-4'>{ item.text }</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={ index } style={ { gridArea: `three-low` } } className='relative object-cover block cursor-pointer' onClick={ () => setCategory(item.category) }>
                                        <Link to={ `/categories/${item.category}` }>
                                            <img src={ item.image } loading="lazy" alt="img1" className='object-cover w-[100%] h-[100%] ' />
                                            <div className="overlay-text absolute inset-0 flex justify-start items-end bg-blur hover:bg-hover transition-all duration-300 ease-in">
                                                <p className='text-white font-bold text-4xl p-4'>{ item.text }</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div >
        </>
    )
}

HomeSection.propTypes;
