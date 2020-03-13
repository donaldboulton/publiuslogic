import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Tag } from '@styled-icons/fa-solid/Tag'
import { Tags } from '@styled-icons/fa-solid/Tags'
import { Table } from '@styled-icons/boxicons-regular/Table'

export const Reviews = styled.div`
  font-size: 1rem;
  color: silver;
`
export const PreviousNext = styled.div`
  display: flex;
`
export const Styledh1 = styled.h1`
  display: inline-block;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
}
`
export const Rating = styled.div`
  font-size: 0.9em;
`
export const TableOfContents = styled.div`
  ul {
    textIndent: -1em hanging;
    outline: none;
  }
  li {
    margin-bottom: 1em;
  }
`
export const HomeStyledh1 = styled.h1`
  display: inline-block;
  margin-top: 2em;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  line-height: 2rem;
  z-index: 22;
  background-position: 50% 50%;
  text-align: center;
  background: radial-gradient(
    circle farthest-corner at center center,
    #8e0436,
    #d64000
  ) no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const PageTitle = styled.h2`
  margin: 0;
  padding-bottom: 0.5em;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: auto auto 1fr;
  color: #ffffff;
  border-bottom: 1px solid #fff;
  outline: none;
`
export const PageTocIcon = styled(Table)`
  width: 1em;
  margin-right: 0.2em;
  color: ${props => props.theme.white};
`
export const ArticleTocIcon = styled(Tags)`
  width: 0.9em;
  margin-right: 0.2em;
  color: ${props => props.theme.white};
`
export const Time = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.white};
`
export const Date = styled.span`
  font-size: 0.9em;
  color: ${props => props.theme.white};
`
export const GithubButtons = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`
export const Pagination = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
`
export const Meta = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
`

export const Category = styled.span`
  font-size: 0.9em;
  color: ${props => props.theme.white};
`
export const MetaPage = styled.div`
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
`
export const TagList = ({ tags }) => (
  <span>
    <Tags
      as={tags.length === 1 && Tag}
      css='margin-right: 0.5em; width: 1.1em; min-width: 1.1em;'
    />
    {tags.map((tag, index) => (
      <Fragment key={tag}>
        {index > 0 && `, `}
        {tag}
      </Fragment>
    ))}
  </span>
)
