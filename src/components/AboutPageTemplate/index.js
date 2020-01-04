import React from 'react'
import { Link } from 'gatsby'
import Content from '../Content'
import PropTypes from 'prop-types'
import Menu3 from 'react-burger-menu/lib/menus/stack'
import Image from './image'
import DarkModeStatus from '../DarkMode/DarkModeStatus'
import DarkModeCommands from '../DarkMode/DarkModeCommands'
import Bio from '../Bio'
import Carbon from '../../../static/img/rgAl-carbon.png'
import { BookContent } from 'styled-icons/boxicons-regular/'
import { StyledTableMenu, TableOfContents, Title, TocIcon } from '../styles/ArticleStyles'

const AboutPageTemplate = ({ title, cover, path, meta_title, meta_description, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <>
      <StyledTableMenu>
        <Menu3 right customBurgerIcon={<BookContent />}>
          <Title>
            <TocIcon />
                | Page Contents
          </Title>
          <TableOfContents>
            <ul className='linktoc'>
              <li><Link to='/about/#Technical-notes-about-this-website'>🎁 Tech Notes</Link></li>
              <li><Link to='/about/#Just-having-Fun'>🍸 Just Having Fun</Link></li>
              <li><Link to='/about/#Styling'>💅 Styled Components</Link></li>
              <li><Link to='/about/#Gatsby-Starter-Publius'>🚀 Gatsby Starter Publius</Link></li>
              <ul>
                <li><Link to='/about/#Server-less'>🔥 Serverless</Link></li>
              </ul>
              <li><Link to='/about/#Authentication'>🔐 Authentication</Link></li>
              <ul>
                <li><Link to='/about/#Netlify-Identity-Widget'>🆔 Netlify Identity</Link></li>
                <li><Link to='/about/#What-is-Netlify-Identity'>⁉️ What is Netlify Identity</Link></li>

              </ul>
              <li><Link to='/about/#Netlify-CMS'>🖥️ Netlify Cms</Link></li>
              <ul>
                <li><Link to='/about/#An-extensible-CMS-built-on-React'>❤️ Cms with React</Link></li>
              </ul>
              <li><Link to='/about/#Features'>✔️ Features</Link></li>
              <ul>
                <li><Link to='/about/#Context-Provider-Wrapper'>🍬 Context Wrapper</Link></li>
                <li><Link to='/about/#useDarkMode'>☀️ useDarkMode</Link></li>
              </ul>
            </ul>
          </TableOfContents>
        </Menu3>
      </StyledTableMenu>
      <section className='hero'>
        <Image />
      </section>
      <section className='section'>
        <div className='container content'>
          <div className='columns is-10 is-offset-1'>
            <div className='column'>
              <div>
                <Bio />
              </div>
              <div>
                <PageContent className='content' content={content} />
              </div>
              <hr />
              <div>
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
                    src={Carbon}
                  />
                </p>
                <div className='column'>
                View the source for this&nbsp;
                  <a className='a' href='https://codesandbox.io/s/mzj64x80ny'>Code Sand Box Demo app.</a> &nbsp;Or see
                useDarkMode.&nbsp;
                  <a className='a' href='https://github.com/donavon/use-dark-mode'>
                Source code on Github.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.image,
  path: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
