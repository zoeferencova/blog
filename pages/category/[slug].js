import React from 'react';

import { getCategories, getCategoryPost } from '../../services';
import { BlogNav, PostCard } from '../../components';

const CategoryPost = ({ posts }) => {
    return (
        <div className='mb-10 px-10 sm:px-20 transition animate-fade'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-36 gap-y-16 lg:gap-y-20'>
                {posts.map((post, index) => (<PostCard post={post.node} key={index} />))}
            </div>
        </div>
    );
};

export default CategoryPost;


// Fetch data at build time
export async function getStaticProps({ params }) {
    const posts = await getCategoryPost(params.slug);
    return {
        props: { posts },
    };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const categories = await getCategories();

    return {
        paths: categories.map(({ slug }) => ({ params: { slug } })),
        fallback: true,
    };
}