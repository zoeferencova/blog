import React from 'react'
import ErrorMessage from '../components/ErrorMessage'

const NotFound = () => {
    return (
        <ErrorMessage messageTitle='Page not found' messageSubtitle={<span>Go back <a className='border-b border-[#759dbd]/50 text-[#759dbd]' href='/'>home</a>.</span>} />
    );
}

export default NotFound;

