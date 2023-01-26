import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function LinkList({
    categoryTitle, icon, links, page,
}) {
    const linkStyles = 'text-rtsm text-gray-800 pb-[1px] border-solid border-1 border-b border-gray-500';
    return (
        <div className='mb-16'>
            <span className='flex'>
                <img alt={`${categoryTitle} icon`} src={icon.url} className='inline-block mr-3 h-6' />
                <h2 className='font-medium mb-3'>{categoryTitle}</h2>
            </span>
            {page === 'learning'
                ? links.map((link) => (
                    <Link
                        href={`/learning/${link.slug}`}
                        className={linkStyles}
                        key={link.slug}
                    >
                        {link.name}
                    </Link>
                ))
                : links.map((link) => (
                    <div key={link.raw.children[0].children[1].children[0].text} className='mb-1'>
                        <Link
                            href={link.raw.children[0].children[1].href}
                            className={linkStyles}
                            target='_blank'
                        >
                            {link.raw.children[0].children[1].children[0].text}
                        </Link>
                        <span className='text-sm text-gray-800'>
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
