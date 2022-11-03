import React, { ChangeEvent, FormEvent, useState } from 'react'
import FocusLock from 'react-focus-lock'

import { User } from 'domain/entities'
import { Button, Input, Title } from 'presentation/components'
import { useUsersData } from 'presentation/hooks'

import { ButtonWrapper, Container, Map, Mask, MapWrapper, Form } from './styles'

interface Props {
  user: User
  onClose: () => void
}

type UserInfo = {
  address: string
  description: string
  name: string
}

export const EditUser = ({ onClose, user }: Props) => {
  const [userInfo, setUserInfo] = useState({} as UserInfo)
  const { address, description, id, name } = user
  const { handleUpdateUser } = useUsersData('GET_USERS', 'UPDATE_USER').actions

  const handleChangeUserInfo = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [event.target.name as keyof typeof userInfo]: event.target.value
    }))
  }

  const handleUpdateUserInfo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleUpdateUser({
      id,
      body: {
        ...userInfo,
        updatedAt: `${new Date()}`
      }
    })
    onClose()
  }

  return (
    <>
      <Mask onClick={onClose} aria-hidden="true" />
      <FocusLock>
        <Container>
          <header>
            <Title>Edit user</Title>
          </header>
          <MapWrapper>
            <Map />
            <Form onSubmit={(e) => handleUpdateUserInfo(e)} id="update_form">
              <Input
                label="Name"
                id="name"
                value={userInfo.name ?? name}
                onChange={handleChangeUserInfo}
              />
              <Input
                label="Address"
                id="address"
                value={userInfo.address ?? address}
                onChange={handleChangeUserInfo}
              />
              <Input
                label="Description"
                id="description"
                value={userInfo.description ?? description}
                onChange={handleChangeUserInfo}
              />
            </Form>
          </MapWrapper>
          <ButtonWrapper>
            <Button type="submit" form="update_form">
              Save
            </Button>
            <Button type="button" onClick={() => onClose()} primary={false}>
              Cancel
            </Button>
          </ButtonWrapper>
        </Container>
      </FocusLock>
    </>
  )
}
