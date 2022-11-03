import styled from 'presentation/layouts/styled-components'

import { Paragraph, Subtitle } from '../../Text'

interface Props {
  isSelectedUser?: boolean
}

export const Avatar = styled.img`
  width: 168px;
  height: 168px;
  margin: 0 auto;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 28px;
`

export const Container = styled.div`
  position: relative;
  width: 400px;
  height: 336px;
  padding: ${({ theme }) => theme.mixins.getSpacing([5.5, 4, 5, 4])};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  &:hover,
  &:focus {
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
  }
`

export const CreationDate = styled.div<Props>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: 16px;
  line-height: 20px;
  opacity: ${({ isSelectedUser }) => (isSelectedUser ? 1 : 0)};
  transition: opacity 1s ease;
`

export const Description = styled(Paragraph)`
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Header = styled.header`
  display: inline-flex;
  align-items: baseline;
  justify-content: space-between;
`

export const Icon = styled.div<Props>`
  position: absolute;
  top: 0;
  right: 0;
  opacity: ${({ isSelectedUser }) => (isSelectedUser ? 1 : 0)};
  margin: ${({ theme }) => theme.mixins.getSpacing([2, 2.9, 0, 0])};
  transition: opacity 1s ease;
  cursor: pointer;
`

export const Name = styled(Subtitle)`
  color: ${({ theme }) => theme.colors.black};
  line-height: 26px;
  text-transform: uppercase;
`

export const StyledDate = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: red;
`

export const UserInformationWrapper = styled.div``
