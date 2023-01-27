import React from 'react';
import PropTypes from 'prop-types';

function PageTitle({ firstPath, slug }) {
    const renderPageTitle = (path, pathSlug) => {
        let title = '';
        switch (path) {
            case '':
            case 'category':
                title = 'Blog';
                break;
            case 'resources':
                title = 'Resources';
                break;
            case 'learning':
                if (!pathSlug) {
                    title = 'Learning';
                }
                break;
            default:
                title = '';
        }
        return title;
    };

    return (
        <div>
            <h1 className='text-4xl sm:text-pgtitle font-medium'>{renderPageTitle(firstPath, slug)}</h1>
            {(firstPath === 'learning' && !slug) && <h2 className='pt-6 pb-10 text-xl sm:text-subtitle text-gray-700 font-serif'>Data viz key concepts and theory</h2>}
        </div>

    );
}

export default PageTitle;

PageTitle.defaultProps = {
    firstPath: '',
    slug: '',
};

PageTitle.propTypes = {
    firstPath: PropTypes.string,
    slug: PropTypes.string,
};
