import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Img, PreviousNext, Thumbnail } from './styles'
class PrevNext extends React.Component {
  render () {
    const { previous, next, label, slugPrefix = `` } = this.props
    return (
      <>
        {this.props.allMarkdownRemark.edges && (
          <PreviousNext>
            {previous && (
              <Link to={slugPrefix + previous.frontmatter.path} rel='prev' css='margin-right: 1em;'>
                <h3 css='text-align: left;'>← Previous {label}</h3>
                <Thumbnail>
                  {previous.frontmatter.cover && (
                    <Img {...previous.frontmatter.cover.sharp || previous.frontmatter.cover} />
                  )}
                  <h4>{previous.frontmatter.title}</h4>
                </Thumbnail>
              </Link>
            )}
            {next && (
              <Link to={slugPrefix + next.frontmatter.path} rel='next' css='margin-left: auto;'>
                <h3 css='text-align: right;'>Next {label} →</h3>
                <Thumbnail>
                  {next.cover && (
                    <Img {...next.frontmatter.cover.sharp || next.frontmatter.cover} />
                  )}
                  <h4>{next.frontmatter.title}</h4>
                </Thumbnail>
              </Link>
            )}
          </PreviousNext>
        )}
      </>
    )
  }
}
export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
          edges {
            next {
              frontmatter {
                title
                path
                cover
              }
            }
            previous {
              frontmatter {
                title
                path
                cover
              }
            }
          }
        }
      }
    `}
    render={data => (
      <PrevNext next={data.next} prev={data.previous} />
    )}
  />
)
PrevNext.propTypes = {
  label: PropTypes.string.isRequired,
}

