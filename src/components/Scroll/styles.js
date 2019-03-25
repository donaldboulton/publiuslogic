import styled from 'styled-components'
import { ArrowDownCircle as Down } from 'styled-icons/feather/ArrowDownCircle'
import { ArrowUpCircle as Up } from 'styled-icons/feather/ArrowUpCircle'

export const Arrow = styled(Down).attrs(({ direction, size }) => ({
  as: direction === `up` && Up,
  size,
}))`
  ${({ show, size }) => `
  z-index: 2;
  background: #1d1d1d;
  color: #cccccc;
  border-radius: 50%;
  transition: 1000;
  position: absolute;
  bottom: 0.5em;
  opacity: ${show ? 1 : 0};
  visibility: ${show ? `visible` : `hidden`};
  :hover {
    transform: scale(1.15);
    background: #d64000;
  }
  right: calc(50vw - ${size} / 2);`}
`
