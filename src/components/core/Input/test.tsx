import userEvent from '@testing-library/user-event'
import { render, screen, fireEvent } from 'utils/test'
import Input from './index'

describe('<Input />', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Input />)

    expect(container).toMatchSnapshot()
  })

  it('Renders with placeholder', () => {
    render(<Input placeholder="Placeholder" />)

    expect(screen.getByPlaceholderText('Placeholder')).toBeInTheDocument()
  })

  it('Changes its value when typing', () => {
    const onChange = jest.fn()
    render(<Input onChange={onChange} placeholder="type something" name="Input" />)
    const input = screen.getByPlaceholderText('type something')

    const typedText = 'new text'
    fireEvent.change(input, { target: { value: typedText } })

    expect(input).toHaveValue(typedText)
  })

  it('Should be disabled', () => {
    const onChange = jest.fn()
    render(<Input disabled onChange={onChange} placeholder="type something" name="Input" />)
    const input = screen.getByPlaceholderText('type something')

    const typedText = 'new text'
    fireEvent.change(input, { target: { value: typedText } })

    expect(input).toBeDisabled()
  })

  it('Renders with error', () => {
    render(<Input invalid placeholder="type something" name="Input" />)

    expect(screen.getByPlaceholderText('type something')).toHaveStyle({
      borderBottom: 'solid 1px #F5726C',
    })
  })

  it('Is accessible by tab', () => {
    render(<Input placeholder="type something" />)

    const input = screen.getByPlaceholderText('type something')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })
})
