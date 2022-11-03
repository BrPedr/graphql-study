import gql from 'graphql-tag'

export const UPDATE_USER = gql`
  mutation UpdateUser($id: Number!, $body: PublishablePostInput!) {
    users(id: $id, body: $body)
      @rest(
        type: "Users"
        path: "/users/{args.id}"
        method: "PUT"
        bodyKey: "body"
      ) {
      avatar
      id
      name
      dob
      address
      description
      createdAt
      updatedAt
    }
  }
`
