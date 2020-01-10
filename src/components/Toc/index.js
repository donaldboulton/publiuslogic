import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { TocTitle, TocLink, TocDiv } from '../styles/ArticleStyles'

const Toc = () => {
  const { data } = useStaticQuery(graphql`
    query Toc {
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

  return (
    <>
      <TocDiv>
        <nav>
          <TocLink
            key={data.headings.value}
            to={data.headings.value}
          >
            <TocTitle>
              {data.headings.value}
            </TocTitle>
          </TocLink>
        </nav>
      </TocDiv>
    </>
  )
}

export default Toc
