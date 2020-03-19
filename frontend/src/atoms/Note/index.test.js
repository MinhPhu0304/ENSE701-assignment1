import React from 'react';
import { render } from '@testing-library/react';
import { Note } from './index'

test('Render Note component', () => {
  const note = { content: 'Hello World' }
  const dom = render(<Note content={note}/>)
  const textRendered = dom.getByText(/Hello World/)
  expect(textRendered).toBeInTheDocument()
});
