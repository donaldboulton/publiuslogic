import React from 'react'
import PropTypes from 'prop-types'
import { rhythm } from '../../utils/typography'

const Testimonials = ({ testimonials }) => (
  <div
    style={{
      marginBottom: rhythm(1),
    }}
  >
    {testimonials.map((testimonial, id) => (
      <article className='message' key={id}>
        <div className='message-body'>
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials
