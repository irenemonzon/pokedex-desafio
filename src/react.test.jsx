import { render, cleanup, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import App from './App'

describe(('App'), () => {
  afterEach(cleanup)
  it('should render', () => {
    render(<App />)
  })
  it('should render title correctly', () => {
    render(<App />)
    screen.getByText('App pokedex')
  })
})
