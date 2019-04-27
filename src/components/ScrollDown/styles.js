import styled from 'styled-components'
import { ArrowDownCircle as Down } from 'styled-icons/feather/ArrowDownCircle'
import { ArrowUpCircle as Up } from 'styled-icons/feather/ArrowUpCircle'

export const Arrow = styled(Up).attrs(({ direction, size }) => ({
  as: direction === `down` && Down,
  size,
}))`
  ${({ theme, show, size }) => `
  z-index: 2;
  background: ${theme.darkOrange};
  color: ${theme.white};
  border-radius: 50%;
  transition: ${theme.shortTrans};
  position: fixed;
  top: 4.5em;
  opacity: ${show ? 1 : 0};
  visibility: ${show ? `visible` : `hidden`};
  :hover {
    transform: scale(1.15);
    background: ${theme.orange};
  }
  right: calc(1vw - ${size} / 1);`}
`
