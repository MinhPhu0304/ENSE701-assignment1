import { Fab } from '@material-ui/core'
import React from 'react'

import { Note } from '../../atoms/Note'
import './content.css'

export function Content() {
  return (
    <div style={{ backgroundColor: '#ffd400', height: '100%', width: '100%'}}>
      <Note />
      <div className="fab-container">
        <Fab color="secondary" aria-label="add">
          <i class="material-icons">add</i>
        </Fab>
      </div>
    </div>
  )
}
