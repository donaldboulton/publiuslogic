import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { TocTitle, TocLink, TocDiv } from '../styles/ArticleStyles'

const TableOfContents = () => {
  const data = useStaticQuery(graphql`
    query TableOfContentsQuery {
      allMarkdownRemark {
        nodes {
          headings(depth: h6) {
            depth
            value
          }
        }
      }
    }
  `)

  const { depth, value } = data.headings

  return (
    <>
      <TocDiv>
        <nav>
          <TocLink
            key={depth}
            to={value}
          >
            <TocTitle>
              {value}
            </TocTitle>
          </TocLink>
        </nav>
      </TocDiv>
    </>
  )
}

export default TableOfContents

