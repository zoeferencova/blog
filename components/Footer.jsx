
import React from 'react'
import Image from 'next/image';

import info from '../images/info.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

const Footer = () => {
    return (
        <div className='absolute bottom-0 h-[70px] px-5 sm:px-10 flex items-center justify-between w-full border-t border-gray-100'>
            <p className='text-gray-500 text-sm'>Created by Zoe Ferencova</p>
            <div className='flex justify-between'>
                <a className='mr-4 opacity-60 hover:opacity-100 hover:cursor-pointer transition ease-in duration-300' href='https://zoeferencova.github.io/portfolio' target='_blank'><Image src={info} height='20' /></a>
                <a className='mr-4 opacity-60 hover:opacity-100 hover:cursor-pointer transition ease-in duration-300' href='https://github.com/zoeferencova' target='_blank'><Image src={github} height='20' /></a>
                <a className='opacity-60 hover:opacity-100 hover:cursor-pointer transition ease-in duration-300' href='https://www.linkedin.com/in/zoeferencova' target='_blank'><Image src={linkedin} height='20' /></a>
            </div>
        </div>

    );
}

export default Footer

