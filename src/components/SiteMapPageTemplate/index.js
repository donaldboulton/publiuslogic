import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'

const SiteMapPageTemplate = ({ title, cover, canonical, meta_title, meta_description, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <PageContent className='content' content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

SiteMapPageTemplate.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.image,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default SiteMapPageTemplate
