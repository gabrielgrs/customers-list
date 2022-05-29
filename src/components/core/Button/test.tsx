import { render } from '@testing-library/react'
import Button from './index'

describe('<Button />', () => {
  it('test', () => {
    const { getByRole } = render(<Button>Button</Button>)
    const element = getByRole('button', { name: /Button/i })
    expect(element).toBeInTheDocument()
  })
})
