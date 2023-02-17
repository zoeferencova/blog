import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { BlogNav, PostCard, ErrorMessage } from '../components';
import { getPosts, getCategories } from '../services';

export default function Home({ posts }) {
  const [categories, setCategories] = useState([]);
  const [currentTab, setCurrentTab] = useState('home');

  useEffect(() => {
    getCategories()
      .then((newCategories) => { setCategories(newCategories); });
  }, []);

  const updateCurrentTab = (tabName) => setCurrentTab(tabName);

  const displayPosts = (allPosts) => {
    const filteredPosts = allPosts.filter((post) => post.node.category.slug === currentTab || currentTab === 'home');
    if (filteredPosts.length) {
      return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-14 lg:gap-y-15 transition animate-fade'>
          {filteredPosts.map((post) => (<PostCard post={post.node} key={post.node.slug} />))}
        </div>
      );
    }
    return <ErrorMessage messageTitle='This category is empty' messageSubtitle='Check back soon for more posts.' />;
  };

  return (
    <div className='mb-10'>
      <Head>
        <title>Tada Blog: Exploring Web-based Data Visualization</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel="stylesheet" href="https://use.typekit.net/obm4uuk.css" />
      </Head>
      {categories.length
        ? (
          <>
            <BlogNav
              categories={categories}
              currentTab={currentTab}
              updateCurrentTab={updateCurrentTab}
            />
            {displayPosts(posts)}
          </>
        )
        : ''}
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

Home.defaultProps = {
  posts: [],
};

Home.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType(
        [PropTypes.object, PropTypes.string],
      ),
    ),
  ),
};
