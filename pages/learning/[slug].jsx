import React from 'react'
import { RichText } from '../../components'
import { getLearningTopics, getTopicDetails } from '../../services'

const LearningPage = ({ topic }) => {
    return (
        <div key={topic.slug} className='mb-8 mx-auto max-w-[42rem] pt-5 transition animate-fade'>
            <h1 className='pb-8 sm:pb-10 font-medium text-3xl sm:text-4xl'>{topic.name}</h1>
            <RichText rawText={topic} />
        </div>
    )
}

export default LearningPage

export async function getStaticPaths() {
    const topicCategories = await getLearningTopics()
    const paths = topicCategories.map(cat => cat.topics.map(({ slug }) => ({ params: { slug } }))[0])
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const data = (await getTopicDetails(params.slug)) || [];
    return {
        props: { topic: data, key: data.slug },
    }
}

