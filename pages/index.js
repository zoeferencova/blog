import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { BlogNav, PostCard, ErrorMessage } from '../components';
import { getPosts, getCategories } from '../services'

export default function Home({ posts }) {
  const [categories, setCategories] = useState([])
  const [currentTab, setCurrentTab] = useState('home')

  useEffect(() => {
    getCategories()
      .then((newCategories) => { setCategories(newCategories) })
  }, [])

  const updateCurrentTab = tabName => setCurrentTab(tabName);

  const displayPosts = posts => {
    const filteredPosts = posts.filter(post => post.node.category.slug === currentTab || currentTab === 'home')
    if (filteredPosts.length) {
      return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-36 gap-y-14 lg:gap-y-15 transition animate-fade'>
          {filteredPosts.map((post, index) => (<PostCard post={post.node} key={index} />))}
        </div>)
    } else {
      return <ErrorMessage messageTitle='This category is empty' messageSubtitle='Check back soon for more posts.' />
    }
  }

  return (
    <div className='mb-10 px-10 sm:px-20'>
      <Head>
        <title>tada_</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      {categories.length ?
        <>
          <BlogNav categories={categories} currentTab={currentTab} updateCurrentTab={updateCurrentTab} />
          {displayPosts(posts)}
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
