import React from 'react'
import Link from 'next/link'

const PostCard = ({ post }) => {
    return (
        <div className='mt-5 flex flex-col sm:mt-0 sm:flex-row lg:items-center'>
            <img
                src={post.featuredImage.url}
                alt={post.title}
                className='w-full h-52 object-cover rounded-lg sm:w-52'
            />
            <div className='mt-8 sm:mt-0 sm:pl-12'>
                <h1 className='mb-4 cursor-pointer'>
                    <Link href={`/post/${post.slug}`}>
                        {post.title}
                    </Link>
                </h1>
                <p className='text-gray-400 leading-snug sm:line-clamp-5'>{post.excerpt}</p>
            </div>
        </div >
    )
}

export default PostCard