import React from 'react'

import { User } from 'domain/entities'

import { Card, UserCard } from '../Card'
import { Container } from './styles'

import { Loader } from '..'

interface Props {
  loading: boolean
  users?: User[]
}

export const UsersList = ({ users, loading }: Props) => {
  return (
    <Container>
      {users?.map((user) => (
        <Card key={user.id}>
          <UserCard {...{ user }} />
        </Card>
      ))}
      {loading && <Loader />}
    </Container>
  )
}
