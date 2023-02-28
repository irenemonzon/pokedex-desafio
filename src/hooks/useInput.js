import { useState } from 'react'

export const useInput = (initialState = {}) => {
  const [inputState, setInputState] = useState(initialState)
  const onInputChange = ({ target }) => {
    const { name, value } = target

    setInputState({
      ...inputState,
      [name]: value
    })
  }

  const onReset = () => {
    setInputState(initialState)
  }

  return {
    ...inputState,
    inputState,
    onReset,
    onInputChange
  }
}
