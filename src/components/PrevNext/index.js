import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const PrevNext = ({ next, prev }) => (
  <div className='column is-10 is-offset-1'>
    <span>
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
          {prev && (
            <div>
              <h3 css='text-align: left;'>← Previous</h3>
              <Link to={prev.fields.slug}>{prev.frontmatter.title}</Link>
            </div>
          )}
        </li>
        <li>
          {next && (
            <div>
              <h3 css='text-align: right;'>Next →</h3>
              <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
            </div>
          )}
        </li>
      </ul>
    </span>
  </div>

)

export default PrevNext

PrevNext.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
}

PrevNext.defaultProps = {
  next: null,
  prev: null,
}
