import React, { useState } from 'react'

import { User } from 'domain/entities'
import { MODAL_IDS } from 'presentation/constants'
import { useModal } from 'presentation/hooks'
import { Edit } from 'presentation/icons'
import { theme } from 'presentation/layouts/theme'

import {
  Avatar,
  Container,
  CreationDate,
  Icon,
  StyledDate,
  Description,
  Header,
  Name
} from './styles'

interface Props {
  user: User
}
export const UserCard = ({ user }: Props) => {
  const [hoveredUser, setHoveredUser] = useState('')
  const { avatar, createdAt, description, id, name } = user
  const { setModal } = useModal().actions

  const date = createdAt.split(' ')

  return (
    <Container
      id={id}
      onBlur={() => setHoveredUser('')}
      onMouseEnter={() => setHoveredUser(id)}
      onMouseLeave={() => setHoveredUser('')}
      tabIndex={0}>
      <Icon
        role="button"
        tabIndex={0}
        isSelectedUser={id === hoveredUser}
        onClick={() =>
          setModal({
            id: MODAL_IDS.EDIT_USER,
            args: { user }
          })
        }
        onKeyDown={(e) => {
          e.key === 'Enter' &&
            setModal({
              id: MODAL_IDS.EDIT_USER,
              args: { user }
            })
        }}>
        <Edit size={24} color={theme.colors.grey1} />
      </Icon>
      <Avatar src={avatar} />
      <Header>
        <Name>{name}</Name>
        <CreationDate isSelectedUser={id === hoveredUser}>
          created <StyledDate>{`${date[2]} ${date[1]} ${date[3]}`}</StyledDate>
        </CreationDate>
      </Header>
      <Description>{description}</Description>
    </Container>
  )
}
