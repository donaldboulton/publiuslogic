import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'

const PrivacyPageTemplate = ({ title, cover, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <div className='hero'>
        <img className='full-width-image' src={cover} alt={title} />
      </div>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <PageContent className='content' content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

PrivacyPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.image,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default PrivacyPageTemplate
