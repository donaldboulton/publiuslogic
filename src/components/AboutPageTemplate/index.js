import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import Image from './image'
import DarkModeStatus from '../DarkMode/DarkModeStatus'
import DarkModeCommands from '../DarkMode/DarkModeCommands'

const AboutPageTemplate = ({ title, cover, canonical, meta_title, meta_description, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='hero'>
        <Image />
      </section>
      <section className='section'>
        <div className='container content'>
          <div className='columns is-10 is-offset-1'>
            <div className='column'>
              <div className='content'>
                <h2>This Site Uses useDarkMode</h2>
                <p>
                I have incorporated this into PubliusLogic and below is an example of its usage.
                </p>
                <p>
                This is an example app that uses the <code>useDarkMode</code> custom hook.
                It persists across sessions (i.e., uses <code>localStorage</code>) and
                shares state across instances and even tabs and/or browser windows.
                </p>
                <p>
                For example, here is a component that shares the custom hook{' '}
                  <code>useDarkMode</code> with the toggle component above.
                </p>
                <p>
                 It is reporting that the current mode is:{' '}
                  <code>
                    <DarkModeStatus />
                  </code>
                </p>
                <p>
                 And here's another: <DarkModeCommands />
                </p>
                <p>It couldn't be any easier!</p>
                <p>
                  <img
                    alt='code'
                    src='https://uploads.codesandbox.io/uploads/user/dadc333f-4fd2-4f2d-9ce8-1d7a80efd28a/rgAl-carbon.png'
                  />
                </p>
                <p>
                View the source for this{' '}
                  <a href='https://codesandbox.io/s/mzj64x80ny'>demo app</a> or see the
                useDarkMode{' '}
                  <a href='https://github.com/donavon/use-dark-mode'>
                source code on Github
                  </a>
                .{' '}
                </p>
              </div>
              <div>
                <PageContent className='content' content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.image,
  canonical: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
