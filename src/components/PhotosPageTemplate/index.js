import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Content from '../Content'
import PropTypes from 'prop-types'
import SlideShow from '../SlideShow'

import { media } from '../Hero/style'

const SectionTitle = styled.h2`
  font-size: 2em;
  margin: 0.67em 0;
  ${ media.xs`
    font-size:1.5em;
  `}
`
const PhotosPageTemplate = ({ data, title, cover, meta_title, meta_description, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>        
        <meta name='description' content={meta_description} />
      </Helmet>
      <div className='hero'>
        <SlideShow />
      </div>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns is-10 is-offset-1'>
            <div className='column'>
              <SectionTitle>My Cats</SectionTitle>
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

PhotosPageTemplate.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.image,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default PhotosPageTemplate
