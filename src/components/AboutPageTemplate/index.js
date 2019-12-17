import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Content from '../Content'
import PropTypes from 'prop-types'
import Menu3 from 'react-burger-menu/lib/menus/stack'
import Image from './image'
import DarkModeStatus from '../DarkMode/DarkModeStatus'
import DarkModeCommands from '../DarkMode/DarkModeCommands'
import Bio from '../Bio'
import Carbon from '../../../static/img/rgAl-carbon.png'
import { BookContent, Table } from 'styled-icons/boxicons-regular/'

const StyledAboutTableMenu = styled.div` 
  .bm-item {
    text-align: left;
    background: transparent;
    display: inline-block;
    text-decoration: none;
    margin-bottom: 2vh;
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
    transition: color 0.2s;
  }
  .bm-item:hover {
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
  }
  .bm-burger-button {
    position: fixed;
    width: 30px;
    height: 26px;
    right: 1.4vw;
    top: 2.2vh;
  }
  .bm-burger-bars {
    background: ${props => props.theme.lightBg};  
  }
  .bm-cross-button {
    height: 30px;
    width: 15px;
    left: 8px !important;
  }
  .bm-cross {
    background: #bdc3c7;
  }
  .bm-menu {
    background: rgba(0, 0, 0, 0.59);
    padding: 2.5em 1.5em 0;
    font-size: 1em;
  }
  .bm-morph-shape {
    fill: #373a47;
  }
  .bm-item-list {
    color: #b8b7ad;
    background: transparent;
  }
  .linktoc {
    overflow-y: scroll;
    scrollbar-color: linear-gradient(to bottom,#201c29,#100e17);
    scrollbar-width: 10px;
    overflow-x: hidden;
  }
  .linktoc::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  .linktoc::-webkit-scrollbar-thumb {
    background: -webkit-gradient(linear,left top,left bottom,from(#d201c29),to(#100e17));
    background: linear-gradient(to bottom,#201c29,#100e17);
    border-radius: 10px;
    -webkit-box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
    box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
  }
  .linktoc::-webkit-scrollbar-track {
    background: linear-gradient(to right,#201c29,#201c29 1px,#100e17 1px,#100e17);
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.59);
  }
  ul {
    max-height: 78vh;
  }
`

const Title = styled.h2`
  margin: 0;
  padding-bottom: 0.5em;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: auto auto 1fr;
  color: ${props => props.theme.black};
  border-bottom: 1px solid ${props => props.theme.black};
`
const TocIcon = styled(Table)`
  width: 1em;
  margin-right: 0.2em;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
`
const AboutTableOfContents = styled.div`
  ul {
    color: ${props => props.theme.white};
    textIndent: -1em hanging;
  }
  li {
    margin-bottom: 1em;
  }
  a {
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
  }
  a:hover {
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
  }
`

const AboutPageTemplate = ({ title, cover, canonical, meta_title, meta_description, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <>
      <StyledAboutTableMenu>
        <Menu3 right customBurgerIcon={<BookContent />}>
          <Title>
            <TocIcon />
                | Page Contents
          </Title>
          <AboutTableOfContents>
            <ul className='linktoc'>
              <li><Link to='/about/#Technical-notes-about-this-website'>🎁 Tech Notes</Link></li>
              <li><Link to='/about/#Just-having-fun'>🍸 Just Having Fun</Link></li>
              <li><Link to='/about/#Styling-with-Bluma-and-styled-css-grid-'>💅 Styled Components</Link></li>
              <li><Link to='/about/#Gatsby-Starter-Publius'>🚀 Gatsby Starter Publius</Link></li>
              <ul>
                <li><Link to='/about/#Server-less'>🔥 Serverless</Link></li>
              </ul>
              <li><Link to='/about/#Authentication'>🔐 Authentication</Link></li>
              <ul>
                <li><Link to='/about/#Netlify-Identity'>🆔 Netlify Identity</Link></li>
                <li><Link to='/about/#What-is-Netlify-Identity'>⁉️ What is Netlify Identity</Link></li>

              </ul>
              <li><Link to='/about/#Netlify-CMS'>🖥️ Netlify Cms</Link></li>
              <ul>
                <li><Link to='/about/#An-extensible-CMS-built-on-React'>❤️ Cms with React</Link></li>
              </ul>
              <li><Link to='/about/#Features' aria-label='This Site Uses useDarkMode' className='link-icon'>✔️ Features</Link></li>
              <li><Link to='/about/#Uses-useDarkMode' aria-label='This Site Uses useDarkMode' className='link-icon'>☀️ useDarkMode</Link></li>
            </ul>
          </AboutTableOfContents>
        </Menu3>
      </StyledAboutTableMenu>
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
                View the source for this
                  <Link className='a' to='https://codesandbox.io/s/mzj64x80ny'>Code Sand Box Demo app.</Link> Or see
                useDarkMode.
                  <Link className='a' to='https://github.com/donavon/use-dark-mode'>
                Source code on Github.
                  </Link>
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
  canonical: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
