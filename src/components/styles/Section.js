import styled from 'styled-components'

export const Section = styled.div`
  text-align: left;
  > * {
    margin: auto;
    padding: 1.8rem 1.5rem;
    max-width: ${props => props.theme.maxWidth};
  }
`
