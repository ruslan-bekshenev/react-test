import { render, screen } from '@testing-library/react';
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
    expect(input).toMatchSnapshot();
    // screen.debug()
  })
})