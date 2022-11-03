import React from 'react'

import { Main } from './Main'

export function initializePresentationLayer(): React.FC {
  const App: React.FC = () => {
    return <Main />
  }
  return App
}
