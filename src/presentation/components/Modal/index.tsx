import React from 'react'
import { ElementType, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { MODAL_IDS } from 'presentation/constants'
import { Modal, useModal } from 'presentation/hooks'

import { EditUser } from './EditUser'

const MODAL_COMPONENTS = {
  [MODAL_IDS.EDIT_USER]: EditUser
}

export const ModalController = () => {
  const [mounted, setMounted] = useState(false)
  const portalElement = useRef<HTMLDivElement>()
  const { modal, actions } = useModal()

  const onClose = () => actions.setModal({} as Modal)
  const activeModal = modal.id

  useEffect(() => {
    setMounted(true)
    portalElement.current = document.getElementById(
      'root-modal'
    ) as HTMLDivElement
  }, [])

  const ModalComponent = MODAL_COMPONENTS[activeModal] as ElementType
  const hasActiveModal = !!ModalComponent

  useEffect(() => {
    document.body.style.overflow = hasActiveModal ? 'hidden' : 'auto'
  }, [hasActiveModal])

  if (!mounted || !portalElement.current || !hasActiveModal) {
    return null
  }

  return createPortal(
    <ModalComponent {...modal.args} {...{ onClose }} />,
    portalElement.current
  )
}
