import React from 'react'
import github from './assets/img/GitHub-Mark-Light-64px.png'
import gatsby from './assets/img/gatsby.svg'
import logo from './assets/img/logo.png'
import webpack from './assets/img/ApolloReact-320.png'
import lambda from './assets/img/lambda.png'
import netlify from './assets/img/logomark.svg'
import config from '../../../_data/config'

const AboutSection = () => {
  return (
    <div className='columns'>
      <div className='column is-one-third'>
        <div className='card'>
          <div className='card-image'>
            <figure className='image is-4by3'>
              <a href='https://publiuslogic.com'>
                <img
                  src={logo}
                  alt='PubliusLogic'
                />
              </a>
            </figure>
          </div>
          <div className='card-content'>
            <div className='media'>
              <div className='media-left parent'>
                <figure className='image is-32x32'>
                  <a title='Github' href='https://github.com/donaldboulton/publiuslogic' target='_blank' rel='noopener noreferrer'>
                    <img
                      src={github}
                      alt='GitHub'
                    />
                  </a>
                </figure>
              </div>
              <div className='media-content'>
                <p className='title is-4 is-centered'>PubliusLogic</p>
              </div>
            </div>
            <div className='content'>
              GitHub Issues as Comments
              <br />
              <div><a target='_blank' href='https://github.com/donaldboulton/publiuslogic' rel='me noopener'>&nbsp;GitHub Repo</a></div>
              <div><a target='_blank' href='https://twitter.com/donboulton' rel='me noopener'>&nbsp;Twitter @publiuslogic</a></div>
              <br />
              <span>
                <p>
                  {config.copyright}
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='column'>
        <div className='card'>
          <div className='card-image'>
            <figure className='image is-4by3'>
              <a title='Gatsby' href='https://www.gatsbyjs.org/' target='_blank' rel='noopener noreferrer'>
                <img
                  src={gatsby}
                  alt='Gatsby'
                />
              </a>
            </figure>
          </div>
          <div className='card-content'>
            <div className='media'>
              <div className='media-left parent'>
                <figure className='image is-32x32'>
                  <img
                    src={webpack}
                    alt='Apollo React'
                  />
                </figure>
              </div>
              <div className='media-content'>
                <p className='title is-4 is-centered'>Gatsby Powered</p>
              </div>
            </div>
            <div className='content'>
                Gatsby is Smoking Fast & Easy
              <br />
              <div><a target='_blank' rel='noopener noreferrer' href='https://www.gatsbyjs.org/'>Framework Gatsby -v2.1</a></div>
              <div><a target='_blank' rel='noopener noreferrer' href='https://bulma.io/'>CSS from @bulma.io</a></div>
              <br />
              <span>Privacy<a href='https://publiuslogic.com'>&nbsp; - &nbsp;Terms & Conditions.</a></span>
            </div>
          </div>
        </div>
      </div>
      <div className='column'>
        <div className='card'>
          <div className='card-image'>
            <figure className='image is-4by3'>
              <a title='Netlify' href='https://netlify.com' target='_blank' rel='noopener noreferrer'>
                <img
                  src={netlify}
                  alt='Netlify'
                />
              </a>
            </figure>
          </div>
          <div className='card-content'>
            <div className='media'>
              <div className='media-left parent'>
                <figure className='image is-32x32'>
                  <img
                    src={lambda}
                    alt='Netlify Functions'
                  />
                </figure>
              </div>
              <div className='media-content'>
                <p className='title is-4 is-centered'>Netlify Hosting</p>
              </div>
            </div>
            <div className='content'>
              Netlify Continuous Deployment
              <br />
              <div><a title='Netlify' href='https://netlify.com' target='_blank' rel='noopener noreferrer'>Netlify Home Page</a></div>
              <div><a target='_blank' rel='noreferrer' href='https://www.netlify.com/features/'>SLL Security</a></div>
              <br />
              <span>Netlify CMS<a target='_blank' rel='noreferrer' href='https://publiuslogic.com/admin/#/collections/pages'>&nbsp; - &nbsp;Administration</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
