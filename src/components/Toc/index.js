import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import { TocTitle, TocDiv } from '../styles/ArticleStyles'

const Toc = () => (
  <StaticQuery
    query={graphql`
      query  {
        allMarkdownRemark {
          edges {
            node {
              html
              tableOfContents(
                pathToSlugField: "frontmatter.path"
                heading: "only show toc from this heading onwards"
                maxDepth: 2
              )
              frontmatter {
                path
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <TocDiv>
        <nav>
          <Link
            to={data.heading}
          >
            <TocTitle>
              {data.heading}
            </TocTitle>
          </Link>
        </nav>
      </TocDiv>
    )}
  />
)

export default Toc
