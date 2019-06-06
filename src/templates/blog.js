import React, { Component } from 'react'
import { Link } from 'gatsby'
import config from '../../data/config'
import Helmet from 'react-helmet'
import PostCard from '../components/PostCard'
import Global from '../components/Global'

const PaginationLink = props => {
  if (!props.test) {
    return (
      <Link to={`/blog/${props.url}`} className='button'>
        {props.text}
      </Link>
    )
  } else {
    return (
      <span disabled className='button'>
        {props.text}
      </span>
    )
  }
}

export default class BlogPage extends Component {
  render () {
    const { pageContext } = this.props
    const { group, index, first, last } = pageContext
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString() + '/'

    const websiteSchemaOrgJSONLD = {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: config.siteUrl,
      name: config.siteTitle,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    }

    return (
      <Global title={config.siteTitle}>
        <Helmet>
          <title>Blog | Publius Logic</title>
          {/* Schema.org tags */}
          <script type='application/ld+json'>
            {JSON.stringify(websiteSchemaOrgJSONLD)}
          </script>
        </Helmet>
        <section className='hero hero-blog-cover'>
          <div className='hero-body'>
            <div className='container'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <div className='section'>
                    <h1 className='title'>
                      Blog
                    </h1>
                    ✨ Listing all Posts.
                    <p>
                        For Refinements see <Link className='is-warning' to={`/categories/`}>Categories</Link> or <Link className='is-warning' to={`/tags/`}>Tags</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section'>
          <PostCard posts={group} />
          <section className='section'>
            <div className='is-pulled-left'>
              <PaginationLink className='arrow-left' test={first} url={previousUrl} text='Previous Page' />
            </div>
            <div className='is-pulled-right'>
              <PaginationLink className='arrow-right' test={last} url={nextUrl} text='Next Page' />
            </div>
          </section>
        </section>
      </Global>
    )
  }
}
