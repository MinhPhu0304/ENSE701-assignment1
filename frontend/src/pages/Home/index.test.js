import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { Home } from './index'

test('Render Home page component', () => {
  const dom = render(<Home />, { wrapper: MemoryRouter})
  const textRendered = dom.getByText('A simple virtual post it board')
  expect(textRendered).toBeInTheDocument()
})
