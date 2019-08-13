import React from 'react'
import Content from '../Content'
import Cloudinary from '../Cloudinary'
import UploadWidget from '../Cloudinary/UploadWidget'
import PropTypes from 'prop-types'

const PhotosPageTemplate = ({ data, canonical, cover, title, meta_title, meta_description, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='is-10 is-offset-1'>
            <div>
              <Cloudinary />
            </div>
            <div>
              <div className='container'>
                <PageContent className='content' content={content} />
              </div>
              <div><UploadWidget /></div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
