import { render, screen } from '@testing-library/react'
import Home from 'pages/index'

describe('Home', () => {
  it('renders some buttons', () => {
    render(<Home />)

    const localButton = screen.getByText('Local Button')
    const dsButton = screen.getByText('Boop')
    const sbButton = screen.getByText('storybook button')

    expect(localButton).toBeInTheDocument()
    expect(dsButton).toBeInTheDocument()
    expect(sbButton).toBeInTheDocument()
  })
})
