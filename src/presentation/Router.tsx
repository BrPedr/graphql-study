import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { ModalController } from './components/Modal'
import { Users } from './pages'

export enum ROUTES {
  BASE_NAME = '/'
}

export const Router: React.FC = () => {
  return (
    <BrowserRouter basename={ROUTES.BASE_NAME}>
      <Switch>
        <Route path="/" component={Users} />
      </Switch>
      <ModalController />
    </BrowserRouter>
  )
}
