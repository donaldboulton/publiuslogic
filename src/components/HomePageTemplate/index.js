import React from 'react'
import Offerings from '../Offerings'
import { Link } from 'gatsby'
import Testimonials from '../Testimonials'
import StyledBackgroundSection from './image'
import PropTypes from 'prop-types'

const HomePageTemplate = ({
  title,
  cover,
  path,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div>
    <StyledBackgroundSection className='hero cover-container'>
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
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  <h3 className='has-text-weight-semibold is-size-2'>
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
                <Offerings gridItems={offerings.blurbs} />
                <section className='section'>
                  <div className='columns is-multiline is-10 is-offset-1'>
                    <div>
                      <h2 className='has-text-weight-semibold is-size-2'>Check our our Tutorials below</h2>
                    </div>
                    <div className='is-parent column is-6'>
                      <article className='is-child'>
                        <Link href='/blog/gatsby-github-comments-utterances'>
                          <figure className='image is-2by1'>
                            <img src='../../../images/utterances.jpg' alt='Gatsby GitHub Comments Utterances' />
                          </figure>
                        </Link>
                        <p>
                          <Link className='is-size-4' href='/blog/gatsby-github-comments-utterances'>Gatsby Comments Utterances</Link>
                        </p>
                        <p>
                          <span className='subtitle is-size-5'>
                            <small>April 16, 2019</small>
                          </span>
                        </p>
                        <p>
                          React withUtterances  Repo Why use Utterances Taken From: bhnywl.com Lets say all your users are developers and already have a GitHub account so they don’t need to sign up for yet another 3rd party service like Disqus (which will also track their every move through the web 😈)
                          Unlike Staticman GitHub Issues are truly dynamic so new comments will show without having to wait for your site to rebuild…
                        </p>
                        <br />
                        <p>
                          <Link className='button is-small' href='/blog/gatsby-github-comments-utterances'>Keep Reading →</Link>
                        </p>
                      </article>
                    </div>
                    <div className='is-parent column is-6'>
                      <article className='is-child'>
                        <Link href='/blog/modali-hooks-modal/'>
                          <figure className='image is-2by1'>
                            <img src='../../../images/modali-logo.jpg' alt='Modali Hooks Modals' />
                          </figure>
                        </Link>
                        <p>
                          <Link className='is-size-4' href='/blog/modali-hooks-modal'>Modali Hooks Modal</Link>
                        </p>
                        <p>
                          <span className='subtitle is-size-5'>
                            <small>April 21, 2019</small>
                          </span>
                        </p>
                        <p>
                          You can read about how Modali built at Upmostly. My Modali Modal can be seen further down in the page in Subscribe section email me icon on the Right. Which brings up the modal with a Netlify Posted, React Hooks email form using hooks for validation. Posting to Netlify - lambda functions to slack for instant notifications and a email to me. React Hooks Email form and validation is built with the help from...
                        </p>
                        <br />
                        <p>
                          <Link className='button is-small' href='/blog/modali-hooks-modal'>Keep Reading →</Link>
                        </p>
                      </article>
                    </div>
                  </div>
                </section>
                <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <Testimonials testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.image,
  meta_title: PropTypes.string,
  path: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
}

export default HomePageTemplate
