import styled from 'styled-components'

export const AddsDiv = styled.div`
display: grid;
grid-gap: 1em;
grid-column: -3/2;
height: max-content;
max-height: 85vh;
border-radius: 4px;
border: 1px solid ${props => props.theme.textColor};
z-index: 3;
line-height: 2em;
right: 1em;
margin: .2em;
min-width: 20em;
overscroll-behavior: none;
`
