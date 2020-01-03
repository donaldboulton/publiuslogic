import React from 'react'
import Content from '../Content'
import Cloudinary from '../Cloudinary'
import UploadWidget from '../Cloudinary/UploadWidget'
import PropTypes from 'prop-types'

const PhotosPageTemplate = ({ data, path, cover, title, meta_title, meta_description, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <div>
                <div className='column container'>
                  <PageContent className='content' content={content} />
                </div>
                <section className='section'>
                  <div className='column is-10 is-offset-1'>
                    <Cloudinary />
                  </div>
                  <div>
                    <UploadWidget />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

PhotosPageTemplate.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.image,
  path: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default PhotosPageTemplate
