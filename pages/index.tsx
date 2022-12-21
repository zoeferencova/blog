import Head from 'next/head'
import { PostCard } from '../components';
import { getPosts } from '../services'

export default function Home({ posts }: any) {
  return (
    <div className='mb-10 px-10 sm:px-20'>
      <Head>
        <title>tada_</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-36 gap-y-20'>
        {posts.map((post: any, index: any) => (<PostCard post={post.node} key={index} />))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts }
  }
}
