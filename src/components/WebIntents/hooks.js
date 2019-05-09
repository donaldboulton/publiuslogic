import { useStaticQuery, graphql } from 'gatsby'

export const pageQuery = () => {
  const { post } = useStaticQuery(
    graphql`
      query Article {
        markdownRemark {
          id          
          frontmatter {
            title
            tweet_id
        }
      }
    }
    `
  )
  return post.postMetadata
}
