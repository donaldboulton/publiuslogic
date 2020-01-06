import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  display: flex;
  margin: 6rem auto 0 auto;
  a {
    color: ${props => props.theme.white};
    display: flex;
    align-items: center;
  }
  justify-items: center;
`

const Prev = styled.div`
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => props.theme.white};
  }
`

const Next = styled.div`
  margin-left: auto;
  text-align: right;
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => props.theme.white};
  }
`

const PrevNext = ({ post, next, prev, slug }) => (
  <Wrapper>
    {prev && (
      <Prev>
        <span>'❤️' Previous</span>
        <Link to={prev.fields.slug}>{prev.frontmatter.title}</Link>
      </Prev>
    )}

    {next && (
      <Next>
        <span>Next 💕</span>
        <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
      </Next>
    )}
  </Wrapper>
)

export default PrevNext

PrevNext.propTypes = {
  slug: PropTypes.string.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
}

PrevNext.defaultProps = {
  next: null,
  prev: null,
}
