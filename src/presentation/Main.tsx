import React from 'react'

import { ApolloProvider } from '@apollo/client'
import { client } from 'infra/apollo'
import { makeMockedServer } from 'infra/server'

import GlobalStyles from './layouts/GlobalStyles'
import { ThemeProvider } from './layouts/styled-components'
import { theme } from './layouts/theme'
import { Router } from './Router'

export const Main = () => {
  makeMockedServer()
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router />
        <GlobalStyles />
      </ThemeProvider>
    </ApolloProvider>
  )
}
