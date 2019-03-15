import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import {HTMLContent} from '../components/Content'
import PrivacyPageTemplate from '../components/PrivacyPageTemplate'

const PrivacyPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <div>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <PrivacyPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </div>
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
        meta_title
        meta_description
      }
    }
  }
`
