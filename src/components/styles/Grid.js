import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => props.minWidth || `5em`}, 1fr)
  );
  grid-gap: ${props => props.gap || `calc(1em + 1vw)`};
  text-align: ${props => props.align};
  max-width: ${props => props.children.length === 1 && props.maxWidth};
  grid-auto-rows: ${props => props.height};
`

export const Cell = styled.div`
  border-radius: 6px;
  border: thin ${props => props.theme.black};
  width: 250px;
  height: 170px;
  transition: 0.3s;
  height: 100%;
  :hover {
    transform: scale(1.05);
  }
`
