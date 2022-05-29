import { render, screen } from 'utils/test'
import Footer from './index'

describe('<Footer />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot()
  })

  it('should render link', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /gabrielgrs/i })).toBeInTheDocument()
  })
})
