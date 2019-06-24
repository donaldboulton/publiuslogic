import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Content from '../Content'
import Cloudinary from '../Cloudinary'
import UploadWidget from '../Cloudinary/UploadWidget'
import PropTypes from 'prop-types'
import { media } from '../Hero/style'

const SectionPageTitle = styled.h2`
  font-size: 2em;
  margin: 0.67em 0;
  ${media.xs`
    font-size:1.5em;
  `}
`
const PhotosPageTemplate = ({ data, cover, title, meta_title, meta_description, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <div className='hero'>
        <img className='full-width-image' src={cover} alt={title} />
      </div>
      <section className='section section--gradient'>
        <SectionPageTitle>My Cats</SectionPageTitle>
        <div className='container'>
          <div className='is-10 is-offset-1'>
            <div>
              <Cloudinary />
            </div>
            <div><UploadWidget /></div>
            <div>
              <div className='container'>
                <PageContent className='content' content={content} />
              </div>
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
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default PhotosPageTemplate
