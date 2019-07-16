import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const SiteMapPageTemplate = ({ title, cover, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='hero hero-blog-cover'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                      Publius Logic Site Map
                  </h1>
                    ✨ Listing all Pages and Posts.
                  <p>
                        For Refinements see <Link className='is-warning' to={`/categories/`}>Categories</Link> or <Link className='is-warning' to={`/tags/`}>Tags</Link>
                  </p>
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

SiteMapPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  cover: PropTypes.image,
  contentComponent: PropTypes.func,
}

export default SiteMapPageTemplate
