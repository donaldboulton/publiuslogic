import styled from 'styled-components'
import { ArrowUp as Up } from '@styled-icons/evil/ArrowUp'

export const Arrow = styled(Up).attrs(({ direction, size }) => ({
  as: direction === `up` && Up,
  size,
}))`
  ${({ theme, show, size }) => `
  z-index: 2;
  background: ${theme.black};
  color: ${theme.white};
  border-radius: 50%;
  transition: ${theme.shortTrans};
  position: fixed;
  bottom: 2vh;
  opacity: ${show ? 1 : 0};
  visibility: ${show ? `visible` : `hidden`};
  :hover {
    transition: 0.3s;
    background: ${theme.noBack};
  }
  right: calc(1.1vw - ${size} / 1);`}
`
