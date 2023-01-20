import React from 'react'
import { getResources } from "../../services"
import { LinkList } from '../../components'

const ResourcePage = ({ resources }) => {
    return (
        <div className="mt-16 mb-10 px-10 sm:px-20">
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

export default ResourcePage

export async function getStaticProps() {
    const resources = (await getResources()) || []
    return {
        props: { resources }
    }
}