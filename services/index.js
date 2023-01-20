import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query GetPosts {
            postsConnection {
                edges {
                    node {
                        slug
                        createdAt
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        secondaryImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `

    const results = await request(graphqlAPI, query)
    return results.postsConnection.edges
}

export const getCategories = async () => {
    const query = gql`
        query GetCategories {
            categories {
                name
                slug
            }
        }
    `

    const results = await request(graphqlAPI, query)
    return results.categories
}

export const getPostDetails = async (slug) => {
    const query = gql`
        query GetPostDetails($slug: String!) {
            post(where: { slug: $slug }) {
                slug
                createdAt
                title
                excerpt
                featuredImage {
                    url
                }
                secondaryImage {
                    url
                }
                categories {
                    name
                    slug
                }
                content {
                    raw
                }
            }
        }
    `

    const results = await request(graphqlAPI, query, { slug })
    return results.post
}

export const submitComment = async (obj) => {
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });

    return result.json();
};

export const getComments = async (slug) => {
    const query = gql`
        query GetComments($slug: String!) {
            comments(where: { post: { slug: $slug } }) {
                name
                createdAt
                comment
            }
        }
    `

    const results = await request(graphqlAPI, query, { slug })
    return results.comments
}

export const getCategoryPost = async (slug) => {
    const query = gql`
      query GetCategoryPost($slug: String!) {
        postsConnection(where: {categories_some: {slug: $slug}}) {
          edges {
            cursor
            node {
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              secondaryImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query, { slug });
    return result.postsConnection.edges;
};


export const getLearningTopics = async () => {
    const query = gql`
        query GetLearningTopics {
            topicCategories {
                name
                icon {
                    url
                }
                topics {
                    id
                    name
                    slug
                }
            }
        }
        
    `

    const results = await request(graphqlAPI, query)
    return results.topicCategories
}

export const getTopicDetails = async (slug) => {
    const query = gql`
        query GetTopicDetails($slug: String!) {
            topic(where: { slug: $slug }) {
                slug
                name
                content {
                    raw
                }
            }
        }
    `

    const results = await request(graphqlAPI, query, { slug })
    return results.topic
}

export const getResources = async () => {
    const query = gql`
        query GetResources {
            resources {
                categoryIcon {
                  url
                }
                resourceCategory
                resourceList {
                  raw
                }
            }
        }
        
    `

    const results = await request(graphqlAPI, query)
    return results.resources
}