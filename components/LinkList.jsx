import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function LinkList({ categoryTitle, icon, links, page }) {
    const linkStyles = 'text-rtsm text-gray-800 text-red-500 pb-[1px] underline underline-offset-4 leading-[1.5rem] block';
    return (
        <div className='mb-12 sm:mb-16'>
            <span className='flex'>
                <img alt={`${categoryTitle} icon`} src={icon.url} className='inline-block mr-3 h-6' />
                <h2 className='font-medium mb-3'>{categoryTitle}</h2>
            </span>
            {page === 'learning'
                ? links.map((link) => (
                    <div key={link.slug} className='mb-2 block'>
                        <Link
                            href={`/learning/${link.slug}`}
                            className={linkStyles}
                            key={link.slug}
                        >
                            {link.name}
                        </Link>
                    </div>
                ))
                : links.map((link) => (
                    <div key={link.raw.children[0].children[1].children[0].text} className='mb-3 sm:mb-2 block'>
                        <Link
                            href={link.raw.children[0].children[1].href}
                            className={linkStyles}
                            target='_blank'
                        >
                            {link.raw.children[0].children[1].children[0].text}
                        </Link>
                        <span className='text-rtsm text-gray-500'>
                            {link.raw.children[0].children[2].text}
                        </span>
                    </div>
                ))}
        </div>
    );
}

export default LinkList;

LinkList.defaultProps = {
    categoryTitle: '',
    icon: {},
    links: [],
    page: '',
};

LinkList.propTypes = {
    categoryTitle: PropTypes.string,
    icon: PropTypes.objectOf(PropTypes.string),
    links: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
    page: PropTypes.string,
};
