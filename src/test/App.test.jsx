import { render, cleanup, screen } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import App from '../App'
// import { handlers } from '../mocks/handlers'
// console.log('handlers', handlers)
describe(('App'), () => {
  afterEach(cleanup)
  it('should render title correctly', () => {
    render(<App />)
    expect(screen.getByRole('heading')).toMatch(/Pokemon Data/)
  })
})
