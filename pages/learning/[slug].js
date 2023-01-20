import React from 'react'
import { getLearningTopics, getTopicDetails } from '../../services'

const LearningPage = ({ topic }) => {
    console.log(topic)
    return (
        <div>
            <h2>{topic.name}</h2>
        </div>
    )
}

export default LearningPage

export async function getStaticPaths() {
    const topicCategories = await getLearningTopics()
    const paths = topicCategories.map(cat => cat.topics.map(({ slug }) => ({ params: { slug } }))[0])
    return {
        paths,
        fallback: true
    };
}

export async function getStaticProps({ params }) {
    const data = (await getTopicDetails(params.slug)) || [];
    return {
        props: { topic: data }
    }
}

