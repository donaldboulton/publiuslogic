import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Img, PreviousNext, Thumbnail } from './styles'

const PrevNext = () => {
  const data = useStaticQuery(graphql`
  {
    PreviousNext
    allMarkdownRemark {
      edges {
        previous {
          htmlAst
          frontmatter {
            cover
            title
          }
        }
        next {
          htmlAst
          frontmatter {
            cover
            title
          }
        }
      }
    }
    allSitePage {
      edges {
        node {
          id
        }
      }
    }
  }
`)

  return
<>
  <PreviousNext>
    {prev && (
      <Link to={slugPrefix + prev.post.slug} rel='prev' css='margin-right: 1em;'>
        <h3 css='text-align: left;'>← Previous {label}</h3>
        <Thumbnail>
          {prev.post.cover && <Img {...(prev.post.cover.sharp || prev.post.cover)} />}
          <h4>{prev.post.title}</h4>
        </Thumbnail>
      </Link>
    )}
    {next && (
      <Link to={slugPrefix + next.post.slug} rel='next' css='margin-left: auto;'>
        <h3 css='text-align: right;'>Next {label} →</h3>
        <Thumbnail>
          {next.post.cover && <Img {...(next.post.cover.sharp || next.post.cover)} />}
          <h4>{next.post.title}</h4>
        </Thumbnail>
      </Link>
    )}
  </PreviousNext>
  </>
}

export default PrevNext

PrevNext.propTypes = {
  label: PropTypes.string.isRequired,
}


const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      __typename
      allMarkdownRemark {
        edges {
          previous {
            htmlAst
            frontmatter {
              cover
              title
            }
          }
          next {
            htmlAst
            frontmatter {
              cover
              title
            }
          }
        }
      }
      allSitePage {
        edges {
          node {
            id
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default ComponentName