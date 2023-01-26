import React from 'react';
import PropTypes from 'prop-types';

function BlogNav({ categories, currentTab, updateCurrentTab }) {
    return (
        <div className='w-full pt-8 pb-12 transition animate-fade'>
            <div className='whitespace-nowrap overflow-x-auto py-2 scroll-container'>
                <button type='button' onClick={() => updateCurrentTab('home')} className={`${currentTab === 'home' && 'blog-nav-current'} blog-nav-item`}>All Posts</button>
                {categories.map((category) => (
                    <button type='button' key={category.slug} onClick={() => updateCurrentTab(category.slug)} className={`${currentTab === category.slug && 'blog-nav-current'} blog-nav-item`}>{category.name}</button>
                ))}
            </div>
        </div>
    );
}

export default BlogNav;

BlogNav.defaultProps = {
    categories: {},
    currentTab: 'home',
    updateCurrentTab: () => { },
};

BlogNav.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
    currentTab: PropTypes.string,
    updateCurrentTab: PropTypes.func,
};
