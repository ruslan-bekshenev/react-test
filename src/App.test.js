import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App'

describe('TEST APP', () => {
  test('renders learn react link', () => {
    render(<App />)
    const helloWorld = screen.getByText(/Hello world/i)
    const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/input value/i)
    // Проверяет наличие элемента в DOM'e
    expect(helloWorld).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    // expect(input).toMatchSnapshot();
    // screen.debug()
  })

  test('renders learn react link', async () => {
    render(<App />)
    // const helloWorldElement = screen.queryByText(/hello2/i)
    // expect(helloWorldElement)
    const helloWorldElement = await screen.findByText(/data/i)
    expect(helloWorldElement).toBeInTheDocument()
    expect(helloWorldElement).toHaveStyle({ color: 'red' })
  })

  test('Click event', () => {
    render(<App />)

    const btn = screen.getByTestId('toggle-btn')
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
  })

  test('Input event', () => {
    render(<App />)

    const input = screen.getByPlaceholderText(/input value/i)
    // Сверяет содержимое внутри элемента
    expect(screen.queryByTestId('value-elem')).toContainHTML('')
    // Позволяет работать с событиями, имитация поведения DOM-элементов
    // fireEvent.input(input, {
    //   target: { value: '123123' }
    // })
    // Оболочка над fireEvent, имеет более высокий уровень абстракции, эмулирует полное поведение пользователей
    // Как будто бы это пользователь. Обрабатываются события нажатия клавиш и тд
    userEvent.type(input, '123123')
    expect(screen.queryByTestId('value-elem')).toContainHTML('123123')
  })
})