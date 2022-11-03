import styled, { keyframes } from 'presentation/layouts/styled-components'

const spin = keyframes`  
   from { transform: rotate(0deg); }
   to { transform: rotate(360deg); }
`

export const Loader = styled.div`
  border: 16px solid #f3f3f3; 
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 1s ease-out infinite;
  margin: ${({theme}) => theme.mixins.getSpacing(3)} auto;
`
