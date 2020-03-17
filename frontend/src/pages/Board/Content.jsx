import { Fab } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'

import { Note } from '../../atoms/Note'
import { dispatch, Notes } from '../../store'
import './content.css'

export const Content = connect(mapStateToProps)(ContentDump)

function mapStateToProps (state) {
  const { notes } = state
  return {
    notes
  }
}

function ContentDump({ notes }) {
  const handleFabClick = () => {
    dispatch(Notes.actions.addNote(''))
  }
  return (
    <div style={{ backgroundColor: 'white', height: '100%', width: '100%'}}>
      {
        notes.map((note, key) => <Note key={key} content={note}/>)
      }
      <div className="fab-container">
        <Fab onClick={handleFabClick} color="secondary" aria-label="add">
          <i className="material-icons">add</i>
        </Fab>
      </div>
    </div>
  )
}
