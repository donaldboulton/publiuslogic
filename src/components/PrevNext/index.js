import React from 'react'
import { Link } from 'gatsby'
import { Img, PreviousNext, Thumbnail } from './styles'

const PrevNext = ({ pageContext }) => {
  const { previous, next } = pageContext
  return (
    <>
      <PreviousNext>
        {previous && (
          <Link to={previous.node.fields.slug} rel='previous' css='margin-right: 1em;'>
            <h3 css='text-align: left;'>← Previous {previous.node.frontmatter.title}</h3>
            <Thumbnail>
              {previous.node.frontmatter.cover && <Img {...(previous.node.frontmatter.cover.sharp || previous.node.frontmatter.cover)} />}
              <h4>{previous.node.frontmatter.title}</h4>
            </Thumbnail>
          </Link>
        )}
        {next && (
          <Link to={next.node.fields.slug} rel='next' css='margin-left: auto;'>
            <h3 css='text-align: right;'>Next {next.node.frontmatter.title} →</h3>
            <Thumbnail>
              {next.node.frontmatter.cover && <Img {...(next.node.frontmatter.cover.sharp || next.node.frontmatter.cover)} />}
              <h4>{next.node.frontmatter.title}</h4>
            </Thumbnail>
          </Link>
        )}
      </PreviousNext>
    </>
  )
}

export default PrevNext

