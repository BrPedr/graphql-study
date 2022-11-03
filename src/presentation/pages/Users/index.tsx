import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'

import {
  Button,
  Input,
  Layout,
  Title,
  UsersList
} from 'presentation/components'
import { useUsersData } from 'presentation/hooks/useUsersData'

import { ButtonWrapper, Container, Header } from './styles'

export const Users = (): ReactElement | null => {
  const history = useHistory()
  const { search } = useLocation()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchInput, setSearchInput] = useState('')
  const [requestType, setRequestType] = useState<'GET_USERS' | 'GET_USER'>(
    'GET_USERS'
  )
  const { actions, page, data, loading } = useUsersData(
    requestType,
    'UPDATE_USER'
  )

  const getMultipleUserPages = () => {
    const queryParams = new URLSearchParams(search)
    const pageNumber = Number(queryParams.get('page'))
    const newPage = currentPage + 1

    if (newPage > pageNumber) return
    actions.setPageNumber(newPage)
    setCurrentPage(newPage)
  }

  useEffect(() => {
    getMultipleUserPages()
  }, [currentPage])

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchInput(event.target.value)

  return (
    <Layout>
      <Container>
        <Header>
          <Title>Users list</Title>
          <Input
            placeholder="Search..."
            id="search"
            type="search"
            onChange={handleSearchInputChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                setRequestType('GET_USER')
                actions.getUser({
                  name: searchInput
                })
              }
            }}
            value={searchInput}
          />
        </Header>
        <UsersList users={data} loading={loading} />
        <ButtonWrapper>
          <Button
            onClick={() => {
              setRequestType('GET_USERS')
              history.push({
                search: `?page=${page + 1}`
              })
              actions.setPageNumber(page + 1)
              actions.getMoreUsers()
            }}
            type="button"
            primary={false}>
            Load more
          </Button>
        </ButtonWrapper>
      </Container>
    </Layout>
  )
}
