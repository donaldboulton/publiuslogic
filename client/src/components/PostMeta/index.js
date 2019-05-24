import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Meta } from './styles'
import { CommentCount } from 'disqus-react'
import { Calendar } from 'styled-icons/octicons/Calendar'
import { Timer } from 'styled-icons/material/Timer'
import _ from 'lodash'
import { disqusConfig } from '../../utils/misc'

require('moment')

const PostMeta = ({ title, slug, date, timeToRead, tags, inTitle = false }) => (
  <Meta inTitle={inTitle}>
    <div className='post-info'>
      <span>
        <Calendar size='1.2em' />
        {date}
        <Timer size='1.2em' />
        {timeToRead} min
      </span>
      <span>
        <Link to={`/blog` + slug + `#disqus_thread`}>
          <CommentCount {...disqusConfig({ slug, title })} />
        </Link>
      </span>
    </div>
  </Meta>
)

export default PostMeta

PostMeta.propTypes = {
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  inTitle: PropTypes.bool,
}
