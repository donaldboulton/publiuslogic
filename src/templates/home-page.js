import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Global from '../components/Global'
import Seo from '../components/SEO'
import config from '../../data/config'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Global pageTitle={frontmatter.title}>
      <Seo
        title={frontmatter.title}
        titleAlt={frontmatter.meta_title}
        description={frontmatter.meta_description}
        url={config.siteUrl}
        image={frontmatter.cover}
        keywords={frontmatter.tags}
        canonical={frontmatter.canonical}
      />
      <HomePageTemplate
        title={frontmatter.title}
        cover={frontmatter.cover}
        meta_title={frontmatter.meta_title}
        description={frontmatter.meta_description}
        heading={frontmatter.heading}
        offerings={frontmatter.offerings}
        testimonials={frontmatter.testimonials}
      />
    </Global>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {        
        title
        cover
        canonical
        tags
        meta_title
        meta_description
        heading
        description
        offerings {
          blurbs {
            image
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
