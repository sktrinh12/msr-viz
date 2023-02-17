import { render, screen } from '@testing-library/react'
import NumberInput from './components/NumberInput'
import { fireEvent } from '@testing-library/react'

describe('Number Input Component', () => {
  test('check if Number input renders', () => {
    const mockNumber = 30
    render(
      <NumberInput
        nLimit={mockNumber}
        handleChangeNLimit={jest.fn()}
        handleNLimitButtonClick={jest.fn()}
      />
    )
    const numberInput = screen.getByRole('textbox')
    const button = screen.getByRole('button')
    expect(numberInput).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    let input = screen.getByLabelText('N Number', { selector: 'input' })
    expect(parseInt(input.value)).toEqual(mockNumber)
    fireEvent.change(input, { target: { value: mockNumber + 1 } })
    // console.log(input)
    expect(parseInt(input.value)).toEqual(mockNumber + 1)
  })
})
