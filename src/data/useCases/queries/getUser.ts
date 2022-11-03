import gql from 'graphql-tag'

export const GET_USER = gql`
  query getUser($name: String!) {
    users(name: $name)
      @rest(type: "Users", path: "/users?name={args.name}", method: "GET") {
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
