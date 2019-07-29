import React from 'react'
import Helmet from 'react-helmet'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { SitemapCrumbs } from 'gatsby-plugin-breadcrumb'
import { HTMLContent } from '../components/Content'
import ArticleTemplate from '../components/ArticleTemplate'
import Seo from '../components/SEO'
import Share from '../components/Share'
import Comments from '../components/Comments'
import Global from '../components/Global'
import PostCover from '../components/PostCover'

const ArticlePage = ({ data, pageContext, location }) => {
  const { markdownRemark: post } = data
  const postNode = data.markdownRemark
  const {
    breadcrumb: { crumbs },
  } = pageContext
  const title = post.frontmatter.title
  let meta_title = post.frontmatter.meta_title
  let canonical = post.frontmatter.canonical
  let cover = post.frontmatter.cover

  const articleSchemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'Article',
    url: { canonical },
    name: { title },
    image: { cover },
    alternateName: { meta_title },
    mainEntityOfPage: { canonical },
  }                                 

  return (
    <Global pageTitle={post.frontmatter.title} location={location}>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
        <meta name='canonical' content={post.frontmatter.canonical} />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={post.frontmatter.title} />
        <meta property='og:description' content={post.frontmatter.meta_description} />
        <meta property='og:image' content={post.frontmatter.cover} />
        <meta property='og:image:alt' content={post.frontmatter.meta_description} />
        <meta property='og:image:width' content='100%' />
        <meta property='og:image:height' content='400px' />
        <meta property='og:url' content={post.frontmatter.canonical} />
        <meta name='rel' content={post.frontmatter.canonical} />
        <meta name='key' content={post.frontmatter.canonical} />
        {/* Schema.org tags */}
        <script type='application/ld+json'>
          {JSON.stringify(articleSchemaOrgJSONLD)}
        </script>
      </Helmet>
      <Seo
        cover={post.frontmatter.cover}
        title={post.frontmatter.title}
        meta_title={post.frontmatter.meta_title}
        description={post.frontmatter.meta_description}
        url={post.fields.slug}
        image={post.frontmatter.cover}
        postNode={postNode}
        postSEO
        canonical={canonical}
      />
      <section className='hero'>
        <PostCover
          postNode={postNode}
          coverClassName='post-cover'
        />
      </section>
      <SitemapCrumbs crumbs={crumbs} crumbSeparator=' / ' />
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <ArticleTemplate
                content={post.html}
                contentComponent={HTMLContent}
                categorys={post.frontmatter.categorys}
                date={post.frontmatter.date}
                tweet_id={post.frontmatter.tweet_id}
                meta_title={post.frontmatter.meta_title}
                description={post.frontmatter.meta_description}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
              />
              <Share
                title={post.frontmatter.title}
                slug={post.fields.slug}
                excerpt={post.frontmatter.meta_description}
              />
              <hr />
              <Comments />
            </div>
          </div>
        </div>
      </section>
    </Global>
  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ArticlePage

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      timeToRead
      html
      fields {
        slug
      }      
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tweet_id
        categorys
        meta_title
        meta_description
        tags
        cover
        canonical
      }
    }
  }
`
