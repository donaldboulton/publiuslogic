import styled from 'styled-components'
import { UserCircle } from '@styled-icons/fa-solid/UserCircle'
import mediaQuery from '../../utils/mediaQuery'

export const User = styled(UserCircle)`
  width: 1.2em;
  top: calc(1.3vh + 1.5em);
  pointer-events: none;
  color: white;
  z-index: 120;
`
