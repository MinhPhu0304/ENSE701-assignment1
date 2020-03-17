import { ADD_NOTE, ADD_NOTES, REMOVE_NOTES, UPSERT_NOTES } from '../actions/notes'

const inititalState = []

export function noteReducers(state = inititalState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload]
    case ADD_NOTES:
      return [...state, ...action.payload]
    case REMOVE_NOTES:
      return {
        ...state,
        note: state.notes.filter((note) => note !== action.payload)
      }
    default: 
      return state
  }
}
