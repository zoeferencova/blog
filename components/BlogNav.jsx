import React from 'react'

const BlogNav = ({ categories, currentTab, updateCurrentTab }) => {
    return (
        <div className="w-full pt-8 pb-12 transition animate-fade">
            <div className="whitespace-nowrap overflow-x-auto py-2 scroll-container">
                <span onClick={() => updateCurrentTab('home')} className={`${currentTab === 'home' && 'blog-nav-current'} blog-nav-item`}>All Posts</span>
                {categories.map((category, index) => (
                    <span key={index} onClick={() => updateCurrentTab(category.slug)} className={`${currentTab === category.slug && 'blog-nav-current'} blog-nav-item`}>{category.name}</span>
                ))}
            </div>
        </div >
    );
}

export default BlogNav;
