import { Fab } from '@material-ui/core'
import React from 'react'

import './content.css'

export function Content(props) {
  return (
    <div style={{ backgroundColor: '#ffd400', height: '100%', width: '100%'}}>
      <div className="fab-container">
        <Fab color="secondary" aria-label="add">
          <i class="material-icons">add</i>
        </Fab>
      </div>
    </div>
  )
}
