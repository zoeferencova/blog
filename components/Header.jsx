import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../images/logo.png'

const Header = ({ firstPath }) => {
    console.log(firstPath)
    return (
        <div className="px-10 py-8 sm:px-20 ">
            <div className="w-full py-8 flex justify-between items-center">
                <div>
                    <Link href='/'>
                        <Image src={logo} alt='tada blog' width='95' />
                    </Link>
                </div>
                <div className='inline-block cursor-pointer sm:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div className='hidden sm:flex sm:items-center header-links'>
                    <Link href='/' className={`${(firstPath === '' || firstPath === 'category') && 'header-nav-current'} header-nav-item`}>Blog</Link>
                    <Link href='/learning' className={`${firstPath === 'learning' && 'header-nav-current'} header-nav-item`}>Learning</Link>
                    <Link href='/resources' className={`${firstPath === 'resources' && 'header-nav-current'} header-nav-item`}>Resources</Link>
                </div>
            </div>
        </div>
    );
}

export default Header

