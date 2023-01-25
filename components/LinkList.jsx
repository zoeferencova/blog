import React from 'react'

const LinkList = ({ categoryTitle, icon, links, page }) => {
    const linkStyles = 'text-rtsm text-gray-800 pb-[1px] border-solid border-1 border-b border-gray-500'
    return (
        <div className='mb-16'>
            <span className='flex'>
                <img src={icon.url} className='inline-block mr-3 h-6' />
                <h2 className='font-medium mb-3'>{categoryTitle}</h2>
            </span>
            {page === 'learning' ?
                links.map((link, i) => <div key={i} className='mb-1'>
                    <a
                        href={`/learning/${link.slug}`}
                        className={linkStyles}>
                        {link.name}
                    </a></div>)
                :
                links.map((link, i) => <div key={i} className='mb-1'>
                    <a
                        href={link.raw.children[0].children[1].href}
                        key={i}
                        className={linkStyles}
                        target='_blank'>
                        {link.raw.children[0].children[1].children[0].text}
                    </a>
                    <span className='text-sm text-gray-800'>
                        {link.raw.children[0].children[2].text}
                    </span>
                </div>)
            }
        </div >
    );
}

export default LinkList
