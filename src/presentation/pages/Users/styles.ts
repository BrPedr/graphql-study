import styled from 'presentation/layouts/styled-components'

export const ButtonWrapper = styled.div`
  margin-top: ${({ theme }) => theme.mixins.getSpacing(8)};
  text-align: center;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.mixins.getSpacing(9.4)};
`
