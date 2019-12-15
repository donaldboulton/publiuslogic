import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { HTMLContent } from '../components/Content'
import PostCover from '../components/PostCover'
import Menu5 from 'react-burger-menu/lib/menus/stack'
import styled from 'styled-components'
import PrivacyPageTemplate from '../components/PrivacyPageTemplate'
import Global from '../components/Global'
import config from '../../_data/config'
import Bio from '../Bio'
import { BookContent, Table } from 'styled-icons/boxicons-regular/'

const Styledh1 = styled.h1`
  display: inline-block;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
  z-index: 22;
}
`

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

const PrivacyPage = ({ data }) => {
  const { markdownRemark: post } = data
  const image = post.frontmatter.cover
  const author = config.author
  const postNode = data.markdownRemark
  const coverHeight = '100%'
  const logo = config.siteLogo

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: 'https://publiuslogic.com/privacy',
    inLanguage: config.siteLanguage,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://publiuslogic.com/privacy',
    },
    description: config.siteDescription,
    name: 'Privacy | PubliusLogic',
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
        <meta property='og:type' content='webpage' />
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
        <Menu5 right customBurgerIcon={<BookContent />}>
          <Title>
            <TocIcon />
                | Page Contents
          </Title>
          <UsersTableOfContents>
            <ul className='linktoc'>
              <li>
                <ul>
                  <li><Link to='/privacy/#User-data-encrypted'>User Data</Link></li>
                  <li><Link to='/privacy/#Log-Files'>Log Files</Link></li>
                  <li><Link to='/privacy/#Cookies--Beacons'>Cookies and Beacons</Link></li>
                  <ul>
                    <li><Link to='/privacy/#Cookies-in-EU-Law'>Cookies and EU Law</Link></li>
                    <li><Link to='/privacy/#Disabling-Cookies'>Disable Cookies</Link></li>
                    <li><Link to='/privacy/#Google-Analytics'>Google Analytics</Link></li>
                    <li><Link to='/privacy/#Analytics-Cookie-Types'>Analytics Cookie Types</Link></li>
                    <li><Link to='/privacy/#Opt-out'>Opt Out</Link></li>
                    <li><Link to='/privacy/#Hubspot-__hstc-Cookie'>Hubspot __hstc</Link></li>
                    <li><Link to='/privacy/#Key-numbers-for-__hstc'>Key-numbers-for-__hstc</Link></li>
                  </ul>
                  <ul>
                    <li><Link to='/privacy/#Privacy-Google'>Privacy Google</Link></li>
                    <ul>
                      <li><Link to='/privacy/#You-can-read-Google-Analytics-Privacy-Policy'>Anylitics Privacy</Link></li>
                    </ul>
                  </ul>
                </ul>
                <li><Link to='/privacy/#Google-AdSense'>Google AdSense</Link></li>
                <ul>
                  <li><Link to='/privacy/#You-can-read'>Adsense Privacy</Link></li>
                </ul>
              </li>
              <li><Link to='/privacy/#MailChimp'>MailChimp</Link></li>
            </ul>
            <li><Link to='/privacy/#Donation-Policy'>Donation Policy</Link></li>
            <li><Link to='/privacy/#Comment-Policy'>Comment Policy</Link></li>
            <li><Link to='/privacy/#Disclosure-Policy'>Discloser Policy</Link></li>
            <li><Link to='/privacy/#License'>Comment Policy</Link></li>
          </UsersTableOfContents>
        </Menu5>
      </StyledUsersTableMenu>
      <section className='hero'>
        <PostCover
          postNode={postNode}
          coverHeight={coverHeight}
          coverClassName='post-cover'
        />
      </section>
      <section>
        <div className='column is-10 is-offset-1'>
          <div>
            <Styledh1>
              {post.frontmatter.title}
            </Styledh1>
            <p>Users Privacy & Terms of Site Usage.</p>
            <p>
            🔐 For Refinements see <Link className='a' to='/privacy/#Disabling-Cookies'>Cookies</Link> or <Link className='a' to='/privacy/#Privacy-Google'>Google Privacy</Link>
            </p>
          </div>
          <div>
            <Bio />
          </div>
        </div>
      </section>
      <PrivacyPageTemplate
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

PrivacyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PrivacyPage

export const privacyPageQuery = graphql`
  query PrivacyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        cover
        meta_title
        meta_description
        tags
      }
    }
  }
`
