import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const BlogNav = ({ slug }) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div className="w-full px-10 pt-8 pb-12 sm:px-20">
            <div className="whitespace-nowrap overflow-x-auto py-2 scroll-container">
                <Link href='/'>
                    <span className={`${slug === undefined && 'blog-nav-current'} blog-nav-item`}>All Posts</span>
                </Link>
                {categories.map((category, index) => (
                    < Link
                        key={index}
                        href={`/category/${category.slug}`}
                    >
                        <span className={`${slug === category.slug && 'blog-nav-current'} blog-nav-item`}>{category.name}</span>
                    </Link>
                ))}
            </div>
        </div >
    );
}

export default BlogNav

