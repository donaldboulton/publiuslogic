import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PhotosPageTemplate from '../components/PhotosPageTemplate'
import Layout from '../components/Layout'

const PhotosPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PhotosPageTemplate
        title={frontmatter.title}
        cover={frontmatter.cover}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
      />
    </Layout>
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

export const pageQuery = graphql`
  query PhotosPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        cover
        title
        meta_title
        meta_description        
      }
    }
  }
`
