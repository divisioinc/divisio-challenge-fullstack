import styled from 'styled-components'

export const PokedexContentContainer = styled.div`
  max-width: 1720px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const PokedexContentPokemon = styled.div`
  width: 65%;
  background: var(--border);
  border-radius: 3.5rem;
  height: 42rem;
  max-height: 710px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PokedexContentScreen = styled.div`
  background: var(--dark-grey);
  border-radius: 3.2rem;
  height: 90%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 25rem;
    margin: 0 auto;
  }
`
export const PokedexContentInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #f8f8f8;
    font-size: 80px;
  }
`
export const PokedexInfoName = styled.div`
  width: 480px;
  height: 150px;
  background-color: var(--dark-grey);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0 80px 0;
`
export const PokedexTypesButtons = styled.div`
  display: flex;
  margin-top: 80px;

  button {
    margin: 0 20px;
  }
`
