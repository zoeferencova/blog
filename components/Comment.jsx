import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import moment from 'moment';
import parse from 'html-react-parser';

import avatar from '../images/default-avatar.png';
import { getComments } from '../services';

function Comment({ slug }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(slug)
            .then((result) => setComments(result));
    }, []);

    return (
        <div>
            {comments.length > 0 && (
                <div className='pb-10 pt-20'>
                    {comments.map((comment) => (
                        <div key={comment.createdAt} className='mb-6 pb-4'>
                            <div className='mb-10 border-b border-gray-300' />
                            <div className='mb-4 flex flex-row items-center'>
                                <Image alt='avatar' src={avatar} className='w-9 h-9' />
                                <div className='ml-3'>
                                    <span className='text-rtsm block'>{comment.name}</span>
                                    <span className='text-rtsm text-gray-500'>{moment(comment.createdAt).format('MMM DD, YYYY')}</span>
                                </div>
                            </div>
                            <p className='whitespace-pre-line w-full'>
                                {parse(comment.comment)}
                            </p>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Comment;

Comment.defaultProps = {
    slug: '',
};

Comment.propTypes = {
    slug: PropTypes.string,
};
