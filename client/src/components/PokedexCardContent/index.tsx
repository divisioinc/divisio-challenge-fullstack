import { PokedexCardContentProps } from 'types/interfaces'
import {
  PokedexContentContainer,
  PokedexContentScreen,
  PokedexContentImage
} from './styles'

export const PokedexCardContent = ({
  pokemonImage,
  pokemonName
}: PokedexCardContentProps) => {
  return (
    <PokedexContentContainer>
      <PokedexContentScreen />
      <PokedexContentImage src={pokemonImage} alt={pokemonName} />
    </PokedexContentContainer>
  )
}
