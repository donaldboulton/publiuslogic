import React from 'react'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'
import { HTMLContent } from '../components/Content'
import ArticleTemplate from '../components/ArticleTemplate'
import SE0 from '../components/SEO'
import Share from '../components/Share'

if (typeof window !== `undefined`) {
  const module = require('prismjs')
}

if (typeof window !== `undefined`) {
  const module = require('prismjs/plugins/toolbar/prism-toolbar.js')
}

Prism.plugins.toolbar.registerButton('hello-world', {
  text: 'Hello World!', // required
  onClick: function (env) { // optional
    alert('This code snippet is written in ' + env.language + '.')
  },
})

Prism.plugins.toolbar.registerButton('select-code', function (env) {
  var button = document.createElement('button')
  button.innerHTML = 'Select Code'

  button.addEventListener('click', function () {
  // Source: http://stackoverflow.com/a/11128179/2757940
    if (document.body.createTextRange) { // ms
      var range = document.body.createTextRange()
      range.moveToElementText(env.element)
      range.select()
    } else if (window.getSelection) { // moz, opera, webkit
      var selection = window.getSelection()
      var range = document.createRange()
      range.selectNodeContents(env.element)
      selection.removeAllRanges()
      selection.addRange(range)
    }
  })

  return button
})

const ArticlePage = ({ data }) => {
  const { markdownRemark: post } = data
  const disqusShortname = 'mansbooks-1'
  const disqusConfig = {
    identifier: post.fields.slug,
    title: post.frontmatter.title,
  }
  return (
    <section className='section'>
      <SE0
        title={post.frontmatter.title}
        meta_title={post.frontmatter.meta_title}
        meta_desc={post.frontmatter.meta_description}
        cover={post.frontmatter.cover}
        slug={post.fields.slug}
      />
      <div className='container content'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <ArticleTemplate
              content={post.html}
              contentComponent={HTMLContent}
              cover={post.frontmatter.cover}
              meta_title={post.frontmatter.meta_title}
              meta_desc={post.frontmatter.meta_description}
              tags={post.frontmatter.tags}
              title={post.frontmatter.title}
            />
            <Share
              title={post.frontmatter.title}
              slug={post.fields.slug}
              excerpt={post.frontmatter.meta_description}
            />
            <hr />
            <div itemScope itemType='https://schema.org/UserComments'>
              <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
          </div>
        </div>
      </div>
    </section>
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
      html
      fields {
            slug
          }
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
