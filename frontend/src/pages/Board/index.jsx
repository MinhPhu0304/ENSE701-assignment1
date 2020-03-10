import React from 'react'
import PropTypes from 'prop-types'

import { AppBar } from '../../atoms/AppBar'

export function Board (props) {
  return (
    <>
    <header>
      <AppBar />
    </header>
    <main>
      <h1>Board page</h1>
    </main>
    </>
  )
}

Board.propTypes = {

}
