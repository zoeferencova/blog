import React from 'react'
import Link from 'next/link'

const BlogNav = ({ categories, slug }) => {
    return (
        <div className="w-full pt-8 pb-12 px-10 sm:px-20 transition animate-fade">
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

export default BlogNav;
