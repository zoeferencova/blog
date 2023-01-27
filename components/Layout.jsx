import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Footer, Header, PageTitle } from '.';

function Layout({ children }) {
    const router = useRouter();
    const { pathname } = router;
    const { slug } = router.query;
    const firstPath = pathname.split('/')[1];

    return (
        <div className='min-h-screen relative pb-[40px] px-10 sm:px-20'>
            <Header firstPath={firstPath} />
            <PageTitle slug={slug} firstPath={firstPath} />
            <div className='transition animate-fade pb-16'>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;

Layout.defaultProps = {
    children: [],
};

Layout.propTypes = {
    children: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
};
