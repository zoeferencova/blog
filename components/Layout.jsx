import React from 'react'
import { useRouter } from 'next/router'
import { Header, PageTitle } from './'

const Layout = ({ children }) => {

    const router = useRouter()
    const { pathname } = router
    const { slug } = router.query
    const firstPath = pathname.split('/')[1];

    return (
        <>
            <Header firstPath={firstPath} />
            <PageTitle slug={slug} firstPath={firstPath} />
            <div className='transition animate-fade'>
                {children}
            </div>
        </>
    )
}

export default Layout