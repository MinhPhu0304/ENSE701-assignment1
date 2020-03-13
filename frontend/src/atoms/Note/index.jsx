import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { Rnd } from 'react-rnd'

import './styles.css'

export function Note({ content }) {
  return (
    <Rnd className="Draggable" default={{
      x: 0,
      y: 0,
      width: 200,
      height: 200,
    }}>
      Post it note
      <Typography style={{ minWidth: 100, minHeight: 100, height: '75%', width: '75%'}}>{content}</Typography>
      <Button size="small"> <i className="material-icons">edit</i></Button>
    </Rnd>
  )
}
