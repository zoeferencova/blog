import React from 'react'
import moment from 'moment'

import { RichText } from './'

const PostDetails = ({ post }) => {
    return (
        <div className='mb-20'>
            <h1 className='font-serif pb-3 font-medium text-3xl'>{post.title}</h1>
            <span className='pb-10 text-gray-500 block'>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            <div className={`h-56 p-10 sm:h-96 mb-10 flex items-center justify-center rounded-xl sm:p-12`} style={{ backgroundColor: `${post.imageBackground.hex}` }}>
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className='max-h-full max-w-full rounded-lg'
                />
            </div>
            <RichText rawText={post} />
        </div>
    )
}

export default PostDetails