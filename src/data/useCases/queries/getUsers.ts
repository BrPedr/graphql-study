import gql from 'graphql-tag'

export const GET_USERS = gql`
  query getUsers($page: Number!) {
    users(page: $page) @rest(type: "Users", path: "/users?page={args.page}") {
      avatar
      id
      name
      dob
      address
      createdAt
      description
      updatedAt
    }
  }
`