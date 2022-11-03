import styled from 'presentation/layouts/styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.mixins.getSpacing(8)};
`
