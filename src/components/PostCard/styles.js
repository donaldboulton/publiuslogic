import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { Grid } from '../styles/Grid'
import mediaQuery from '../../utils/mediaQuery'

export { Img }

export const Cover = styled(Img).attrs(
  ({ fluid, src }) => !fluid && { as: (src && `img`) || `div` }
)`
  margin-bottom: 1em;
  border-radius: .05em .05em 0 0;
  border: thin black;  
  width: 100%;
  object-fit: cover;
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
const asRow = css`
  grid-column: 2/-2;
  grid-auto-flow: column;
  overflow: scroll;
  grid-auto-columns: 18em;
  padding: 1em;
`

const inBlog = css`
  ${mediaQuery.maxPhablet} {
    grid-column: 3;
    justify-self: center;
  }
  ${mediaQuery.minPhablet} {
    grid-column: 2/-3;
  }
`

export const PostGrid = styled(Grid)`
  height: max-content;
  ${props => props.asRow && asRow};
  ${props => props.inBlog && inBlog};
`

export const Post = styled.div`
  box-shadow: black 0px 0px 1em;
  border-radius: 0.5em;
  border: thin black;
  border-image: initial;
`
export const PostContent = styled.div`
  margin: auto 1em auto 1em;
`