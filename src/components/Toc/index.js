import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { TocTitle, TocLink, TocDiv } from '../styles/ArticleStyles'

const Toc = ({ data, value, title }) => (
  <TocDiv>
    <nav>
      <TocLink
        key={data.headings.value}
        to={data.headings.title}
      >
        <TocTitle>
          {data.headings.title}
        </TocTitle>
      </TocLink>
    </nav>
  </TocDiv>
)

export default props => (
  <StaticQuery
    query={graphql`
      query  {
        allMarkdownRemark {
          nodes {
            headings(depth: h6) {
              depth
              value
            }
          }
        }
      }
    `}
    render={data => <Toc data={data} {...props} />}
  />
)

Toc.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      headings: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
