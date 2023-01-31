import React from 'react';
import Head from 'next/head';
import { getResources } from '../../services';
import { LinkList } from '../../components';

const ResourcePage = ({ resources }) => {
    return (
        <div className='mt-12 sm:mt-16 mb-10 transition animate-fade'>
            <Head>
                <title>Resources - Tada Blog: Exploring Web-based Data Visualization</title>
                <link rel='icon' href='/../favicon.ico' />
            </Head>
            {resources.map((resource, i) => (
                <LinkList
                    key={i}
                    categoryTitle={resource.resourceCategory}
                    icon={resource.categoryIcon}
                    links={resource.resourceList}
                    page='resources' />
            ))}
        </div>
    )
}

export default ResourcePage;

export async function getStaticProps() {
    const resources = (await getResources()) || [];
    return {
        props: { resources }
    }
}