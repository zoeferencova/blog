import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function PostCard({ post }) {
    return (
        <Link href={`/post/${post.slug}`}>
            <div className='flex flex-col cursor-pointer sm:mt-0 sm:flex-row lg:items-center transition animate-fade'>
                <div style={{ backgroundColor: `${post.imageBackground.hex}` }} className='flex justify-center items-center rounded-xl h-56 sm:w-[220px] sm:h-[220px] min-[1800px]:w-[40%] p-8'>
                    <img
                        src={post.featuredImage.url}
                        alt={post.title}
                        className='max-h-full max-w-full rounded-lg'
                    />
                </div>

                <div className='mt-8 sm:mt-0 sm:pl-12 sm:w-[60%] min-[1800px]:w-[50%] min-[1800px]:pl-16'>
                    <h2 className='text-xl mb-3 font-serif'>{post.title}</h2>
                    <p className='text-rtsm sm:line-clamp-5'>{post.excerpt}</p>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;

PostCard.defaultProps = {
    post: {},
};

PostCard.propTypes = {
    post: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
};
