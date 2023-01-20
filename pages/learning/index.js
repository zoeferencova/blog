import React from 'react'
import { getLearningTopics } from "../../services"
import { LinkList } from '../../components'

const LearningPage = ({ topicCategories }) => {
    return (
        <div className="mt-4 mb-10 px-10 sm:px-20">
            {topicCategories.map((topicCat, i) => <LinkList key={i} categoryTitle={topicCat.name} icon={topicCat.icon} links={topicCat.topics} page='learning' />)}
        </div>
    )
}

export default LearningPage

export async function getStaticProps() {
    const topicCategories = (await getLearningTopics()) || []
    return {
        props: { topicCategories }
    }
}