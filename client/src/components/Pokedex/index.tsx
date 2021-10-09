import { PokedexContent } from 'components/PokedexContent'
import { PokedexFooter } from 'components/PokedexFooter'
import { PokedexHeader } from 'components/PokedexHeader'
import { Pokemon } from 'types/Pokemon'

import { PokedexContainer } from './styles'

interface PokemonListProps {
  pokemons: {
    pokemons: Pokemon[]
  }
  loading: boolean
}

export function Pokedex(props: PokemonListProps) {
  return (
    <PokedexContainer>
      <PokedexHeader />
      <PokedexContent />
      <PokedexFooter />
    </PokedexContainer>
  )
}

/*
{!props.loading &&
          props.pokemons.pokemons.map((pokemon: Pokemon) => (
            <div key={pokemon.id}>
              <h1>{pokemon.name}</h1>
              <img src={pokemon.image} alt={pokemon.name} />
            </div>
          ))}
*/
