import { addNotes } from './notes'

function loadNotes () {
  return async (dispatch) => {
    const res = await fetch(`${window.location.origin}/api/note`)
    const { result } = await res.json()
    dispatch(addNotes(result))
  }
}

export {
  loadNotes
}
