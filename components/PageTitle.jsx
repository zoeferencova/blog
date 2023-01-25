import React from 'react'

const PageTitle = ({ firstPath, slug }) => {

    const renderPageTitle = (path, slug) => {
        switch (path) {
            case '':
            case 'category':
                return 'Blog'
            case 'resources':
                return 'Resources'
            case 'learning':
                if (!slug) {
                    return 'Learning'
                }
        }
    }

    return (
        <div className='px-10 sm:px-20'>
            <h1 className='text-4xl sm:text-pgtitle font-medium'>{renderPageTitle(firstPath, slug)}</h1>
            {(firstPath === 'learning' && !slug) && <h2 className='pt-6 pb-10 text-xl sm:text-subtitle text-gray-700 font-serif'>Data viz key concepts and theory</h2>}
        </div>

    );
}

export default PageTitle

