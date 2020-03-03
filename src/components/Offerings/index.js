import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Grid } from '../styles/Grid'
import mediaQuery from '../../utils/mediaQuery'

const asRow = css`
grid-column: 2/-2;
grid-auto-flow: column;
overflow: scroll;
grid-auto-columns: 18em;
padding: 1em;
`

const inBlog = css`
${mediaQuery.maxPhablet} {
  grid-column: 3;
  justify-self: center;
}
${mediaQuery.minPhablet} {
  grid-column: 2/-3;
}
`
const BlogGrid = styled(Grid)`
height: max-content;
${props => props.asRow && asRow};
${props => props.inBlog && inBlog};
`

const Offerings = ({ gridItems }) => (
  <BlogGrid>
    {gridItems.map(item => (
      <div key={item.image}>
        <section>
          <p>
            <img alt='Post Image' src={item.image} />
          </p>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </BlogGrid>
)

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
}

export default Offerings
