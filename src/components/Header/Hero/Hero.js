import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className='md:h-[600px] w-3/4 mx-auto pb-10' id='home'>
            <div className='w-full md:w-6/12 '>
                <h3 className='text-sky-500 font-bold text-lg mb-10'>Join Us</h3>
                <h2 className='font-poppins font-bold text-3xl md:text-6xl leading-normal	'>Selling on the <br /> internet like a pro</h2>
                <p className='text-lg md:text-2xl  font-medium tracking-wider leading-snug mt-10 '>
                    We know how large objects will act, <br />
                    but things on a small scale
                </p>
                <button className='mt-10 py-2 px-4 md:py-4 md:px-10 bg-sky-400 text-white font-bold  md:text-lg tracking-wider rounded-md'>Join Us</button>
            </div>
            
        </div>
    );
};

export default Hero;