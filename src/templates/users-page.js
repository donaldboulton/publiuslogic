import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { HTMLContent } from '../components/Content'
import UsersPageTemplate from '../components/UsersPageTemplate'
import Global from '../components/Global'
import GithubButtonsRepo from '../components/GithubButtonsRepo'
import { Calendar } from 'styled-icons/octicons/Calendar'
import { Timer } from 'styled-icons/material/Timer'
import config from '../../_data/config'
import PostCover from '../components/PostCover'
import Menu4 from 'react-burger-menu/lib/menus/stack'
import Bio from '../components/Bio'
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
    overflow-y: auto;
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
const Styledh1 = styled.h1`
  display: inline-block;
  padding-top: 2em;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  z-index: 22;
  background-position: 50% 50%;
  text-align: center;
`
const Time = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.white};
`
const Date = styled.span`
  font-size: 0.9em;
  color: ${props => props.theme.white};
`
const GithubButtons = styled.span`
  right: 2px;
`
const UsersPage = ({ data }) => {
  const { markdownRemark: post } = data
  const image = post.frontmatter.cover
  const author = config.author
  const postNode = data.markdownRemark
  const coverHeight = '100%'
  const logo = config.siteLogo

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: 'https://publiuslogic.com/users',
    inLanguage: config.siteLanguage,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://publiuslogic.com/users',
    },
    description: config.siteDescription,
    name: 'Users | PubliusLogic',
    author: {
      '@type': 'Person',
      name: 'donaldboulton',
    },
    copyrightHolder: {
      '@type': 'Person',
      name: 'donaldboulton',
    },
    copyrightYear: '2019',
    creator: {
      '@type': 'Person',
      name: 'donboulton',
    },
    publisher: {
      '@type': 'Organization',
      name: 'donaldboulton',
      logo: {
        '@type': 'ImageObject',
        url: logo,
        width: '450px',
        height: '450px',
      },
    },
    datePublished: '2019-07-12T10:30:00+01:00',
    dateModified: '2019-07-12T10:30:00+01:00',
    image: {
      '@type': 'ImageObject',
      url: image,
    },
  }

  return (
    <Global pageTitle={post.frontmatter.title}>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
        <meta name='keywords' content={post.frontmatter.tags} />
        <meta name='image' content={post.frontmatter.cover} />
        <meta name='url' content={post.frontmatter.slug} />
        <meta name='author' content={author} />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={post.frontmatter.title} />
        <meta property='og:description' content={post.frontmatter.meta_description} />
        <meta property='og:image' content={post.frontmatter.cover} />
        <meta property='og:image:alt' content={post.frontmatter.meta_title} />
        <meta property='og:image:width' content='100%' />
        <meta property='og:image:height' content='400px' />
        <meta property='og:url' content={post.frontmatter.slug} />
        <meta name='rel' content={post.frontmatter.slug} />
        <meta name='key' content={post.frontmatter.slug} />
        <meta name='twitter:author' content='donboulton' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={post.frontmatter.title} />
        <meta name='twitter:image' content={post.frontmatter.cover} />
        <meta name='twitter:description' content={post.frontmatter.meta_description} />
        <meta name='twitter:widgets:autoload' content='off' />
        <meta name='twitter:widgets:theme' content='dark' />
        <meta name='twitter:widgets:link-color' content='#d64000' />
        <meta name='twitter:widgets:border-color' content='#000000' />
        <meta name='twitter:dnt' content='on' />
        <link rel='canonical' href={post.frontmatter.slug} />
        <link rel='image_src' href={`${config.siteUrl}${config.logo}`} />
        <link rel='me' href='https://twitter.com/donboulton' />
        <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>
      </Helmet>
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
      <section className='hero'>
        <PostCover
          postNode={postNode}
          coverHeight={coverHeight}
          coverClassName='post-cover'
        />
      </section>
      <section className='section'>
        <div className='column is-10 is-offset-1'>
          <Styledh1>
            {post.frontmatter.title}
          </Styledh1>
        </div>
        <div className='column is-9 is-offset-1'>
          <Bio />
          <div className='columns is-desktop is-vcentered'>
            <div className='column is-7'>
              <span className='subtitle is-size-5'>
                <Calendar size='0.9em' />&nbsp;
                <Date><small>{post.frontmatter.date}</small>&nbsp;</Date>&nbsp;
                <Timer size='0.9em' />&nbsp;
                <Time>{post.timeToRead}&nbsp;min read</Time>
              </span>
            </div>
            <GithubButtons><GithubButtonsRepo className='is-pulled-right' /></GithubButtons>
          </div>
        </div>
      </section>
      <UsersPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        cover={post.frontmatter.cover}
        meta_title={post.frontmatter.meta_title}
        description={post.frontmatter.meta_description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Global>
  )
}

UsersPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default UsersPage

export const usersPageQuery = graphql`
  query UsersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      timeToRead
      tableOfContents
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title   
        cover
        meta_title
        meta_description
        tags
      }
    }
  }
`
