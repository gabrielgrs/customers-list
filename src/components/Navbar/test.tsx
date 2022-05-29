import { render } from 'utils/test'
import Navbar from './index'

describe('<Navbar />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Navbar />)
    expect(container).toMatchSnapshot()
  })
})
