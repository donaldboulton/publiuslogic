import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { HTMLContent } from '../components/Content'
import Image from '../components/PrivacyPageTemplate/image'
import Menu5 from 'react-burger-menu/lib/menus/stack'
import GithubButtonsRepo from '../components/GithubButtonsRepo'
import { Calendar } from 'styled-icons/octicons/Calendar'
import { Timer } from 'styled-icons/material/Timer'
import PrivacyPageTemplate from '../components/PrivacyPageTemplate'
import Layout from '../components/Layout'
import config from '../../_data/config'
import Bio from '../components/Bio'
import { BookContent } from 'styled-icons/boxicons-regular/'
import { StyledTableMenu, TableOfContents, Title, TocIcon, Time, Date, GithubButtons } from '../components/styles/ArticleStyles'
import styled from 'styled-components'

const Styledh1 = styled.h1`
  display: inline-block;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
}
`
const PrivacyPage = ({ data, location, timeToRead }) => {
  const { markdownRemark: page } = data
  const image = page.frontmatter.cover
  const author = config.author
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
    <Layout pageTitle={page.frontmatter.title} location={location} crumbLabel='Privacy'>
      <Helmet>
        <title>{page.frontmatter.meta_title}</title>
        <meta name='description' content={page.frontmatter.meta_description} />
        <meta name='keywords' content={page.frontmatter.tags} />
        <meta name='image' content={page.frontmatter.cover} />
        <meta name='url' content={page.frontmatter.path} />
        <meta name='author' content={author} />
        <meta property='og:type' content='webpage' />
        <meta property='og:title' content={page.frontmatter.title} />
        <meta property='og:description' content={page.frontmatter.meta_description} />
        <meta property='og:image' content={page.frontmatter.cover} />
        <meta property='og:image:alt' content={page.frontmatter.meta_title} />
        <meta property='og:image:width' content='100%' />
        <meta property='og:image:height' content='400px' />
        <meta property='og:url' content={page.frontmatter.path} />
        <meta name='rel' content={page.frontmatter.path} />
        <meta name='key' content={page.frontmatter.path} />
        <meta name='twitter:author' content='donboulton' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={page.frontmatter.title} />
        <meta name='twitter:image' content={page.frontmatter.cover} />
        <meta name='twitter:description' content={page.frontmatter.meta_description} />
        <meta name='twitter:widgets:autoload' content='off' />
        <meta name='twitter:widgets:theme' content='dark' />
        <meta name='twitter:widgets:link-color' content='#d64000' />
        <meta name='twitter:widgets:border-color' content='#000000' />
        <meta name='twitter:dnt' content='on' />
        <link rel='canonical' href={page.frontmatter.path} />
        <link rel='image_src' href={`${config.siteUrl}${config.logo}`} />
        <link rel='me' href='https://twitter.com/donboulton' />
        <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>
      </Helmet>
      <StyledTableMenu>
        <Menu5 right customBurgerIcon={<BookContent />}>
          <Title>
            <TocIcon />
                | 🔐 Page Contents
          </Title>
          <TableOfContents>
            <ul className='linktoc'>
              <li><Link to='/privacy/#User-data-encrypted'>⚓ User Data</Link></li>
              <li><Link to='/privacy/#Log-Files'>🏴󠁡󠁦󠁬󠁯󠁧󠁿 Log Files</Link></li>
              <li><Link to='/privacy/#Cookies--Beacons'>🍪 Cookies and Beacons</Link></li>
              <ul>
                <li><Link to='/privacy/#Cookies-in-EU-Law'>⚖️ EU Law</Link></li>
                <li><Link to='/privacy/#Disabling-Cookies'>❌ Disable Cookies</Link></li>
              </ul>
              <li><Link to='/privacy/#Google-Analytics'>📈 Google Analytics</Link></li>
              <ul>
                <li><Link to='/privacy/#Analytics-Cookie-Types'>🤚 Cookie Types</Link></li>
                <li><Link to='/privacy/#Opt-out'>😜 Opt Out</Link></li>
                <ul>
                  <li><Link to='/privacy/#Opt-Out-Google-tools'>⚒️ Google Tools</Link></li>
                </ul>
              </ul>
              <li><Link to='/privacy/#Hubspot-__hstc-Cookie'>🥠 Hubspot __hstc</Link></li>
              <ul>
                <li><Link to='/privacy/#Key-numbers-for-__hstc'>🗝️ Keys-for-__hstc</Link></li>
              </ul>
              <li><Link to='/privacy/#Privacy-Google'>🗠 Privacy Google</Link></li>
              <ul>
                <li><Link to='/privacy/#You-can-read-Google-Analytics-Privacy-Policy'>🗸 Anylitics Privacy</Link></li>
              </ul>
              <li><Link to='/privacy/#Google-AdSense'>💹 Google AdSense</Link></li>
              <ul>
                <li><Link to='/privacy/#You-can-read'>🗸 AdSense Privacy</Link></li>
                <li><Link to='/privacy/#Create-Your-Own'>🦸 Create Your Own</Link></li>
              </ul>
              <li><Link to='/privacy/#MailChimp'>🐵 MailChimp</Link></li>
              <li><Link to='/privacy/#Donation-Policy'>🩸 Donation Policy</Link></li>
              <li><Link to='/privacy/#Comment-Policy'>🩸 Comment Policy</Link></li>
              <li><Link to='/privacy/#Disclosure-Policy'>🩸 Discloser Policy</Link></li>
              <li><Link to='/privacy/#License'>🔰 License</Link></li>
            </ul>
          </TableOfContents>
        </Menu5>
      </StyledTableMenu>
      <section className='hero'>
        <Image />
      </section>
      <section>
        <div className='column is-10 is-offset-1'>
          <div>
            <Styledh1>
              {page.frontmatter.title}
            </Styledh1>
          </div>
          <div className='column is-9'>
            <Bio />
            <div className='columns is-desktop is-vcentered'>
              <div className='column is-7'>
                <span className='subtitle is-size-5'>
                  <Calendar size='0.9em' />&nbsp;
                  <Date><small>{page.frontmatter.date}</small>&nbsp;</Date>&nbsp;
                  <Timer size='0.9em' />&nbsp;
                  <Time>{timeToRead}&nbsp;min read</Time>
                </span>
              </div>
              <GithubButtons><GithubButtonsRepo className='is-pulled-right' /></GithubButtons>
            </div>
            <div className='columns is-desktop is-vcentered'>
              <div className='column is-4'>
                 🔐 Privacy & Terms.
              </div>
              <div className='column is-pulled-right'>
                For Refinements see <Link className='a' to='/privacy/#Disabling-Cookies'>Cookies</Link> or <Link className='a' to='/privacy/#Privacy-Google'>Google Privacy</Link>          
              </div>
            </div>
          </div>
        </div>
      </section>
      <PrivacyPageTemplate
        contentComponent={HTMLContent}
        content={page.html}
        cover={page.frontmatter.cover}
        meta_title={page.frontmatter.meta_title}
        description={page.frontmatter.meta_description}
        tags={page.frontmatter.tags}
        title={page.frontmatter.title}
      />
    </Layout>
  )
}

PrivacyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PrivacyPage

export const pageQuery = graphql`
  query PrivacyPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        cover
        path
        meta_title
        meta_description
        tags
      }
    }
  }
`
