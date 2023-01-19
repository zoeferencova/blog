import React from 'react'
import Link from 'next/link'

const PostCard = ({ post }) => {
    return (
        <Link href={`/post/${post.slug}`}>
            <div className='mt-3 flex flex-col cursor-pointer sm:mt-0 sm:flex-row lg:items-center'>
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className='w-full h-52 object-cover rounded-lg sm:w-52'
                />
                <div className='mt-8 sm:mt-0 sm:pl-12'>
                    <h2 className='text-xl mb-3 font-serif'>{post.title}</h2>
                    <p className='text-[0.92rem] sm:line-clamp-5'>{post.excerpt}</p>
                </div>
            </div >
        </Link>
    )
}

export default PostCard