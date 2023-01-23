import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BlogNav, Header, PageTitle } from './'
import { getCategories } from '../services'

const Layout = ({ children }) => {

    const router = useRouter()
    const { pathname } = router
    const { slug } = router.query
    const firstPath = pathname.split('/')[1];

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then((newCategories) => { setCategories(newCategories) })
    }, [])

    return (
        <>
            <Header firstPath={firstPath} />
            <PageTitle slug={slug} firstPath={firstPath} />
            {categories.length ? <div className='transition animate-fade'>
                {(firstPath === '' || firstPath === 'category') && <BlogNav slug={slug} categories={categories} />}
                {children}
            </div> : ''}

        </>
    )
}

export default Layout