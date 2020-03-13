import React from 'react'
import Draggable from 'react-draggable'

import './styles.css'

export function Note() {
  return (
    <Draggable>
      <div className="note">
        Post it note
      </div>
    </Draggable>
  )
}

