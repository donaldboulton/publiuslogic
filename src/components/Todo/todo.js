import React, { ConcurrentMode, StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import './index.css'
import App from './hooksTodo'
import AppHeader from './components/AppHeader'

ReactDOM.render(
  <ConcurrentMode>
    <StrictMode>
      <AppHeader />
      <App />
    </StrictMode>
  </ConcurrentMode>,
  document.getElementById('root')
)

