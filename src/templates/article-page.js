import React from 'react'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import ArticleTemplate from '../components/ArticleTemplate'
import Seo from '../components/SEO'
import Img from 'gatsby-image'
import Share from '../components/Share'
import Comments from '../components/Comments'
import Global from '../components/Global'

const ArticlePage = props => {
  const {
    location,
    data: {
      site: { siteMetadata },
      markdownRemark: { html, frontmatter, description },
    },
  } = props
  const { siteUrl, twitterUserName, author } = siteMetadata
  const url = `${siteUrl}${location.pathname}`
  const imageURL = `${siteUrl}${frontmatter.cover.childImageSharp.resize.src}`
  const { title: postTitle, date, keywords } = frontmatter
  
  return (
    <Global title={frontmatter.title}>
      <section className='hero'>
        <div>
          <Img fluid={frontmatter.cover.childImageSharp.fluid} />
        </div>
      </section>
      <section className='section'>
        <Seo
          description={description}
          keywords={keywords}
          url={url}
          imageURL={imageURL}
          siteName={siteUrl}
          author={author}
          twitterUserName={twitterUserName}
        />
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <ArticleTemplate
                cover={frontmatter.cover}
                content={html}
                contentComponent={HTMLContent}
                categorys={frontmatter.categorys}
                date={date}
                tweet_id={frontmatter.tweet_id}
                meta_title={frontmatter.meta_title}
                meta_desc={frontmatter.meta_description}
                tags={frontmatter.tags}
                title={frontmatter.title}
              />
              <Share
                title={frontmatter.title}
                slug={url}
                excerpt={frontmatter.meta_description}
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
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        twitterUserName
      }
    }
    markdownRemark(fields: { id: { eq: $id } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        keywords
        date(formatString: "DD MMMM, YYYY")
        cover {
          childImageSharp {
            resize(width: 1200, height: 450) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
