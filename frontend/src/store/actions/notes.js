const ADD_NOTE = 'add_note'
const ADD_NOTES = 'add_notes'
const REMOVE_NOTES = 'remove_notes'
const UPSERT_NOTES = 'upsert_notes'

export {
  ADD_NOTE,
  ADD_NOTES,
  REMOVE_NOTES,
  UPSERT_NOTES
}

function addNote (note) {
  return {
    type: ADD_NOTE,
    payload: note
  }
}

function addNotes (note) {
  return {
    type: ADD_NOTES,
    payload: note
  }
}

function removeNote (note) {
  return {
    type: REMOVE_NOTES,
    payload: note
  }
}

function upsertNote (note) {
  return {
    type: UPSERT_NOTES,
    payload: note
  }
}

export {
  addNote,
  addNotes,
  upsertNote,
  removeNote,
}
