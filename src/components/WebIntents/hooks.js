import { useStaticQuery, graphql } from 'gatsby'

export const pageQuery = () => {
  const { post } = useStaticQuery(
    graphql`
      query Article {
        markdownRemark {
          id          
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            cover
            categorys
            meta_title
            meta_description
            tweet_id
            tags
        }
      }
    }
    `
  )
  return post.postMetadata
}
