import { useQuery } from '@apollo/client'
import { Pokedex } from 'components/Pokedex'
import { QUERY_ALL_POKEMONS } from 'queries/QUERY_ALL_POKEMONS'

export function Homepage() {
  const { data, loading } = useQuery(QUERY_ALL_POKEMONS, {
    variables: {
      offset: 0,
      limit: 35
    }
  })

  return (
    <>
      <Pokedex pokemons={data} loading={loading} />
    </>
  )
}
