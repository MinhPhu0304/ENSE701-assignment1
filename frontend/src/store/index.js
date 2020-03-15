import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


import { RootReducers } from './reducers'

const store = createStore(RootReducers, composeWithDevTools())
const reducers = store.reducers
const getState = store.getState

export {
  store,
  reducers,
  getState
}
