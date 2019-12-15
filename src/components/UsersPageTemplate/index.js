import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'

const UsersPageTemplate = ({ title, cover, canonical, meta_title, meta_description, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <>
      <section className='section'>
        <div className='container content'>
          <div className='columns is-10 is-offset-1'>
            <div className='column'>
              <div>
                <PageContent className='content' content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

UsersPageTemplate.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.image,
  canonical: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default UsersPageTemplate
