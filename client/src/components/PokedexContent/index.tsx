import { BlueButtons } from 'components/BlueButtons'
import { TypesButton } from 'components/TypesButton'
import {
  PokedexContentContainer,
  PokedexContentInfos,
  PokedexContentPokemon,
  PokedexContentScreen,
  PokedexInfoName,
  PokedexTypesButtons
} from './styles'

export const PokedexContent = () => {
  return (
    <PokedexContentContainer>
      <PokedexContentPokemon>
        <PokedexContentScreen>
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
            alt="bulba"
          />
        </PokedexContentScreen>
      </PokedexContentPokemon>
      <PokedexContentInfos>
        <h1>#001</h1>
        <PokedexInfoName>
          <h1>Bulbasaur</h1>
        </PokedexInfoName>
        <BlueButtons />
        <PokedexTypesButtons>
          <TypesButton pokemonType={'GRASS'} />
          <TypesButton pokemonType={'POISON'} />
        </PokedexTypesButtons>
      </PokedexContentInfos>
    </PokedexContentContainer>
  )
}
