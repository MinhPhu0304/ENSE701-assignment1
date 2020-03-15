import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { RootReducers } from './reducers'

const store = createStore(RootReducers, composeWithDevTools(
  applyMiddleware(thunk)
))
const getState = store.getState
const dispatch = store.dispatch

export {
  store,
  getState,
  dispatch,
}
