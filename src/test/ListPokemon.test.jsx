import { render, cleanup, screen } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import { ListPokemon } from '../components/ListPokemon'

describe(('ListPokemon'), () => {
  afterEach(cleanup)

  it('should display the expect quotes', async () => {
    render(<ListPokemon />)
    const listLength = await screen.findAllByRole('listitem')
    expect(listLength).toHaveLength(3)
    expect(await screen.findByText(/bulbasaur/i))
  })
})
