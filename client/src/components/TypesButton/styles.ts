import styled from 'styled-components'
import { transparentize } from 'polished'

export const TypeButton = styled.button`
  width: 200px;
  height: 65px;
  border-radius: 50px;
  background: var(--green);
  color: #ffffff;
  border: none;
  font-size: 25px;

  &:hover {
    background: ${transparentize(0.1, '#33CC95')};
  }
`
