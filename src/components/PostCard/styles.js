import styled, { css } from 'styled-components'
import { Grid } from '../styles/Grid'
import mediaQuery from '../../utils/mediaQuery'
import Img from 'gatsby-image'

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

export const Posts = styled.article`
  height: 100%;
  width: 100v%;
  display: grid;
  border-radius: ${props => props.theme.mediumBorderRadius};
  border: 1px solid ${props => props.theme.lightGray};
  box-shadow: 0 0 1em ${props => props.theme.lightGray};
  overflow: hidden;
  > :not(:first-child) {
    margin-left: 20px;
    margin-right: 20px;
  }
  > :last-child {
    margin-bottom: 0.5em;
  }
`

export const Cover = styled(Img).attrs(
  ({ fluid, src }) => !fluid && { as: (src && `img`) || `div` }
)`
  height: calc(10em + 4vh);
  width: 100%;
  object-fit: cover;
`

const inTitle = css`
  width: max-content;
  justify-content: left;
  max-width: 80vw;
  a {
    color: ${props => props.theme.white};
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
