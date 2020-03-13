import { Card } from '@material-ui/core'
import React from 'react'
import Draggable from 'react-draggable'

import './styles.css'

export function Note() {
  return (
    <Draggable bounds="body">
      <Card className="note" style={{backgroundColor: '#ff7eb9' }}>
        Post it note
      </Card>
    </Draggable>
  )
}

