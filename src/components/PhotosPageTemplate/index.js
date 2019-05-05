import React from 'react'
import Helmet from 'react-helmet'
import StyledBackgroundSection from './image'
import PropTypes from 'prop-types'

const PhotosPageTemplate = ({
  title,
  cover,
  meta_title,
  meta_description,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <StyledBackgroundSection className='hero'>
      <div
        style={{
          height: `400px`,
          width: `100%`,
          display: `flex`,
          placeContent: `start`,
        }}
      >
        <div
          style={{
            placeSelf: `center`,
            textAlign: `center`,
            color: `#ccc`,
            height: `50vh`,
            maxWidth: 1260,
            padding: `0px 1.0875rem 1.45rem`,
            marginTop: `-5rem`,
          }}
        >
          <h1>{title}</h1>
          <small>{meta_title}</small>
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
                    {title}
                  </h3>
                  <p>{meta_title}</p>
                </div>
                <section className='section'>
                  <div className='columns is-multiline is-10 is-offset-1'>
                    <div>
                      <h2 className='has-text-weight-semibold is-size-2'>Check our our Tutorials below</h2>
                    </div>
                    <div className='is-parent column is-6'>
                      <article className='is-child'>
                        <a href='/blog/gatsby-github-comments-utterances/'>
                          <figure className='image is-2by1'>
                            <img src='/img/gatsby+react+utterances+home.jpg' alt='Gatsby GitHub Comments Utterances' />
                          </figure>
                        </a>
                        <p>
                          <a className='title has-text-primary is-size-4' href='/blog/gatsby-github-comments-utterances/'>Gatsby Comments Utterances</a>
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
                          <a className='button is-small' href='/blog/gatsby-github-comments-utterances/'>Keep Reading →</a>
                        </p>
                      </article>
                    </div>
                    <div className='is-parent column is-6'>
                      <article className='is-child'>
                        <a href='/blog/modali-hooks-modal/'>
                          <figure className='image is-2by1'>
                            <img src='/img/modali-logo.png' alt='Modali Hooks Modals' />
                          </figure>
                        </a>
                        <p>
                          <a className='title has-text-primary is-size-4' href='/blog/modali-hooks-modal/'>Modali Hooks Modal</a>
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
                          <a className='button is-small' href='/blog/modali-hooks-modal/'>Keep Reading →</a>
                        </p>
                      </article>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

PhotosPageTemplate.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.image,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,

}

export default PhotosPageTemplate
