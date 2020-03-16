import styled from 'styled-components'

export const ButtonGroup = styled.div`
  margin-top: 2em;
  border-radius: ${props => props.theme.smallBorderRadius};
  padding: calc(1.5em - 1px) 1.5em;
  overflow: hidden; 
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  flex-direction: row;
  flex-wrap: nowrap;
  button {
    font-size: 1.3em;
    border: none;
    outline: none;
    padding: calc(1.5em - 1px) 1.5em;
    background: ${props => props.theme.links};
    color: white;
    display: inline-block;
    width: max-content;
    font-size: ${props => props.size};
    border-radius: ${props => props.theme.smallBorderRadius};
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
