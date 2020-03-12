import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Board } from './pages/Board'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fcaf09',
    },
    secondary: {
      main: '#000000'
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/board">
            <Board />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
