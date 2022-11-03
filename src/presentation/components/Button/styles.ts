import styled, { css } from 'presentation/layouts/styled-components'

interface Props {
  primary?: boolean
}

const PrimaryButton = css`
  background: ${({ theme }) => theme.colors.white};
`

const SecondaryButton = css`
  background: ${({ theme }) => theme.colors.warmGrey1};
`

export const Container = styled.button<Props>`
  width: 280px;
  height: 90px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  text-transform: uppercase;
  cursor: pointer;
  ${({ primary }) => (primary ? PrimaryButton : SecondaryButton)};

  &:hover:enabled,
  &:focus {
    border: 4px solid rgba(0, 0, 0, 0.4);
  }

  &[disabled] {
    color: rgba(0, 0, 0, 0.5);
    cursor: not-allowed;
  }
`
