import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Global from '../components/Global'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Global>
      <HomePageTemplate
        title={frontmatter.title}
        cover={frontmatter.cover}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        heading={frontmatter.heading}
        description={frontmatter.description}
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
        cover
        title
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
