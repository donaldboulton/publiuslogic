import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'

const PrivacyPageTemplate = ({ title, cover, path, meta_description, meta_title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <PageContent className='content' content={content} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

PrivacyPageTemplate.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.image,
  path: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default PrivacyPageTemplate
