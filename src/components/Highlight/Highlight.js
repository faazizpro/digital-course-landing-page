import React from 'react';
import right from '../../Assets/icons/right.png';
import love from '../../Assets/icons/love.png';
import news from '../../Assets/icons/fixed-width.png';
import { RiArrowRightSLine } from 'react-icons/ri'

const Highlight = () => {
    return (
        <div className='bg-slate-800  md:h-[900px] pt-10 pb-20 mb-20'>
            <div className='md:flex gap-5 w-3/4 mx-auto lg:max-w-7xl justify-center'>
                <div className='md:mt-52'>
                    <div className="divider bg-red-500 w-1/4 h-2"></div>
                    <h2 className='text-white font-poppins md:text-5xl md:font-bold tracking-wider'>
                        Make online education <br /> accessible
                    </h2>
                    <p className='text-white md:w-2/5 text-justify mt-5 md:text-xl'>
                        Problems trying to resolve the conflict between
                        the two major realms of Classical physics:
                        Newtonian mechanics.
                    </p>
                    <button className='text-sky-500 mt-10 font-bold text-lg inline-flex items-center hover:-translate-y-1'>
                        Learn More <span className='pt-1 md:text-3xl'><RiArrowRightSLine /></span>
                    </button>
                </div>

                    {/* Card Section*/}
                <div>
                    <div className=' md:grid grid-cols-2 items-center mt-10'>
                        <div className='grid grid-rows-2 gap-10'>
                            <div className="md:w-3/5 bg-white border border-gray-200 rounded-lg shadow-md ">
                                <div className='p-5'>
                                    <div>
                                        <img className="pl-3" src={right} />
                                    </div>
                                    <div className="p-3">
                                        <div>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Books Liberary</h5>
                                        </div>
                                        <div className='divider bg-red-600 h-1 w-1/3'></div>
                                        <p className="mb-3 text-gray-500 font-medium">The gradual accumulation of information about. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-3/5 bg-white border border-gray-200 rounded-lg shadow-md ">
                                <div className='p-5'>
                                    <div>
                                        <img className="pl-3" src={right} />
                                    </div>
                                    <div className="p-3">
                                        <div>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Books Liberary</h5>
                                        </div>
                                        <div className='divider bg-red-600 h-1 w-1/3'></div>
                                        <p className="mb-3 text-gray-500 font-medium">The gradual accumulation of information about. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10 md:mt-0'>
                            <div className="md:w-3/5 bg-white border border-gray-200 rounded-lg shadow-md ">
                                <div className='p-5'>
                                    <div>
                                        <img className="pl-3" src={right} />
                                    </div>
                                    <div className="p-3">
                                        <div>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Books Liberary</h5>
                                        </div>
                                        <div className='divider bg-red-600 h-1 w-1/3'></div>
                                        <p className="mb-3 text-gray-500 font-medium">The gradual accumulation of information about. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlight;