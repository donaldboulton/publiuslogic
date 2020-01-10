import { useStaticQuery, graphql } from 'gatsby'

export const usePrevNext = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          next {
            fields {
              slug
            }
            frontmatter {
              title
              cover
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              cover
              title
            }
          }
        }
      }
    }
  `)
  return data.usePrevNext
}

