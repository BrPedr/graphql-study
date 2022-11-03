import { ApolloClient, InMemoryCache } from '@apollo/client'
import { RestLink } from 'apollo-link-rest'

const restLink = new RestLink({
  uri: process.env.API_URL
})

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
})
