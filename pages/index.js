import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { BlogNav, PostCard } from '../components';
import { getPosts, getCategories } from '../services'

export default function Home({ posts }) {
  const [categories, setCategories] = useState([])
  const [currentTab, setCurrentTab] = useState('home')

  useEffect(() => {
    getCategories()
      .then((newCategories) => { setCategories(newCategories) })
  }, [])

  const updateCurrentTab = tabName => setCurrentTab(tabName);

  return (
    <div className='mb-10 px-10 sm:px-20'>
      <Head>
        <title>tada_</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {categories.length ?
        <>
          <BlogNav categories={categories} currentTab={currentTab} updateCurrentTab={updateCurrentTab} />
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-36 gap-y-14 lg:gap-y-15 transition animate-fade'>
            {posts
              .filter(post => post.node.category.slug === currentTab || currentTab === 'home')
              .map((post, index) => (<PostCard post={post.node} key={index} />))}
          </div>
        </>
        : ''}
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts }
  }
}
