import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import ContactPageTemplate from '../components/ContactPageTemplate'
import Global from '../components/Global'

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Global pageTitle={frontmatter.title}>
      <Helmet>
        <title>{frontmatter.meta_title}</title>
        <meta name='description' content={frontmatter.meta_description} />
        <meta name='keywords' content={frontmatter.tags} />
        <meta name='image' content={frontmatter.cover} />
        <meta name='url' content={frontmatter.canonical} />
      </Helmet>
      <ContactPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        cover={frontmatter.cover}
        meta_title={frontmatter.meta_title}
        description={frontmatter.meta_description}
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
        cover
        canonical
        subtitle
        meta_title
        meta_description
        heading
      }
    }
  }
`
