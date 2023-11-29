import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('Testing the main component', () => {
  test('Must render correctly', () => {
    render(<App />)
    expect(screen.getByText('cadastrar')).toBeInTheDocument()
  })

  test('Must add "estudar react" to the list', () => {
    render(<App />)
    fireEvent.change(screen.getByTestId('campo-tarefa'), {
      target: {
        value: 'estudar react'
      }
    })
    fireEvent.click(screen.getByTestId('btn-cadastrar'))
    expect(screen.getByText('estudar react')).toBeInTheDocument()
  })
})