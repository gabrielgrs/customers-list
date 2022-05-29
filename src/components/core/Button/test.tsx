import { render, screen } from 'utils/test'
import Button from './index'

describe('<Button />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Button>Button Content</Button>)

    expect(container).toMatchSnapshot()
  })

  it('should render button', () => {
    render(<Button>Button Content</Button>)

    const element = screen.getByRole('button', { name: /Button Content/i })
    expect(element).toBeInTheDocument()
  })

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Button Content</Button>)

    expect(screen.getByRole('button', { name: /Button Content/i })).toHaveStyle({
      width: '100%',
    })
  })

  it('should render a disabled Button', () => {
    render(<Button disabled>Button Content</Button>)

    expect(screen.getByRole('button', { name: /Button Content/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled',
      }
    )
  })

  it('should render Button with variant', () => {
    render(<Button variant="danger">Button Content</Button>)
    const element = screen.getByRole('button', { name: /Button Content/i })
    expect(element).toHaveStyle({
      backgroundColor: '#F5726C',
    })
  })
})
