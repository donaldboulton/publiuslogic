import styled from 'styled-components'

export const ButtonGroup = styled.div`
  margin: 2em auto;
  border-radius: ${props => props.theme.mediumBorderRadius};
  overflow: hidden;
  button {
    font-size: 1.3em;
    border: none;
    outline: none;
    background: ${props => props.theme.links};
    color: white;
    padding: 0.2em 0.6em;
    width: max-content;
    font-size: ${props => props.size};
    -webkit-transition: .4s ease-in-out 3s;
    transition: .4s ease-in-out 3s;
    :hover {
      background: ${props => props.theme.hoveredLinks};
    }
    &.active {
      background: ${props => props.theme.activeLinks};
      box-shadow: inset 0 0 0.3em black;
    }
  }
`
