import React from 'react'
import Link from 'next/link'

const PostCard = ({ post }) => {
    return (
        <Link href={`/post/${post.slug}`}>
            <div className='flex flex-col cursor-pointer sm:mt-0 sm:flex-row lg:items-center transition animate-fade'>
                <div style={{ backgroundColor: `${post.imageBackground.hex}` }} className={`sm:basis-[52em] flex items-center justify-center rounded-xl h-52 basis-[8em] sm:h-56 p-8`}>
                    <img
                        src={post.featuredImage.url}
                        alt={post.title}
                        className='max-h-full max-w-full rounded-lg'
                    />
                </div>

                <div className='mt-8 sm:mt-0 sm:pl-12'>
                    <h2 className='text-xl mb-3 font-serif'>{post.title}</h2>
                    <p className='text-rtsm sm:line-clamp-5'>{post.excerpt}</p>
                </div>
            </div >
        </Link>
    )
}

export default PostCard