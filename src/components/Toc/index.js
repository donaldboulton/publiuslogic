import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import { TocTitle, TocDiv } from '../styles/ArticleStyles'

const Toc = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
            }             
            headings {
              depth
              value
            }
          }
        }
      }
    `}
    render={data => (
      <TocDiv>
        <nav>
          <Link
            to={data.headings}
          >
            <TocTitle>
              {data.headings}
            </TocTitle>
          </Link>
        </nav>
      </TocDiv>
    )}
  />
)

export default Toc
