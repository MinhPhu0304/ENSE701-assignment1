import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { RootReducers } from './reducers'
import * as noteReducers from './reducers/notes'

import * as noteActions from './actions/notes'

const store = createStore(RootReducers, composeWithDevTools(
  applyMiddleware(thunk)
))
const getState = store.getState
const dispatch = store.dispatch

const Notes = {}
Notes.reducers = noteReducers
Notes.actions = noteActions

export {
  store,
  getState,
  dispatch,
  Notes,
}
