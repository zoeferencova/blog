import React from 'react'
import { useRouter } from 'next/router'
import { Footer } from './'
import { Header, PageTitle } from './'

const Layout = ({ children }) => {

    const router = useRouter()
    const { pathname } = router
    const { slug } = router.query
    const firstPath = pathname.split('/')[1];

    return (
        <div className='min-h-screen relative pb-[40px]'>
            <Header firstPath={firstPath} />
            <PageTitle slug={slug} firstPath={firstPath} />
            <div className='transition animate-fade pb-16'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout