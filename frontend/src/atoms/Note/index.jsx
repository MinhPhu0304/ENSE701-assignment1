import { Button, Typography, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { Rnd } from 'react-rnd'

import { dispatch, Notes } from '../../store'

import './styles.css'

export function Note({ content }) {
  const [isEditing, setEditting] = useState(false)
  const [note, setNote] = useState(content)
  const defaultSetting = getDefaultRNDSetting()
  const toggleEdit = () => setEditting(!isEditing)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setEditting(!isEditing)
    submitNote(note)
  }
  const handleTextChange = (e) => {setNote({...note, content: e.target.value}) }
  if(isEditing) {
    return (
      <Rnd className="Draggable" cancel="#note-input" default={defaultSetting} minWidth={defaultSetting.width} minHeight={defaultSetting.height} bounds="parent">
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField id="note-input" label="Enter your note" color="secondary" onChange={handleTextChange}/>
          <div className="form-actions">
            <Button size="small" onClick={toggleEdit} type="button"> <i className="material-icons">cancel</i></Button>
            <Button size="small" type="submit"> <i className="material-icons">save</i></Button>
          </div>
        </form>
      </Rnd>
    )
  }

  return (
    <Rnd className="Draggable" default={defaultSetting} minWidth={defaultSetting.width} minHeight={defaultSetting.height} bounds="parent">
      <Typography style={{ minWidth: 100, minHeight: 100, height: '75%', width: '100%'}}>{note.content}</Typography>
      <Button size="small" onClick={toggleEdit}> <i className="material-icons">edit</i></Button>
    </Rnd>
  )
}

function getDefaultRNDSetting () {
  return { 
    x: 0,
    y: 0,
    width: 210,
    height: 150,
  }
}

async function submitNote (note) {
  if(note._id){
    putNote(note)
  }
  postNewNote(note)
}

async function putNote (note) {
  const body = await fetch(`${window.location.origin}/api/note`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: note.content, _id: note._id })
  }).then(res => res.json())
  dispatch(Notes.actions.upsertNote(body.newNote))
}

async function postNewNote (note) {
  const body = await fetch(`${window.location.origin}/api/note`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: note.content })
  }).then(res => res.json())
  dispatch(Notes.actions.addNote(body.newNote))
}