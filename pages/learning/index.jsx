import React from 'react';
import PropTypes from 'prop-types';
import { getLearningTopics } from '../../services';
import { LinkList } from '../../components';

function LearningPage({ topicCategories }) {
  return (
    <div className="mt-4 mb-10 transition animate-fade">
      <Head>
        <title>Learning - Tada Blog: Exploring Web-based Data Visualization</title>
        <link rel='icon' href='/../favicon.ico' />
      </Head>
      {topicCategories.map((topicCat) => <LinkList key={topicCat.name} categoryTitle={topicCat.name} icon={topicCat.icon} links={topicCat.topics} page="learning" />)}
    </div>
  );
}

export default LearningPage;

export async function getStaticProps() {
  const topicCategories = (await getLearningTopics()) || [];
  return {
    props: { topicCategories },
  };
}

LearningPage.defaultProps = {
  topicCategories: [],
};

LearningPage.propTypes = {
  topicCategories: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
};
