import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import ContactForm from '../ContactForm'
import logo from '../../../static/img/logo.png'

const ContactPageTemplate = ({ title, cover, subtitle, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='section'>
        <div className='container'>
          <div className='columns is-10 is-offset-1'>
            <PageContent className='content' content={content} />
            <div className='column is-8'>
              <ContactForm />
            </div>
            <div className='column'>
              <h4>Realtime Contact Message</h4>
              <div>
                <a aria-label='Privacy Link' href='https://publiuslogic.com/privacy'>
                  <img
                    src={logo}
                    alt='PubliusLogic'
                    style={{ width: '330px', height: '330px' }}
                  />
                </a>
                <div>
                  <div>Contacts are governed by our!</div>
                  <div className='is-centered'><a aria-label='Comment Policy' href='/privacy#Comment Policy'>Submitting Policy</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.image,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default ContactPageTemplate
