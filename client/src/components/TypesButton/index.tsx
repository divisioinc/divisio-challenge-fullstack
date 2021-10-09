import { ButtonHTMLAttributes } from 'react'

import { TypeButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pokemonType: string
}

export function TypesButton({ pokemonType }: ButtonProps) {
  return <TypeButton type="button">{pokemonType}</TypeButton>
}
