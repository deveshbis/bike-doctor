import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <header className='flex shadow-[rgba(0,0,0,0.1)_-4px_9px_25px_-6px] py-4 px-4 sm:px-10 bg-white font-sans min-h-[75px] tracking-wide relative z-50'>
            <div className='flex flex-wrap items-center gap-4 w-full'>
                <Link href="/"><Image src="/assets/logo.png" width={300} height={300} alt="logo" className='w-24' />
                </Link>

                <div id="collapseMenu"
                    className='lg:ml-12 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50'>
                    <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </button>
                    <div className='flex items-center space-x-6 font-bold hover:text-blue-900 text-xl duration-300'>
                        <Link href='/'>Home</Link>
                        <Link href='/about'>About</Link>
                        <Link href='/service'>Service</Link>
                        <Link href='/blog'>Blog</Link>
                        <Link href='/content'>Content</Link>
                    </div>
                </div>


                <div className='flex ml-auto'>
                    <button type="button"
                        className="bg-white py-2.5 min-w-[140px] shadow-xl shadow-blue-200 text-black text-sm tracking-wider font-medium outline-none border border-blue-600 active:shadow-inner">Appointment</button>

                    <div id="toggleOpen" className='flex ml-auto lg:hidden'>
                        <button className='ml-6'>
                            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;