import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ContactPageTemplate from '../components/ContactPageTemplate'
import Global from '../components/Global'

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Global pageTitle={frontmatter.title}>
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <ContactPageTemplate
                title={frontmatter.title}
                cover={frontmatter.cover}
                subtitle={frontmatter.subtitle}
                meta_title={frontmatter.meta_title}
                meta_description={frontmatter.meta_description}
              />
              <hr />
            </div>
          </div>
        </div>
      </section>
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
