import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { AppBar } from './AppBar'

test('Render AppBar component', () => {
  const dom = render(<AppBar />, { wrapper: MemoryRouter})
  const textRendered = dom.getByText('Virtual Board')
  expect(textRendered).toBeInTheDocument()
});

test('Render AppBar component check for title', () => {
  const dom = render(<AppBar />, { wrapper: MemoryRouter})
  const textRendered = dom.getByText('Post-it')
  expect(textRendered).toBeInTheDocument()
});

test('Render AppBar component check for Say hi button', () => {
  const dom = render(<AppBar />, { wrapper: MemoryRouter})
  const textRendered = dom.getByText('Say hi to the team')
  expect(textRendered).toBeInTheDocument()
});

test('Render AppBar component check for Say hi button', () => {
  const dom = render(<AppBar />, { wrapper: MemoryRouter})
  const textRendered = dom.getByText('Say hi to the team')
  expect(textRendered).toBeInTheDocument()
});

test('Render Modal for Say hi button clicked', () => {
  const dom = render(<AppBar />, { wrapper: MemoryRouter})
  fireEvent.click(dom.getByText('Say hi to the team'))
  expect(dom.getByText('Minh')).toBeInTheDocument()
});
