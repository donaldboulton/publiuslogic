import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Content from '../Content'
import PropTypes from 'prop-types'
import Menu4 from 'react-burger-menu/lib/menus/stack'
import Bio from '../Bio'
import ToDo from '../ToDo/functionsToDo'
import { BookContent, Table } from 'styled-icons/boxicons-regular/'

const StyledUsersTableMenu = styled.div` 
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
const UsersTableOfContents = styled.div`
  ul {
    color: ${props => props.theme.white};
    textIndent: -1em hanging;
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

const UsersPageTemplate = ({ title, cover, canonical, meta_title, meta_description, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <>
      <StyledUsersTableMenu>
        <Menu4 right customBurgerIcon={<BookContent />}>
          <Title>
            <TocIcon />
                | Page Contents
          </Title>
          <UsersTableOfContents>
            <ul className='linktoc'>
              <li>
                <ul>
                  <li><Link to='/users#gatsby-ferverless-faunaDB'>Gatsby Serverless FaunaDB</Link></li>
                  <li><Link to='/users#Functions'>Functions</Link></li>
                  <li><Link to='/users#ToDo'>ToDo</Link></li>
                  <li><Link to='/users#Functions'>Functions</Link></li>
                  <ul>
                    <li><Link to='/users#netlifyIdentity'>netlifyIdentity</Link></li>
                  </ul>
                  <li><Link to='/about#g'>Gatsby Starter Publius</Link></li>
                </ul>
                <li><Link to='/about#Authentication'>Authentication</Link></li>
                <ul>
                  <li><Link to='/about/#Netlify-Identity'>Netlify Identity</Link></li>
                  <li><Link to='/about#Netlify-CMS'>Netlify Cms</Link></li>
                  <li><Link to='/about#An-extensible-CMS-built-on-React'>Netlify Cms Built with React</Link></li>
                </ul>
              </li>
              <li><Link to='/about/#This-Site-Uses-useDarkMode' aria-label='This Site Uses useDarkMode' className='link-icon'><svg aria-hidden='true' height='20' version='1.1' viewBox='0 0 16 16' width='20'><path fill='#d64000' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z' /></svg>This Site Uses useDarkMode</Link></li>
            </ul>
          </UsersTableOfContents>
        </Menu4>
      </StyledUsersTableMenu>
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
              <p>test</p>
              <hr />
              <div className='column is-10 is-offset-1'>
                <h3>Leave a ToDo for changes or issues.</h3>
                <ToDo />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

UsersPageTemplate.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.image,
  canonical: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default UsersPageTemplate
