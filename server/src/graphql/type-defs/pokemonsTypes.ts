import { gql } from 'apollo-server-express'

export default gql`
  type Pokemon {
    id: Int
    name: String
    image: String
    url: String
  }

  type Query {
   pokemons(offset: Int, limit: Int): [Pokemon]
  }
`
