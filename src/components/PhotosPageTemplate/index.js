import React from 'react'
import Content from '../Content'
import Cloudinary from '../Cloudinary'
import UploadWidget from '../Cloudinary/UploadWidget'
import PropTypes from 'prop-types'

const PhotosPageTemplate = ({ data, canonical, cover, title, meta_title, meta_description, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <div>
                <Cloudinary />
              </div>
              <div>
                <div className='column container'>
                  <PageContent className='content' content={content} />
                </div>
                <div><UploadWidget /></div>
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
  canonical: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default PhotosPageTemplate
