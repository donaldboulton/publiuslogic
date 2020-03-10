import styled from 'styled-components'
import mediaQuery from '../../utils/mediaQuery'

export const GridSection = styled.div`
  display: grid;
  grid-template-columns: 1rem 1fr 1rem;
  grid-template-rows: auto 1fr auto;
`
export const Chapter = styled.div`
  font-size: 1.1em;
  font-weight: 700;
  position: relative;
  margin: 0 0 0 56px;
  &:before {
    content: "";
    width: 50px;
    position: absolute;
    left: -56px;
    top: 50%;
    transform: translateY(-50%);
    height: 2px;
    background: rgba(0, 0, 0, 0.8);
  }
  ${mediaQuery.minPhablet} {
    content: "";
    width: 50px;
    position: absolute;
    left: -56px;
    top: 50%;
    transform: translateY(-50%);
    height: 2px;
    background: rgba(0, 0, 0, 0.8);
    background-size: cover;
      &:after, &:before {
      background-size: contain;
    }
  }
`
