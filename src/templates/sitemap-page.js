import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SiteMapPageTemplate from '../components/SiteMapPageTemplate'
import Global from '../components/Global'

const SiteMapPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Global pageTitle={frontmatter.title}>
      <SiteMapPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        cover={frontmatter.cover}
        description={frontmatter.meta_description}
        pricing={frontmatter.pricing}
      />
    </Global>
  )
}

SiteMapPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default SiteMapPage

export const sitemapPageQuery = graphql`
  query SiteMapPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        cover      
        meta_title
        meta_description
      }
    }
  }
`
