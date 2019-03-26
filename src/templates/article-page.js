import React from 'react'
import 'prismjs/themes/prism-okaidia.css'
import { Prism } from 'prismjs/plugins/toolbar/prism-toolbar.js'
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
(function () {
  if (typeof self === 'undefined' || !self.Prism || !self.document) {
    return
  }

	if (!Prism.plugins.toolbar) {
		console.warn('Copy to Clipboard plugin loaded before Toolbar plugin.')

		return
	}

  var ClipboardJS = window.ClipboardJS || undefined

	if (!ClipboardJS && typeof require === 'function') {
		ClipboardJS = require('clipboard')
	}

	var callbacks = []

	if (!ClipboardJS) {
		var script = document.createElement('script')
		var head = document.querySelector('head')

		script.onload = function () {
			ClipboardJS = window.ClipboardJS

      if (ClipboardJS) {
        while (callbacks.length) {
          callbacks.pop()()
        }
      }
    }

    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js'
    head.appendChild(script)
  }

  Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (env) {
    var linkCopy = document.createElement('a')
    linkCopy.textContent = 'Copy'

    if (!ClipboardJS) {
      callbacks.push(registerClipboard)
    } else {
      registerClipboard()
    }

    return linkCopy

    function registerClipboard () {
      var clip = new ClipboardJS(linkCopy, {
        'text': function () {
          return env.code
        },
      })

      clip.on('success', function () {
        linkCopy.textContent = 'Copied!'

        resetText()
      })
      clip.on('error', function () {
        linkCopy.textContent = 'Press Ctrl+C to copy'

        resetText()
      })
    }

    function resetText () {
      setTimeout(function () {
        linkCopy.textContent = 'Copy'
      }, 5000);
    }
  });
})();

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
