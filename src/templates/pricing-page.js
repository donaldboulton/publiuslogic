import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PricingPageTemplate from '../components/PricingPageTemplate'
import Global from '../components/Global'

const PricingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Global pageTitle={frontmatter.title}>
      <PricingPageTemplate
        title={frontmatter.title}
        cover={frontmatter.cover}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        pricing={frontmatter.pricing}
      />
    </Global>
  )
}

PricingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PricingPage

export const pricingPageQuery = graphql`
  query PricingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        cover
        meta_title
        meta_description
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
