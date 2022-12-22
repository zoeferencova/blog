import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { getCategories } from '../services'

import logo from '../images/thick-logo.png'

const Header = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    const router = useRouter()
    const { slug } = router.query

    return (
        <div className="px-10 pt-8 sm:px-20 sm:mb-10 ">
            <div className="w-full py-8 sm:flex sm:justify-between sm:items-center">
                <div className="block mb-8 sm:mb-0">
                    <Link href='/'>
                        <Image src={logo} alt='tada blog' width='95' />
                    </Link>
                </div>
                <div className="whitespace-nowrap overflow-x-auto py-1 scroll-container">
                    <Link href='/'>
                        <span className={`${slug === undefined && 'menu-current'} menu-item`}>All Posts</span>
                    </Link>
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            href={`/category/${category.slug}`}
                        >
                            <span className={`${slug === category.slug && 'menu-current'} menu-item`}>{category.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header

