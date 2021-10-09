import styled from 'styled-components'

export const PokedexContainer = styled.div`
  padding: 20px 80px;
`

export const PokedexHeaderMirror = styled.div`
  height: 100px;
  width: 100px;
  background-color: var(--mirror-dark);
  border-radius: 50%;
  padding: 5px;
  margin-left: 100px;

  div {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background: var(--mirror-normal);
    padding-top: 20px;
    padding-left: 20px;

    div {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: var(--mirror-light);
    }
  }
`
