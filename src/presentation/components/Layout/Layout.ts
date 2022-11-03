import styled from 'presentation/layouts/styled-components'

export const Layout = styled.section`
  padding: ${({ theme }) => theme.mixins.getSpacing([24.1, 29.5, 50, 29.5])};
  background: ${({ theme }) => theme.colors.warmGrey1};
`
