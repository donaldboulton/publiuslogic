import React, { Component } from 'react'
import { Link } from 'gatsby'
import config from '../../_data/config'
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
    let logo = config.siteLogo

    const blogSchemaOrgJSONLD = {
      '@context': 'http://schema.org',
      '@type': 'Blog',
      url: 'https://publiuslogic.com/blog',
      name: 'Blog | PubliusLogic',
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
      inLanguage: 'en_US',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://publiuslogic.com/blog',
      },
      description: 'List Of PubliusLogic Posts',
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
        'logo': {
          '@type': 'ImageObject',
          url: logo,
          width: '450px',
          height: '450px',
        },
      },
      datePublished: '2018-07-12T10:30:00+01:00',
      dateModified: '2019-07-12T10:30:00+01:00',
      image: {
        '@type': 'ImageObject',
        url: 'https://res.cloudinary.com/mansbooks/image/upload/v1559828638/photos/support.webp',
      },
    }

    return (
      <Global pageTitle={config.siteTitleAlt}>
        <Helmet>
          <title>Blog | Publius Logic</title>
          <meta name='description' content='Blog | Publius Logic' />
          <meta name='keywords' content='PubliusLogic, Blog, Posts' />
          <meta name='image' content='https://res.cloudinary.com/mansbooks/image/upload/v1559828638/photos/support.webp' />
          <meta name='url' content='https://publiuslogic.com/blog' />
          <meta name='author' content='donaldboulton' />
          <meta property='og:type' content='blog' />
          <meta property='og:title' content='https://publiuslogic.com/blog' />
          <meta property='og:description' content='PubliusLogic Blog Posts' />
          <meta property='og:image' content='https://res.cloudinary.com/mansbooks/image/upload/v1559828638/photos/support.webp' />
          <meta property='og:image:alt' content='Blog' />
          <meta property='og:image:width' content='100%' />
          <meta property='og:image:height' content='400px' />
          <meta property='og:url' content='https://publiuslogic.com/blog' />
          <meta name='rel' content='https://publiuslogic.com/blog' />
          <meta name='key' content='https://publiuslogic.com/blog' />
          <meta name='twitter:author' content='donboulton' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content='PubliusLogic Blog Posts' />
          <meta name='twitter:image' content='https://res.cloudinary.com/mansbooks/image/upload/v1559828638/photos/support.webp' />
          <meta name='twitter:description' content='PubliusLogic Blog Posts' />
          <meta name='twitter:widgets:autoload' content='off' />
          <meta name='twitter:widgets:theme' content='dark' />
          <meta name='twitter:widgets:link-color' content='#d64000' />
          <meta name='twitter:widgets:border-color' content='#000000' />
          <meta name='twitter:dnt' content='on' />
          <link rel='canonical' content='https://publiuslogic.com/blog' />
          <link rel='image_src' href={`${config.siteUrl}${config.logo}`} />
          <link rel='me' href='https://twitter.com/donboulton' />
          {/* Schema.org tags */}
          <script type='application/ld+json'>
            {JSON.stringify(blogSchemaOrgJSONLD)}
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
