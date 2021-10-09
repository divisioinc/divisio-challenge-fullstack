import styled from 'styled-components'

export const PokedexFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;

  div {
    height: 70px;
    width: 70px;
    background: var(--dark-grey);
    border-radius: 50%;
    margin-top: 20px;
  }

  i {
    font-size: 110px;
    color: var(--dark-grey);
  }
`
