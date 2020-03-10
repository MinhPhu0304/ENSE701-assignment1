import React from 'react'
import PropTypes from 'prop-types'

import { AppBar } from '../../atoms/AppBar'

export function Home (props) {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>
        <h1>This is a main page</h1>
      </main>
    </>
  )
}

Home.propTypes = {

}
