import { render, screen, fireEvent } from 'utils/test'
import ActionIcon from './index'

describe('<ActionIcon />', () => {
  it('should match snapshot', () => {
    const { container } = render(<ActionIcon backgroundColor="primary">Action Icon</ActionIcon>)
    expect(container).toMatchSnapshot()
  })

  it('should render right color', () => {
    render(<ActionIcon backgroundColor="primary">Action Icon</ActionIcon>)

    expect(screen.getByText(/action icon/i)).toHaveStyle({
      backgroundColor: '#0bb58d',
    })
  })

  it('should dispatch on click on pressed', () => {
    const onClick = jest.fn()
    render(
      <ActionIcon backgroundColor="primary" onClick={onClick}>
        Action Icon
      </ActionIcon>
    )

    fireEvent.click(screen.getByText(/action icon/i))

    expect(onClick).toHaveBeenCalled()
  })
})
