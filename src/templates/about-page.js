import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import AboutPageTemplate from '../components/AboutPageTemplate'
import Global from '../components/Global'

const AboutPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark
  
  return (
    <Global title={frontmatter.title} location={frontmatter.location}>
      <Helmet>
        <title>{frontmatter.meta_title}</title>
        <meta name='description' content={frontmatter.meta_description} />
      </Helmet>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        credits={frontmatter.credits}
        location={frontmatter.location}
        caption={frontmatter.caption}
        content={data.html}
      />      
    </Global>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        caption
        credits
        location
        meta_title
        meta_description
      }
    }
  }
`
