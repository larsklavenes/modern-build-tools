import { render, screen } from '@testing-library/react'

import Button from './Button'

it('renders welcome message', () => {
  render(<Button>Hello World</Button>)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})
