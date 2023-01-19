import React from 'react'
import { getLearningTopics } from "../../services"

const LearningPage = ({ topicCategories }) => {
    const renderTopicCategories = (topicCat, i) => {
        return (
            <div key={i}>
                <h2>{topicCat.name}</h2>
                {topicCat.topics.map((topic, i) => renderTopicLink(topic, i))}
            </div>)
    }

    const renderTopicLink = (topic, i) => {
        console.log(topic)
        return <a href={`/learning/${topic.slug}`} key={i} > {topic.name}</a >
    }

    return (
        <div className="mb-10 px-10 sm:px-20">
            {topicCategories.map((topicCat, i) => renderTopicCategories(topicCat, i))}
        </div>
    )
}

export default LearningPage

export async function getStaticProps() {
    const { topicCategories } = (await getLearningTopics()) || []
    return {
        props: { topicCategories }
    }
}