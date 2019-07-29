import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import { SitemapCrumbs } from 'gatsby-plugin-breadcrumb'

const PrivacyPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  const { pageContext } = this.props
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <div>
      <section className='hero hero-blog-cover'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    {title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <SitemapCrumbs crumbs={crumbs} crumbSeparator=' / ' />
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
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default PrivacyPageTemplate
