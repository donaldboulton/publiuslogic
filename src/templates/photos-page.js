import React from 'react'
import rehypeReact from 'rehype-react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PhotosPageTemplate from '../components/PhotosPageTemplate'
import Global from '../components/Global'
import Gallery from '../components/Gallery'

const PhotosPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { 'photo-gallery': Gallery },
  }).Compiler

  return (
    <Global pageTitle={frontmatter.title}>
      <div dangerouslySetInnerHTML={renderAst(data.htmlAst)} />
      <PhotosPageTemplate
        title={frontmatter.title}
        cover={frontmatter.cover}
        subtitle={frontmatter.subtitle}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
      />
    </Global>
  )
}

PhotosPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PhotosPage

export const photosPageQuery = graphql`
  query PhotosPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      htmlAst
      fields {
        slug
      } 
      frontmatter {
        title
        cover
        meta_title
        meta_description
      }
    }    
  }
`
