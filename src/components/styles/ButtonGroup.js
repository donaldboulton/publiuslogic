import styled from 'styled-components'

export const ButtonGroup = styled.div`
  margin: auto;
  border-radius: ${props => props.theme.mediumBorderRadius};
  overflow: hidden;
  float: left;
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
      background: transparent;
      box-shadow: inset 0 0 0.3em black;
    }
    :not(:last-child) {
      border-right: none; /* Prevent double borders */
    }
    :after {
      content: "";
      clear: both;
      display: table;
    }
  }
`
