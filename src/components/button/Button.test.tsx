import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders the button', () => {
    const title = 'title'
    render(<Button title='title' />)

    const button = screen.getByText(title)

    expect(button).toBeInTheDocument()
  })
})
