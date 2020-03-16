import styled from 'styled-components'
import mediaQuery from '../../utils/mediaQuery'
import { Slack } from '@styled-icons/fa-brands/Slack'

export const Wrapper = styled.div`
  padding: 1vmin;
  height: max-content;
  display: grid;
  grid-column: 2 / span 3;
  overscroll-behavior: none;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
  border: 1px solid ${props => props.theme.black};
  overflow-x: hidden;
  overflow-y: hidden;
  ${mediaQuery.minPhablet} {
    font-size: 0.85em;
    transition: 0.3s;
  }`

export const SlackTitle = styled.h3`
  margin: 0.2em;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: auto auto 1fr;
  color: ${props => props.theme.white}; 
  border-bottom: thin ${props => props.theme.white};
`

export const SlackIcon = styled(Slack)`
  font-size: 1.1em;
  width: 1.1em;
  height: 1.1em;
  margin-right: 0.2em;
  color: ${props => props.theme.white};
`