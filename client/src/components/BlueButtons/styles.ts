import styled from 'styled-components'
import { transparentize } from 'polished'

export const BlueButtonsContainer = styled.div`
  width: 440px;
  height: 140px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`
export const BlueButtonsSquare = styled.div`
  background: var(--mirror-dark);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  &:hover {
    background: ${transparentize(0.1, '#009DD4')};
  }
`
