import styled, { css } from 'styled-components'

const inTitle = css`
  margin: 1.3em auto;
  width: max-content;
  justify-content: center;
  max-width: 80vw;
  a {
    color: ${props => props.theme.lightGreen};
  }
`

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8em;
  margin: 0.5em 0;
  > * {
    display: flex;
    align-items: center;
  }
  > :not(:last-child) {
    margin-right: 1em;
  }
  ${props => props.inTitle && inTitle};
`

