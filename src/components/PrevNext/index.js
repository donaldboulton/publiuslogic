import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Img, PreviousNext, Thumbnail } from './styles'
class PrevNext extends React.Component {
  render () {
    const { previous, next, label, slugPrefix = `` } = this.props
    return (
      <StaticQuery
        query={graphql`
      {
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
                title
                cover
              }
            }
          }
        }
      }
    `}
        render={data => (
          <PreviousNext>
            {previous && (
              <Link to={slugPrefix + data.previous.fields.slug} rel='prev' css='margin-right: 1em;'>
                <h3 css='text-align: left;'>← Previous {label}</h3>
                <Thumbnail>
                  {data.previous.frontmatter.cover && (
                    <Img {...previous.data.frontmatter.cover.sharp || previous.data.frontmatter.cover} />
                  )}
                  <h4>{data.previous.frontmatter.title}</h4>
                </Thumbnail>
              </Link>
            )}
            {data.next && (
              <Link to={slugPrefix + data.next.fields.slug} rel='next' css='margin-left: auto;'>
                <h3 css='text-align: right;'>Next {label} →</h3>
                <Thumbnail>
                  {next.cover && (
                    <Img {...next.data.frontmatter.cover.sharp || next.data.frontmatter.cover} />
                  )}
                  <h4>{next.data.frontmatter.title}</h4>
                </Thumbnail>
              </Link>
            )}
          </PreviousNext>
        )}
      />
    )
  }
}

PrevNext.propTypes = {
  label: PropTypes.string.isRequired,
}

export default PrevNext
