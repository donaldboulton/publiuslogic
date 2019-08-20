import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Global from '../../components/Global'

const Styledh1 = styled.h1`
  display: inline-block;
  font-size: 38px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  z-index: 22;
  background: radial-gradient(
    circle farthest-corner at center center,
    #8e0436,
    #d64000
  ) no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Global pageTitle={title}>
    <Helmet title={`Tags | ${title}`} />
    <section className='hero'>
      <div className='gatsby-image-wrapper' style='position: relative; overflow: hidden; height: 100%; width: 100%;'>
        <div style='width: 100%; padding-bottom: 24.5758%;' />
        <img src='data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAFABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAHHCwM//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQABBQJ//8QAFREBAQAAAAAAAAAAAAAAAAAAEEH/2gAIAQMBAT8Bh//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEABj8Cf//EABkQAAMAAwAAAAAAAAAAAAAAAAABIRFBYf/aAAgBAQABPyFVjmjPD//aAAwDAQACAAMAAAAQB9//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPxAj/8QAFREBAQAAAAAAAAAAAAAAAAAAEEH/2gAIAQIBAT8Qp//EABkQAQEBAQEBAAAAAAAAAAAAAAERAEExof/aAAgBAQABPxCQJ3IUPHchbP3f/9k=' alt='' style='position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 1; transition-delay: 500ms;' />
        <picture>
          <source type='image/webp' srcSet='/images/contact350w.webp 350w, /images/contact700w.webp 700w, /images/contact1400w.webp 1400w, /images/contact1827w.webp 1827w' sizes='(max-width: 1400px) 100vw, 1400px' />
          <source srcSet='/images/contact350w.jpg 350w, /images/contact700w.jpg 700w, /images/contact1400w.jpg 1400w, /images/contact1827w.jpg 1827w' sizes='(max-width: 1400px) 100vw, 1400px' />
          <img sizes='(max-width: 1400px) 100vw, 1400px' srcSet='/images/contact350w.jpg 350w, /images/contact700w.jpg 700w, /images/contact1400w.jpg 1400w, /images/contact1827w.jpg 1827w' src='/images/contact.jpg' alt='' loading='lazy' style='position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 0; transition: opacity 500ms ease 0s;' />
        </picture>
        <noscript>
          <picture>
            <source type='image/webp' srcSet='/images/contact350w.webp 350w, /images/contact700w.webp 700w, /images/contact1400w.webp 1400w, /images/contact1827w.webp 1827w' sizes='(max-width: 1400px) 100vw, 1400px' />
            <source srcSet='/images/contact350w.jpg 350w, /images/contact700w.jpg 700w, /images/contact1400w.jpg 1400w, /images/contact1827w.jpg 1827w' sizes='(max-width: 1400px) 100vw, 1400px' />
            <img loading='lazy' sizes='(max-width: 1400px) 100vw, 1400px' srcSet='/images/contact350w.jpg 350w, /images/contact700w.jpg 700w, /images/contact1400w.jpg 1400w, /images/contact1827w.jpg 1827w' src='/images/contact.jpg' alt='' style='position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center' />
          </picture>
        </noscript>
      </div>
    </section>
    <div className='column is-10 is-offset-1'>
      <div className='section'>
        <Styledh1>
          All Site Tags
        </Styledh1>
      </div>
    </div>
    <section className='section'>
      <div className='container content'>
        <div className='columns'>
          <div
            className='column is-10 is-offset-1'
            style={{ marginBottom: '6rem' }}
          >
            <ul className='taglist field is-grouped is-grouped-multiline'>
              {group.map(tag => (
                <li className='control' key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    <div className='tags has-addons is-large'>
                      <span className='tag is-primary'>{tag.fieldValue}</span>
                      <span className='tag is-dark'>{tag.totalCount}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Global>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
