import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { CommentCount } from 'disqus-react'
import { Meta, TagList } from './styles'
import { Calendar } from 'styled-icons/octicons/Calendar'
import { Timer } from 'styled-icons/material/Timer'
import { Comments } from 'styled-icons/fa-solid/Comments'
import _ from 'lodash'
import config from '../../../data/config'

require('moment')

const PostMeta = ({ title, slug, date, timeToRead, tags, inTitle = false }) => (
  <Meta inTitle={inTitle}>
    <div className='post-info'>
      <span>
        <Calendar size='1.2em' />
        <Timer size='1.2em' />
        {timeToRead} min
        <Comments size='1.2em' />
        <Link to={`/blog` + slug + `#disqus_thread`}>
          <CommentCount shortname={config.disqusShortname} config={config.disqusConfig} />
        </Link>
      </span>
      <TagList tags={tags} />
    </div>
  </Meta>
)

export default PostMeta

PostMeta.propTypes = {
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  inTitle: PropTypes.bool,
}
