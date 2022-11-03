import { useEffect, useState } from 'react'

import {
  ApolloError,
  makeVar,
  OperationVariables,
  useMutation,
  useQuery,
  useReactiveVar
} from '@apollo/client'
import { Query } from 'data/models'
import { User } from 'domain/entities'
import { queries } from 'presentation/constants'

interface UseUserData {
  actions: {
    getMoreUsers(): void
    getUser(variables: OperationVariables): void
    handleUpdateUser({ id, body }: { id: string; body: UserBody }): void
    setPageNumber: (pageNumber: number) => void
  }
  data: User[] | undefined
  loading: boolean
  error: ApolloError | undefined
  page: number
}

type UserBody = {
  address: string
  name: string
  description: string
  updatedAt: string
}

type UpdateUser = {
  id: string
  body: UserBody
}

type QueryString = 'GET_USERS' | 'GET_USER' | 'UPDATE_USER'

const pageController = makeVar(1)

export const useUsersData = (
  query: QueryString,
  mutation: QueryString
): UseUserData => {
  const page = useReactiveVar(pageController)
  const [name, setName] = useState('')

  const { data, loading, error, fetchMore } = useQuery<Query>(queries[query], {
    variables: { page, name }
  })

  useEffect(() => {
    fetchMore({ variables: name })
  }, [name])

  const [UpdateUser] = useMutation(queries[mutation], {
    refetchQueries: [queries[query], 'UpdateUser']
  })

  function getMoreUsers() {
    fetchMore({ variables: page })
  }

  function getUser(variables: OperationVariables) {
    setName(variables.name)
  }

  function handleUpdateUser({ id, body }: UpdateUser) {
    UpdateUser({ variables: { id, body } })
  }

  function setPageNumber(pageNumber: number) {
    pageController(pageNumber)
  }

  return {
    actions: { getMoreUsers, getUser, handleUpdateUser, setPageNumber },
    data: data?.users,
    loading,
    error,
    page
  }
}
