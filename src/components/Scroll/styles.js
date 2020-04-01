import styled from 'styled-components'
import { ArrowDown as Down } from '@styled-icons/evil/ArrowDown'
import { ArrowUp as Up } from '@styled-icons/evil/ArrowUp'

export const Arrow = styled(Down).attrs(({ direction, size }) => ({
  as: direction === `up` && Up,
  size,
}))`
  ${({ theme, show, size }) => `
  z-index: 2;
  background: ${theme.black};
  color: ${theme.textColor};
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
