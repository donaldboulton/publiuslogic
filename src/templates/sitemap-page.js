import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import SiteMapPageTemplate from '../components/SiteMapPageTemplate'
import Global from '../components/Global'

const SiteMapPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Global pageTitle={post.frontmatter.title}>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
        <meta name='keywords' content={post.frontmatter.tags} />
        <meta name='image' content={post.frontmatter.cover} />
        <meta name='robots' content='index, follow' />
      </Helmet>
      <SiteMapPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        cover={post.frontmatter.cover}
        content={post.html}
      />      
    </Global>
  )
}

SiteMapPage.propTypes = {
  data: PropTypes.object.isRequired,
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
