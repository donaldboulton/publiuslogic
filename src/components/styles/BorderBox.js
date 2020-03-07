import styled from 'styled-components'

export const BorderBox = styled.div`
  margin: 1em auto;
  padding: 0.2em 0.5em;
  border: 1px solid ${props => props.theme.textColor};
  display: flex;
  width: max-content;
  border-radius: 0.3em;
`
