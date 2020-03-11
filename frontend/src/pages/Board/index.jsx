import React from 'react'

import { AppBar } from '../../atoms/AppBar'
import { Content } from './Content'

export function Board () {
  return (
    <>
    <AppBar />
    <main style={{ flex: 1 }}>
      <Content />
    </main>
    </>
  )
}
