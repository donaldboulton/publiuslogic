import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

export { Img }

export const Cover = styled(Img).attrs(
  ({ fluid, src }) => !fluid && { as: (src && `img`) || `div` }
)`
  margin: 1em auto;
  padding: 0.6em 2em;
  box-shadow: black 0px 0px 1em;
  border-radius: 0.5em;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  border-image: initial;
  overflow: hidden;
  width: 390px;
  transition: 0.3s;
  height: 100%;
  :hover {
    transform: scale(1.05);
  }
`

const inTitle = css`
  width: max-content;
  justify-content: left;
  max-width: 80vw;
  a {
    color: white;
  }
`
export const Category = styled.span`
  flex: end;
  justify-content: right;
`

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8em;
  margin: 0.5em 0;
  > * {
    display: flex;
    align-items: justify;
  }
  > :not(:last-child) {
    margin-right: 1em;
  }
  ${props => props.inTitle && inTitle};
`
