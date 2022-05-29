import { render } from '../../../utils/test'
import Button from './index'

describe('<Button />', () => {
  it('test', () => {
    const { getByRole } = render(<Button>Button</Button>)
    const element = getByRole('button', { name: /Button/i })
    expect(element).toBeInTheDocument()
  })
})
