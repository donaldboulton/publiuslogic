import styled from 'styled-components'

export const ButtonLink = styled.a`
  background: ${props => props.theme.buttonBg};
  color: white;
  border-radius: 0.4em;
  padding: 0.3em 0.6em;
  transition: 0.3s;
  display: flex;
  align-items: center;
  margin: 0 auto;
  :hover {
    color: white;
    background: ${props => props.theme.hoveredButtonBg};
  }
`

export const ButtonGroup = styled.div`
  border-radius: ${props => props.theme.mediumBorderRadius};
  overflow: hidden;
  button {
    border: none;
    outline: none;
    color: white;
    padding: 0.2em 0.6em;
    background: ${props => props.theme.links};
    width: max-content;
    font-size: ${props => props.size};
    transition: 0.3s;
    &.active {
      background: ${props => props.theme.activeLinks};
      box-shadow: inset 0 0 0.3em black;
    }
  }
`
