import Modal from 'react-modal'

interface Pokemon {
  name: string
  id: string
  image: string
  types?: {
    name: string
    url: string
  }[]
  abilities?: {
    name: string
    url: string
  }[]
}

interface PokemonModalProps {
  pokemon: Pokemon
  isOpen: boolean
  onRequestClose: () => void
}

export const PokemonModal = ({
  isOpen,
  onRequestClose,
  pokemon
}: PokemonModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <h1>{pokemon.name}</h1>
    </Modal>
  )
}
