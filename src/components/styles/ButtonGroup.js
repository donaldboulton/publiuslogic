import styled from 'styled-components'

export const ButtonGroup = styled.div`
  margin-top: 2em;
  padding: 1.5em;
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
    padding: 1.2em;
    color: ${props => props.theme.textColor};
    display: inline-block;
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
    :first-child {
      border-radius: 4px 0 0 4px;
      ${props => props.theme.linksPrev};
    }
    :last-child {
      border-radius: 0 4px 4px 0;
      ${props => props.theme.linksNext};
      margin-left: -1px;
    }
    :only-child {
      border-radius: 4px;
      background: ${props => props.theme.links};
      margin-left: 0;
    }
  }
`
