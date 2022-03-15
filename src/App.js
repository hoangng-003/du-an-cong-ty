import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'routes'
import ThemeConfig from 'theme'

// components
import LoadingScreen from 'components/LoadingScreen'

function App() {
  return (
    <ThemeConfig>
      <Router>
        <Routes />
      </Router>
    </ThemeConfig>
  )
}

export default App
