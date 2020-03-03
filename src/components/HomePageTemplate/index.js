import React from 'react'
import Testimonials from '../Testimonials'
import StyledBackgroundSection from './image'
import PropTypes from 'prop-types'
import Bio from '../Bio'
import { PageBody } from '../styles/PageBody'
import { Styledh1 } from '../styles/ArticleStyles'
import './styles.sass'

const HomePageTemplate = ({
  title,
  cover,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div>
    <StyledBackgroundSection className='post-cover cover-container'>
      <div
        style={{
          height: `400px`,
          width: `100vw`,
          display: `flex`,
          placeContent: `start`,
        }}
      >
        <div
          className='hero-body'
          style={{
            placeSelf: `center`,
            textAlign: `center`,
            height: `50vh`,
            maxWidth: 1260,
            padding: `0px 1.0875rem 1.45rem`,
            marginTop: `10rem`,
          }}
        >
          <div className='overlay'>PubliusLogic</div>
        </div>
      </div>
    </StyledBackgroundSection>
    <PageBody as='div'>
      <div>
        <Styledh1>
          {heading}
        </Styledh1>
        <p>{description}</p>
      </div>
      <Bio />
      <section className='grid-section'>
        <p className='chapter'>As Of <small>April 16, 2019</small></p>
        <h2 className='h-italic'><span>Publius Logic</span> <span>Logic Tech Site</span></h2>
        <img src='../../../img/home-back.svg' alt='' />
        <h2 className='h-color-white'>Js Screen matchMedia Grid, Styled Components Layout</h2>
        <div className='text-content'>
          <p>Built with ❤️ and Jamaican Blue Mountain Coffee. PubliusLogic is a collection of tutorials by the Publius on a lot of human subjects. Since I have never had anyone work on anything of mine I build my own website's and enjoy coding it a lot. The tutorials on this site are based on Gatsby, React, ReactHooks, Styled Components.</p>
          <p>Our name was taken from publications of 85 articles in mostly New York papers. The Publius was published anonymously as the - Federalist Papers.</p>
          <a href='/about' className='c-btn'>Read More</a>
        </div>
        <div className='tree' />
      </section>
      <section>
        <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
        <Testimonials testimonials={testimonials} />
      </section>
    </PageBody>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.image,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  testimonials: PropTypes.array,
}

export default HomePageTemplate
