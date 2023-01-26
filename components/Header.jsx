import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../images/logo.png'

const Header = ({ firstPath }) => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const hamburgerLine = `h-[3px] w-5 mb-1 rounded-full bg-black transition ease transform duration-300`;
    return (
        <div className='px-10 py-8 sm:px-20'>
            <div className='w-full pt-3 sm:pt-8 pb-2 sm:pb-8 flex flex-wrap justify-between items-center'>
                <Link href='/'>
                    <Image src={logo} alt='tada blog' width='95' height='auto' className='w-[90px] sm:w-24' />
                </Link>
                <button
                    className="flex flex-col h-6 w-6 group cursor-pointer sm:hidden"
                    onClick={() => setHamburgerOpen(!hamburgerOpen)}
                >
                    <div className={`${hamburgerLine} ${hamburgerOpen && 'rotate-45 translate-y-[7px]'}`} />
                    <div className={`${hamburgerLine} ${hamburgerOpen && 'opacity-0'}`} />
                    <div className={`${hamburgerLine} ${hamburgerOpen && '-rotate-45 -translate-y-[7px]'}`} />
                </button>
                <div className={`${!hamburgerOpen && 'opacity-0'} ${hamburgerOpen && 'opacity-100 transition ease duration-300 flex-col items-end'} flex h-7 w-full sm:w-auto sm:opacity-100 sm:flex sm:items-center header-links`}>
                    <Link href='/' onClick={() => setHamburgerOpen(false)} className={`${(firstPath === '' || firstPath === 'post') && 'header-nav-current'} ${hamburgerOpen && 'mb-2'} header-nav-item`}>Blog</Link>
                    <Link href='/learning' onClick={() => setHamburgerOpen(false)} className={`${firstPath === 'learning' && 'header-nav-current'} ${hamburgerOpen && 'mb-2'} header-nav-item`}>Learning</Link>
                    <Link href='/resources' onClick={() => setHamburgerOpen(false)} className={`${firstPath === 'resources' && 'header-nav-current'}  header-nav-item`}>Resources</Link>
                </div>
            </div>
        </div>
    );
}

export default Header

