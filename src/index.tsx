import React from 'react'
import ReactDOM from 'react-dom'


import { initializePresentationLayer } from './presentation/PresentationLayer'

const App = initializePresentationLayer()

ReactDOM.render(<App />, document.getElementById('root'))
