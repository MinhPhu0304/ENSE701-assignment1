import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Board } from './pages/Board'

import { store, dispatch } from './store'
import { loadNotes } from './store/actions/loadNotes'

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
  useEffect(componentDidMount, [])
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

function componentDidMount () {
  dispatch(loadNotes())
}
