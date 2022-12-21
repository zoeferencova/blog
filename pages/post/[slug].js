import React from 'react'
import { getPosts, getPostDetails } from '../../services'
import { PostDetails, Comment, CommentForm } from '../../components'

const PostPage = ({ post }) => {
    return (
        <div className='mb-10 mx-auto max-w-3xl pt-8 px-10 sm:px-20'>
            <PostDetails post={post} />
            <CommentForm slug={post.slug} />
            <Comment slug={post.slug} />
        </div>
    )
}

export default PostPage

export async function getStaticProps({ params }) {
    const data = (await getPostDetails(params.slug)) || [];
    return {
        props: { post: data }
    }
}

export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: false
    }
}