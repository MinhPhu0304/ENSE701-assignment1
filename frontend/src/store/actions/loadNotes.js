import { addNotes } from './notes'

function loadNotes () {
  return async (dispatch) => {
    const res = await fetch('http://localhost:3000/api/note')
    const { result } = await res.json()
    dispatch(addNotes(result))
  }
}

export {
  loadNotes
}
