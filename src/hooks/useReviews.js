import { useStaticQuery, graphql } from 'gatsby'

const useReviews = () => {
  const data = useStaticQuery(graphql`
    {
      allRatingsJson(
        filter: { postPath: { ne: "" } }
        sort: { fields: [date], order: ASC }
    ) {
      totalCount
        edges {
          node {
            id
            postPath
            rating
            fields {
              messageHtml
            }
          }
        }
      }
    }
 `)
  return data.useReviews
}

export default useReviews
