import React from 'react'
import github from '../../img/GitHub-Mark-Light-64px.png'
import gatsby from '../../img/gatsby.svg'
import logo from '../../img/apple-touch-icon-round.png'
import react from '../../img/react.svg'
import lambda from '../../img/lambda.png'
import netlify from '../../img/logomark.svg'
import BalanceScale from '../../img/balance-scale.svg'
import Tools from '../../img/tools.svg'
import Twitter from '../../img/twitter.svg'
import Github from '../../img/github.svg'
import ExternalLinkAlt from '../../img/external-link-alt.svg'
import FacebookF from '../../img/facebook-f.svg'

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
              <div className='media-left'>
                <figure className='image is-48x48'>
                  <a title='Github' href='https://github.com/donaldboulton/gatsby-starter-netlify-cms' target='_blank' rel='noopener noreferrer'>
                    <img
                      src={github}
                      alt='GitHub'
                    />
                  </a>
                </figure>
              </div>
              <div className='media-content'>
                <p className='title is-4'>PubliusLogic</p>
                <p className='subtitle is-6'>donboulton.com</p>
              </div>
            </div>
            <div className='content'>
              Donald Boulton uses GitHub via a continuous deployment
              <br />
              <div><a href='https://github.com/donaldboulton/' rel='me'><span className='icon is-small has-text-light'><Github /></span>&nbsp;My GitHub Repos</a></div>
              <div><a href='https://twitter.com/donboulton' rel='me'><span className='icon is-small has-text-info'><Twitter /></span>&nbsp;Twitter @donboulton.com</a></div>
              <div><a href='https://facebook.com/don.boulton' rel='me'><span className='icon is-small has-text-link'><FacebookF /></span>&nbsp;Facebook don.boulton</a></div>
              <br />
              <span>
                <a href='https://donboulton.com'><span className='icon is-small has-text-light'><FaExternalLinkAlt /></span>&nbsp;Designer donboulton.com</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='column'>
        <div className='card'>
          <div className='card-image'>
            <figure className='image is-4by3'>
              <a title='Gatsby' href='https://gatsby.org' target='_blank' rel='noopener noreferrer'>
                <img
                  src={gatsby}
                  alt='Gatsby'
                />
              </a>
            </figure>
          </div>
          <div className='card-content'>
            <div className='media'>
              <div className='media-left'>
                <figure className='image is-62x48'>
                  <img
                    src={react}
                    alt='PubliusLogic'
                    style={{ width: '62px', height: '48px' }}
                  />
                </figure>
              </div>
              <div className='media-content'>
                <p className='title is-4'>Gatsby Powered</p>
                <p className='subtitle is-6'>React Webpack</p>
              </div>
            </div>
            <div className='content'>
                        Gatsby is Easy to learn even for novice developers
              <br />
              <div><a href='https://www.gatsbyjs.org/'><span className='icon is-small has-text-light'><ExternalLinkAlt /></span>&nbsp;Framework Gatsby -v2.1</a></div>
              <div><a href='https://bulma.io/'><span className='icon is-small has-text-light'><ExternalLinkAlt /></span>&nbsp;CSS from @bulma.io</a></div>
              <div><a href='https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/'><span className='icon is-small has-text-light'><ExternalLinkAlt /></span>&nbsp;Styled Components Icons</a></div>
              <br />
              <a href='https://publiuslogic.com'><span><span className='icon is-small has-text-light'><BalanceScale /></span><span>&nbsp;Terms and Conditions.</span></span></a>
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
              <div className='media-left'>
                <figure className='image is-48x48'>
                  <img
                    src={lambda}
                    alt='Netlify Functions'
                  />
                </figure>
              </div>
              <div className='media-content'>
                <p className='title is-4'>Netlify Hosting</p>
                <p className='subtitle is-6'>Lambda Functions</p>
              </div>
            </div>
            <div className='content'>
              Netlify forms posted to slack with Lambda Functions
              <br />
              <div><a title='Netlify' href='https://netlify.com' target='_blank' rel='noopener noreferrer'><span className='icon is-small has-text-light'><ExternalLinkAlt /></span>&nbsp;Netlify Home Page</a></div>
              <div><a href='https://www.netlify.com/features/'><span className='icon is-small has-text-light'><ExternalLinkAlt /></span>&nbsp;SLL Security</a></div>
              <div><a href='https://app.netlify.com/signup?_ga=2.257002891.1243890719.1552279568-538917114.1550763563'><span className='icon is-small has-text-light'><ExternalLinkAlt /></span>&nbsp;Netlify Free Tier</a></div>
              <br />
              <a href='https://publiuslogic.com/admin/'><span><span className='icon is-small has-text-light'><Tools /></span><span>&nbsp;Admin - Netlify CMS</span></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
