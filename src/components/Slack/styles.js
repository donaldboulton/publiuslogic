import styled from 'styled-components'
import mediaQuery from '../../utils/mediaQuery'
import { Slack } from '@styled-icons/fa-brands/Slack'

export const SlackDiv = styled.div`
  grid-column-start: content-start;
  grid-column-end: toc-end;
  padding: 1vmin;
  height: max-content;
  max-height: 85vh;
  border-radius: 4px;
  z-index: 3;
  line-height: 2em;
  margin: .2em;
  min-width: 20em;
  width: 165px;
  overscroll-behavior: none;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
  border: thin ${props => props.theme.black};
  overflow-x: hidden;
  overflow-y: hidden;
  ${mediaQuery.minPhablet} {
    font-size: 0.85em;
    transition: 0.3s;
  }
  ${mediaQuery.minLaptop} {
    display: none;
  }
`

export const SlackTitle = styled.h3`
  margin: 0.2em;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: auto auto 1fr;
  color: ${props => props.theme.white}; 
  border-bottom: thin white;
`

export const SlackIcon = styled(Slack)`
  font-size: 1.1em;
  width: 1.1em;
  height: 1.1em;
  margin-right: 0.2em;
  color: ${props => props.theme.white};
`