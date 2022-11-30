import React from 'react';
import graphic from '../../Assets/images/graphic.png';
import webdev from '../../Assets/images/development.png';
import seo from '../../Assets/images/SEO.png';
import { FaUserAlt } from 'react-icons/fa';
import { FcClock } from 'react-icons/fc';
import { GiProgression, GiBookPile } from 'react-icons/gi';
import { RiArrowRightSLine } from 'react-icons/ri';

const Course = () => {
    return (
        <div className='mb-20'>
            <div>
                <h2 className='mb-10 text-center text-base font-bold font-poppins lg:text-5xl'>
                    Our Most Selling Courses
                </h2>
            </div>
            <div className='w-3/4 md:w-full lg:w-4/6 mx-auto md:grid grid-cols-2 lg:grid-cols-3 lg:gap-10 '>
                <div class="block rounded-lg p-4 shadow-sm shadow-indigo-100 mb-10">
                    <img
                        alt="Home"
                        src={graphic}
                        class=" rounded-md object-cover" />

                    <div class="mt-2">
                        <div>
                            <h3 class="font-bold font-poppins lg:text-2xl">Graphic Design</h3>
                            <p>
                                This graphic design classes will help you with layouts and creative processes and introduce you to design trends.
                            </p>
                        </div>
                        <div className='mt-2'>
                            <div className='inline-flex items-center gap-2 mb-3'>
                                <FaUserAlt className='text-green-400' /> <span className='font-semibold'>78+ Enrolled</span>
                            </div>
                            <div className='text-base '>
                                <div className='inline-flex items-center gap-2'>
                                    <h4 className='text-gray-400 font-bold line-through'>$120</h4>
                                    <h4 className='text-2xl font-bold text-green-500'>$80</h4>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6 flex items-center gap-3 text-xs lg:text-base">
                            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                                <FcClock className='text-lg' />
                                <div class="mt-1.5 sm:ml-2 sm:mt-0">
                                    <p class="text-gray-500 font-medium ">48h 30min</p>
                                </div>
                            </div>

                            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                                <GiBookPile className='text-xl text-sky-500' />

                                <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                    <p class="text-gray-500 font-medium">25+ Projects</p>
                                </div>
                            </div>

                            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                                <GiProgression className='text-green-500 text-base' />

                                <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                    <p class="text-gray-500 font-medium">Progress</p>
                                </div>
                            </div>
                        </div>
                        <button className='text-sky-500 mt-5 font-medium text-base inline-flex items-center border border-sky-500 rounded-3xl px-3'>
                            Enroll Now <span className='py-2 md:text-2xl'><RiArrowRightSLine /></span>
                        </button>
                    </div>
                </div>
                <div class="block rounded-lg p-4 shadow-sm shadow-indigo-100 mb-10">
                    <img
                        alt="Home"
                        src={webdev}
                        class=" rounded-md object-cover" />

                    <div class="mt-2">
                        <div>
                            <h3 class="font-bold font-poppins lg:text-2xl">Web Development</h3>
                            <p>
                                This web development is a MERN Stack course where you will learn html, css, js, react js and more.
                            </p>
                        </div>
                        <div className='mt-2'>
                            <div className='inline-flex items-center gap-2 mb-3'>
                                <FaUserAlt className='text-green-400' /> <span className='font-semibold'>220+ Enrolled</span>
                            </div>
                            <div className='text-base '>
                                <div className='inline-flex items-center gap-2'>
                                    <h4 className='text-gray-400 font-bold line-through'>$150</h4>
                                    <h4 className='text-2xl font-bold text-green-500'>$100</h4>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6 flex items-center gap-3 text-xs lg:text-base">
                            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                                <FcClock className='text-lg' />
                                <div class="mt-1.5 sm:ml-2 sm:mt-0">
                                    <p class="text-gray-500 font-medium ">50h 45min</p>
                                </div>
                            </div>

                            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                                <GiBookPile className='text-xl text-sky-500' />

                                <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                    <p class="text-gray-500 font-medium">15+ Projects</p>
                                </div>
                            </div>

                            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                                <GiProgression className='text-green-500 text-base' />

                                <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                    <p class="text-gray-500 font-medium">Progress</p>
                                </div>
                            </div>
                        </div>
                        <button className='text-sky-500 mt-5 font-medium text-base inline-flex items-center border border-sky-500 rounded-3xl px-3'>
                            Enroll Now <span className='py-2 md:text-2xl'><RiArrowRightSLine /></span>
                        </button>
                    </div>
                </div>
                <div class="block rounded-lg p-4 shadow-sm shadow-indigo-100 mb-10">
                    <img
                        alt="Home"
                        src={seo}
                        class=" rounded-md object-cover" />

                    <div class="mt-2">
                        <div>
                            <h3 class="font-bold font-poppins lg:text-2xl">SEO</h3>
                            <p>
                                Search engine optimization (SEO) is the process of improving your website to increase visibility on popular search engines such as Google and Bing.
                            </p>
                        </div>
                        <div className='mt-2 '>
                            <div className='inline-flex items-center gap-2 mb-3 '>
                                <FaUserAlt className='text-green-400' /> <span className='font-semibold'>150+ Enrolled</span>
                            </div>
                            <div className='text-base '>
                                <div className='inline-flex items-center gap-2'>
                                    <h4 className='text-gray-400 font-bold line-through'>$200</h4>
                                    <h4 className='text-2xl font-bold text-green-500'>$150</h4>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6 flex items-center gap-3 text-xs lg:text-base">
                            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                                <FcClock className='text-lg' />
                                <div class="mt-1.5 sm:ml-2 sm:mt-0">
                                    <p class="text-gray-500 font-medium ">120h 20min</p>
                                </div>
                            </div>

                            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                                <GiBookPile className='text-xl text-sky-500' />

                                <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                    <p class="text-gray-500 font-medium">25+ Projects</p>
                                </div>
                            </div>

                            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                                <GiProgression className='text-green-500 text-base' />

                                <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                    <p class="text-gray-500 font-medium">Progress</p>
                                </div>
                            </div>
                        </div>
                        <button className='text-sky-500 mt-5 font-medium text-base inline-flex items-center border border-sky-500 rounded-3xl px-3'>
                            Enroll Now <span className='py-2 md:text-2xl'><RiArrowRightSLine /></span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Course;