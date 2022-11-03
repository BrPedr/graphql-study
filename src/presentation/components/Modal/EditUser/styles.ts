import styled from 'presentation/layouts/styled-components'

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 62px;
`

export const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.5;
  z-index: ${({ theme }) => theme.zLayers.modal - 1};
  background: rgba(0, 0, 0, 0.3);
`

export const Container = styled.div`
  position: fixed;
  width: 1328px;
  height: 725px;
  top: 50%;
  left: 50%;
  padding: ${({ theme }) => theme.mixins.getSpacing(8)};
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.warmGrey1};
  border-radius: 8px;
  z-index: ${({ theme }) => theme.zLayers.modal};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.mixins.getSpacing(8)};
`

export const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.mixins.getSpacing(8)};
`

export const Map = styled.div`
  width: 518px;
  height: 336px;

  background: url('https://www.google.com/maps/about/images/mymaps/mymaps-desktop-16x9.png');
  border-radius: 8px;
`

export const MapWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Form = styled.form`
  width: 621.5px;
  height: 336px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
