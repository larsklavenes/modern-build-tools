import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'

import Button from './Button'

it('renders welcome message', () => {
  render(<Button>Hello World</Button>)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})
