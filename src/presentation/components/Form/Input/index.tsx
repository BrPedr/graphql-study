import React, { ChangeEvent, KeyboardEvent } from 'react'

import { StyledInput, Label } from './styles'

interface Props {
  id: string
  label?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  value?: string
}

export const Input = ({ label, id, type = 'text', ...props }: Props) => (
  <>
    {label && <Label as="label">{label}</Label>}
    <StyledInput tabIndex={0} type={type} name={id} {...{ ...props, id }} />
  </>
)
