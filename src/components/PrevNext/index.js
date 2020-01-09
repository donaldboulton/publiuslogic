import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

const PrevNext = () => {
  const data = useStaticQuery(graphql`
      query PrevNextQuery {
        allMarkdownRemark {
          edges {
            next {
              fields {
                slug
              }
              frontmatter {
                title
                cover
              }
            }
            previous {
              fields {
                slug
              }
              frontmatter {
                cover
                title
              }
            }
          }
        }
      }
  `)

  const { next, previous } = data.allMarkdownRemark

  return (
    <>
      <div className='column is-10 is-offset-1'>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link className='a' to={previous.frontmatter.slug} rel='prev'>
               ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link className='a' to={next.frontmatter.slug} rel='next'>
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </div>
    </>
  )
}

export default PrevNext

