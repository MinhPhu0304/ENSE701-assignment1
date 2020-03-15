import { combineReducers } from 'redux'

import { noteReducers } from './notes'

export const RootReducers = combineReducers({ note: noteReducers })