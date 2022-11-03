import React from 'react'

import { Container } from './styles'

interface Props {
  children: string
  disabled?: boolean
  form?: string
  onClick?: () => void
  primary?: boolean
  type: 'button' | 'submit' | 'reset'
}

export const Button = ({
  children,
  primary = true,
  onClick,
  ...props
}: Props) => {
  return (
    <Container color="inherit" onClick={onClick} {...{ ...props, primary }}>
      {children}
    </Container>
  )
}
