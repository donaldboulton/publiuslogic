import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import PrivacyPageTemplate from '../components/PrivacyPageTemplate'
import Global from '../components/Global'

const PrivacyPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Global>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <PrivacyPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        cover={post.frontmatter.cover}
        content={post.html}
      />
    </Global>
  )
}

PrivacyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PrivacyPage

export const privacyPageQuery = graphql`
  query PrivacyPage($id: String!) {
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
