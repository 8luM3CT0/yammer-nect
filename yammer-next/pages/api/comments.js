/*********************************************************************
 * Any file inside the folder pages/api will be mappted to /api/ an *
 * will be treated as an API endpoint instead of a page                  *
 **********************************************************************/

import { GraphQLClient, gql } from 'graphql-request'

const graphqlAPI = process.env.next_public_graphcms_key

export default async function comments (req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.graphql_content_token}`
    }
  })

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `

  try {
    const result = await graphQLClient.request(query, {
      name: req.body.name,
      email: req.body.email,
      comment: req.body.comment,
      slug: req.body.slug
    })
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
}
