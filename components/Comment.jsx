import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import moment from 'moment';
import parse from 'html-react-parser'

import avatar from '../images/default-avatar.png';
import { getComments } from '../services'


const Comment = ({ slug }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(slug)
            .then(result => setComments(result))
    }, [])

    return (
        <>
            {comments.length > 0 && (
                <div className='pb-10 pt-20'>
                    {comments.map((comment) => (
                        <div key={comment.createdAt} className='mb-6 pb-4'>
                            <div className='mb-10 border-b border-gray-300'></div>
                            <p className='mb-4 flex flex-row items-center'>
                                <Image src={avatar} className='w-9 h-9' />
                                <div className='ml-3'>
                                    <span className='text-[14px] block'>{comment.name}</span>
                                    <span className='text-[14px] text-gray-500'>{moment(comment.createdAt).format('MMM DD, YYYY')}</span>
                                </div>
                            </p>
                            <p className='whitespace-pre-line w-full'>
                                {parse(comment.comment)}
                            </p>

                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Comment