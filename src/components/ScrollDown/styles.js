import styled from 'styled-components'
import { ArrowDown as Down } from '@styled-icons/evil/ArrowDown'

export const Arrow = styled(Down).attrs(({ direction, size }) => ({
  as: direction === `down` && Down,
  size,
}))`
  ${({ theme, show, size }) => `
  z-index: 2;
  background: ${theme.black};
  color: ${theme.white};
  border-radius: 50%;
  transition: 0.3s;
  position: fixed;
  top: 5em;
  opacity: ${show ? 1 : 0};
  visibility: ${show ? `visible` : `hidden`};
  :hover {
    transform: scale(1.15);
    background: ${theme.noBack};
  }
  right: calc(1.1vw - ${size} / 1);`}
`
