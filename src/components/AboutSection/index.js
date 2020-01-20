import React from 'react'
import github from '../../../static/img/github.svg'
import gatsby from '../../../static/img/gatsby.svg'
import logo from '../../../static/img/logo.png'
import webpack from '../../../static/img/ApolloReact-320.png'
import lambda from '../../../static/img/lambda.png'
import netlify from '../../../static/img/logomark.svg'
import config from '../../../_data/config'
import { Link } from 'gatsby'

const AboutSection = () => {
  return (
    <div className='columns'>
      <div className='column is-one-third'>
        <div className='card card1'>
          <div className='card-image'>
            <figure className='image is-4by3'>
              <Link to='/'>
                <img
                  src={logo}
                  alt='PubliusLogic'
                />
              </Link>
            </figure>
          </div>
          <div className='card-content'>
            <div className='media'>
              <div className='media-left parent'>
                <figure className='image is-32x32'>
                  <a title='Github' href='https://github.com/donaldboulton/publiuslogic' target='_blank' rel='noopener noreferrer'>
                    <img
                      className='github-icon'
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
              <div><a className='a' rel='me noopener noreferrer' target='_blank' href='https://github.com/donaldboulton/publiuslogic'>&nbsp;GitHub Repo</a></div>
              <div><a className='a' target='_blank' href='https://twitter.com/donboulton' rel='me noopener noreferrer'>&nbsp;Twitter @publiuslogic</a></div>
              <br />
              <span>
                <p>
                  {config.copyright} - <Link className='a' title='PubliusLogic Home' href='/' rel='noopener noreferrer'>PubliusLogic</Link>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='column'>
        <div className='card card2'>
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
              <div><a className='a' target='_blank' rel='noopener noreferrer' href='https://www.gatsbyjs.org/'>Framework Gatsby -v2.1</a></div>
              <div><a className='a' target='_blank' rel='noopener noreferrer' href='https://bulma.io/'>CSS from @bulma.io</a></div>
              <br />
              <span>Privacy<Link className='a' to='/privacy/#Comment-Policy'>&nbsp; - &nbsp;Terms</Link></span>
            </div>
          </div>
        </div>
      </div>
      <div className='column'>
        <div className='card card3'>
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
              <div><a className='a' title='Netlify' href='https://netlify.com' target='_blank' rel='noopener noreferrer'>Netlify Home Page</a></div>
              <div><a className='a' target='_blank' rel='noopener noreferrer' href='https://www.netlify.com/features/'>SLL Security</a></div>
              <br />
              <span>Netlify CMS<Link className='a' to='/admin/#/collections/pages'>&nbsp; - &nbsp;Admin</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
