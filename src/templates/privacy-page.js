import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { HTMLContent } from '../components/Content'
import PostCover from '../components/PostCover'
import Menu5 from 'react-burger-menu/lib/menus/stack'
import { Calendar } from 'styled-icons/octicons/Calendar'
import { Timer } from 'styled-icons/material/Timer'
import PrivacyPageTemplate from '../components/PrivacyPageTemplate'
import Layout from '../components/Layout'
import config from '../../_data/config'
import Bio from '../components/Bio'
import { FileSymlinkFile } from 'styled-icons/octicons/'
import { BookContent } from 'styled-icons/boxicons-regular/'
import { StyledTableMenu, TableOfContents, Styledh1, PageTitle, PageTocIcon, TagList, MetaPage } from '../components/styles/ArticleStyles'

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
    <Layout pageTitle={post.frontmatter.title}>
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
      <StyledTableMenu>
        <Menu5 right customBurgerIcon={<BookContent />}>
          <PageTitle>
            <PageTocIcon />
            | 🔐 Page Contents
          </PageTitle>
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
        <PostCover
          postNode={postNode}
          coverHeight={coverHeight}
          coverClassName='post-cover'
        />
      </section>
      <section className='section'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <section>
              <Styledh1>
                {post.frontmatter.title}
              </Styledh1>
            </section>
            <div className='column is-9'>
              <Bio />
              <MetaPage>
                <span>
                  <Calendar size='1.2em' />
                    &ensp;
                  {post.frontmatter.date}
                </span>
                <span>
                  <Timer size='1.2em' />
                     &ensp;
                  {post.timeToRead} min read
                </span>
                <Link aria-label='Tags' to='/tags/'><TagList tags={post.frontmatter.tags} /></Link>
                <span>
                  <FileSymlinkFile size='1.2em' />
                  &ensp;
                  Category:
                  &ensp;
                  <Link aria-label='Categories' to='/categories/'>{post.frontmatter.category}</Link>
                </span>
              </MetaPage>
              <div className='columns is-desktop is-vcentered'>
                <div className='column is-4'>
                  🔐 Privacy & Terms.
                </div>
                <div className='column'>
                  For Refinements see <Link className='a' to='/privacy/#Disabling-Cookies'>Cookies</Link> or <Link className='a' to='/privacy/#Privacy-Google'>Google Privacy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container content'>
          <div className='columns'>
            <div className='column'>
              <PrivacyPageTemplate
                contentComponent={HTMLContent}
                content={post.html}
                cover={post.frontmatter.cover}
                meta_title={post.frontmatter.meta_title}
                description={post.frontmatter.meta_description}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

PrivacyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PrivacyPage

export const privacyPageQuery = graphql`
  query PrivacyPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMM D, YYYY")
        title
        cover
        slug
        meta_title
        meta_description
        tags
      }
    }
  }
`
