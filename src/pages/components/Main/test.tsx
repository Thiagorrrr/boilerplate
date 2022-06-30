import { screen, render } from '@testing-library/react'

import Main from './index'

describe('Main test', () => {
  it('should render the heading test', () => {
    render(<Main />)

    expect(screen.getByRole('heading', { name: /test/i })).toBeInTheDocument()
  })
  it('should render snapshot', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
