/* eslint-disable no-unused-vars */
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Img, PreviousNext, Thumbnail } from './styles'

const PrevNext = ({ previous, next, pageContext, slugPrefix = `` }) => (
  <PreviousNext>
    {previous && (
      <Link to={slugPrefix + previous.fields.slug} rel='previous' key={previous.pageContext} css='margin-right: 1em;'>
        <h3 css='text-align: left;'>← Previous {previous.frontmatter.title}</h3>
        <Thumbnail>
          {previous.frontmatter.cover && <Img {...(previous.frontmatter.cover.sharp || previous.frontmatter.cover)} />}
          <h4>{previous.frontmatter.title}</h4>
        </Thumbnail>
      </Link>
    )}
    {next && (
      <Link to={slugPrefix + next.fields.slug} rel='next' key={next.pageContext} css='margin-left: auto;'>
        <h3 css='text-align: right;'>Next {next.frontmatter.title} →</h3>
        <Thumbnail>
          {next.frontmatter.cover && <Img {...(next.frontmatter.cover.sharp || next.frontmatter.cover)} />}
          <h4>{next.frontmatter.title}</h4>
        </Thumbnail>
      </Link>
    )}
  </PreviousNext>
)

export default PrevNext

PrevNext.propTypes = {
  label: PropTypes.string.isRequired,
}