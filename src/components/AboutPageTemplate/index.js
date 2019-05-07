import React, { Fragment } from 'react'
import Content from '../Content'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import FeedbackWidget from '../feedback-widget/feedback-widget'
import PageTitle from '../PageTitle'

const AboutPageTemplate = ({ img, title, caption, credits, location, content, contentComponent, children, backdrop, className, fillToBottom }) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={title} />
      </Helmet>
      <Fragment>
        <PageTitle img={img} caption={caption} path={location}>
          <h1>{title}</h1>
        </PageTitle>
      </Fragment>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns is-10 is-offset-1'>
            <div className='column'>
              <div>
                <PageContent className='content' content={content} />
              </div>
              <h2>My Stack</h2>
            </div>
          </div>
        </div>
        <FeedbackWidget />
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string,
  credits: PropTypes.string,
  location: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate

export const query = graphql`
  {
    img: file(name: { eq: "about" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`