import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import FeedbackWidget from '../feedback-widget/feedback-widget'

const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='hero is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    {title}
                    <p>
                      <h2>Authors </h2>
                      Publius Logic
                    </p>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns is-10 is-offset-1'>
            <div className='column is-half'>
              <div>
                <PageContent className='content' content={content} />
              </div>
            </div>
            <div className='column'>
              <div>
                Nothing
              </div>
            </div>
          </div>
        </div>
        <FeedbackWidget />
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
