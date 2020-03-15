import { ADD_NOTES, REMOVE_NOTES, UPSERT_NOTES } from '../actions/notes'

const inititalState = []

export function noteReducers(state = inititalState, action) {
  switch (action.type) {
    case ADD_NOTES:
      return {
        ...state,
        note: [...state.notes, action.payload]
      }
    case REMOVE_NOTES:
      return {
        ...state,
        note: state.notes.filter((note) => note !== action.payload)
      }
    default: 
      return state
  }
}
