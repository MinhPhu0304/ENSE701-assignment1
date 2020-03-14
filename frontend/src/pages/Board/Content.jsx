import { Fab } from '@material-ui/core'
import React from 'react'

import { Note } from '../../atoms/Note'
import './content.css'

export function Content() {
  return (
    <div style={{ backgroundColor: 'white', height: '100%', width: '100%'}}>
      <Note content="This is a test content This is a test content This is a test content This is a test content" />
      <div className="fab-container">
        <Fab color="secondary" aria-label="add">
          <i className="material-icons">add</i>
        </Fab>
      </div>
    </div>
  )
}
