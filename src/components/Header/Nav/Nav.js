import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs'

const Nav = () => {
    const menuItem = <React.Fragment>
        <li className='mr-3 hover:text-sky-500'>
            <a href='/'>Home</a>
        </li>
        <li className='mr-3 hover:text-sky-500'>
            <a href='#product'>Product</a>
        </li>
        <li className='mr-3 hover:text-sky-500'>
            <a href='#about'>About Me</a>
        </li>
        <li className='mr-3 hover:text-sky-500'>
            <a href='#pricing'>Pricing</a>
        </li>
        <li className='mr-3 hover:text-sky-500'>
            <a href='#review'>Review</a>
        </li>
        <li className='mr-3 hover:text-sky-500'>
            <a href='#contact'>Contact</a>
        </li>
    </React.Fragment>

    return (
        <header className='mb-5 md:mb-40 w-3/4 mx-auto'>
            <nav className=" ">
                <div className='flex justify-between items-center pt-10'>
                    <div className="flex items-center">
                        {/* Mobile Responsive Starts */}
                        <div className="dropdown  -ml-14">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItem}
                            </ul>
                        </div>
                        {/* Mobile Responsive Ends */}
                        <h1 className='lg:hidden  text-lg font-bold'>FaazizPRO-ED</h1>
                        <div className="hidden lg:flex items-center">
                            <div className='mr-10'>
                                <h1 className='text-3xl font-bold'>FaazizPRO-ED</h1>
                            </div>
                            <div className=''>
                                <ul className="flex list-none text-gray-500  text-lg font-bold ">
                                    {menuItem}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='flex md:flex-row flex-col items-center '>
                        <h2 className='text-sky-500  font-bold text-sm md:text-xl mb-2 md:mb-0'>Login</h2>
                        <div className='ml-2 md:ml-5'>
                            <button className='text-white bg-sky-500  md:py-2 md:px-3 text-xm md:text-xl inline-flex items-center rounded-md'>
                                <span className=" font-medium mr-1"> Become a member </span>
                                <span className='pt-1'><BsArrowRightShort /></span>
                            </button>
                        </div>
                    </div>
                </div>

            </nav>
        </header>
    );
};

export default Nav;