import styled from 'presentation/layouts/styled-components'

export const Card = styled.div`
  width: 400px;
  height: 336px;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  -webkit-filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0.4));
  filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0.4));
  transition: filter 1s ease;

  &:hover {
    -webkit-filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
  }
`
