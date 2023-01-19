import React from 'react'

const PageTitle = ({ firstPath }) => {

    const renderPageTitle = path => {
        switch (path) {
            case '':
            case 'category':
                return 'Blog'
            case 'resources':
                return 'Resources'
            case 'learning':
                return 'Learning'
        }
    }

    return (
        <div className='px-10 sm:px-20'>
            <h1 className='text-4xl sm:text-[2.5rem] font-medium'>{renderPageTitle(firstPath)}</h1>
            {firstPath === 'learning' && <h2 className='pt-7 pb-10 text-xl sm:text-[1.45rem] text-gray-700 font-serif'>Data viz key concepts and theory</h2>}
        </div>

    );
}

export default PageTitle

