import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import Image from './image'
import Author from '../Author'

const AboutPageTemplate = ({ title, cover, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='hero'>
        <Image />        
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns is-10 is-offset-1'>
            <div className='column'>
              <div>
                <Author />
              </div>
              <div>
                <PageContent className='content' content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.image,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
