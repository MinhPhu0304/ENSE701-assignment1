import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Board } from './pages/Board'

import { store } from './store'

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

export function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}
