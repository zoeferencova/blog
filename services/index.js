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
