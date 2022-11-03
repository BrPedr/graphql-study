import { makeVar, useReactiveVar } from '@apollo/client'
import { ModalTypes } from 'presentation/constants'

export type Modal = {
  id: ModalTypes
  args?: Record<string, unknown>
}

const modalController = makeVar({} as Modal)

export const useModal = () => {
  const modal = useReactiveVar(modalController)
  const setModal = (modal: Modal) => {
    modalController(modal)
  }
  return { actions: { setModal }, modal }
}
