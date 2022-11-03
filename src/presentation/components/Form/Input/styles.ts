import styled from 'presentation/layouts/styled-components'

import { Subtitle } from '../../Text'

export const StyledInput = styled.input`
  min-width: 400px;
  height: 64px;
  padding: ${({ theme }) => theme.mixins.getSpacing([2, 0, 2, 2])};
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 30px;

  &[placeholder] {
    font-weight: ${({ theme }) => theme.fontWeights.light};
  }
`

export const Label = styled(Subtitle)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: 18px;
  line-height: 23px;
`
