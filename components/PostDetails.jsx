import React from 'react'
import moment from 'moment'

import { RichText } from './'

const PostDetails = ({ post }) => {
    return (
        <div className='mb-20'>
            <h1 className='font-serif pb-3 font-medium text-3xl'>{post.title}</h1>
            <span className='pb-10 text-gray-500 block'>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            <div className='flex flex-row justify-between mb-10'>
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className='w-[47%] rounded-lg'
                />
                <img
                    src={post.secondaryImage.url}
                    alt={post.title}
                    className='w-[47%] rounded-lg'
                />
            </div>
            <RichText rawText={post} />
        </div>
    )
}

export default PostDetails