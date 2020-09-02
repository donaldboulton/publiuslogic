import React from 'react'
import RehypeReact from 'rehype-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PostCover from '../components/PostCover'
import Bio from '../components/Bio'
import { PageBody, TocWrapper, BodyWrapper } from '../components/styles/PageBody'
import Toc from '../components/Toc'
import { HTMLContent } from '../components/Content'
import AboutPageTemplate from '../components/AboutPageTemplate'
import Layout from '../components/Layout'
import Tags from '../components/SiteTags'
import TechLogos from '../components/TechLogos'
import config from '../../_data/config'
import Cloudinary from '../components/Cloudinary'
import UploadWidget from '../components/Cloudinary/UploadWidget'
import Video from '../components/Video'
import Contact from '../components/ContactForm'
import Fork from '../components/GithubButtonsRepo/fork'
import Issues from '../components/GithubButtonsRepo/issues'
import { Styledh1 } from '../components/styles/ArticleStyles'
import CustomImage from "../components/CustomImage"

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    'interactive-cloudinary': Cloudinary,
    'interactive-contact': Contact,
    'interactive-fork': Fork,
    'interactive-issues': Issues,
    'interactive-upload-widget': UploadWidget,
    'custom-image': CustomImage,
    'interactive-cloudinary-video': Video,
  },
}).Compiler

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  const postNode = data.markdownRemark
  const coverHeight = '100%'
  const author = config.author
  const logo = config.siteLogo
  const image = post.frontmatter.cover
  const title = post.frontmatter.title
  const showToc = post.frontmatter.showToc
  const showTags = post.frontmatter.showTags
  const url = typeof window !== 'undefined' ? window.location.href : '';

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: url,
    inLanguage: config.siteLanguage,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    description: config.siteDescription,
    name: title,
    author: {
      '@type': 'Person',
      name: 'donaldboulton',
    },
    copyrightHolder: {
      '@type': 'Person',
      name: 'donaldboulton',
    },
    copyrightYear: config.copyrightYear,
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
    dateModified: '2020-04-12T10:30:00+01:00',
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
        <meta name='image' content={image} />
        <meta name='url' content={url} />
        <meta name='author' content={author} />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={post.frontmatter.title} />
        <meta property='og:description' content={post.frontmatter.meta_description} />
        <meta property='og:image' content={image} />
        <meta property='og:image:alt' content={post.frontmatter.meta_title} />
        <meta property='og:image:width' content='100%' />
        <meta property='og:image:height' content='400px' />
        <meta property='og:url' content={url} />
        <meta name='rel' content={url} />
        <meta name='key' content={url} />
        <meta name='twitter:author' content='donboulton' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={post.frontmatter.title} />
        <meta name='twitter:image' content={image} />
        <meta name='twitter:description' content={post.frontmatter.meta_description} />
        <meta name='twitter:widgets:autoload' content='off' />
        <meta name='twitter:widgets:theme' content='dark' />
        <meta name='twitter:widgets:link-color' content='#d64000' />
        <meta name='twitter:widgets:border-color' content='#000000' />
        <meta name='twitter:dnt' content='on' />
        <link rel='canonical' href={url} />
        <link rel='image_src' href={`${config.siteUrl}${config.logo}`} />
        <link rel='me' href='https://twitter.com/donboulton' />
        {/* Schema.org tags */}
        <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>
      </Helmet>
      <section className='post-cover'>
        <PostCover
          postNode={postNode}
          coverHeight={coverHeight}
          coverClassName='post-cover'
        />
      </section>
      <PageBody as='div' className='content'>
        <BodyWrapper>
          <Styledh1>
            {post.frontmatter.title}
          </Styledh1>
          <Bio />
          <main>{renderAst(postNode.htmlAst)}</main>
          <AboutPageTemplate
            content={postNode.html}
            contentComponent={HTMLContent}
            date={post.frontmatter.date}
            title={post.frontmatter.title}
            cover={post.frontmatter.cover}
            meta_title={post.frontmatter.meta_title}
            meta_description={post.frontmatter.meta_description}
            secure_url={post.frontmatter.secure_url}
            tags={post.frontmatter.tags}
            showToc={post.frontmatter.showToc}
            showTags={post.frontmatter.showTags}
            showAdds={post.frontmatter.showAdds}
          />
          <hr
            style={{
              marginBottom: 2,
            }}
          />
          <div>
            <TechLogos />
          </div>
        </BodyWrapper>
        <TocWrapper>
          {showToc && <Toc />}
          {showTags && <Tags />}
        </TocWrapper>
      </PageBody>
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    helmet: PropTypes.object,
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      htmlAst
      excerpt(pruneLength: 200, truncate: true) 
      frontmatter {
        date(formatString: "MMM D, YYYY")
        title
        path
        slug
        meta_title
        meta_description
        secure_url
        tags
        showToc
        showTags
        showAdds
        cover
      }
    }
  }
`
