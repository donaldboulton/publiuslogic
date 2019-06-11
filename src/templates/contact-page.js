import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ContactPageTemplate from '../components/ContactPageTemplate'
import Global from '../components/Global'

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Global pageTitle={frontmatter.title}>
      <ContactPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
      />
    </Global>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
      }
    }
  }
`
