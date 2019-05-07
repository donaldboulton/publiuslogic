import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import StackImages from './stack'

const Stack = () => (
  <StaticQuery
    query={graphql`
      query {
        stackImages: allFile(filter: {sourceInstanceName: { eq: "stack" }}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth:200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <StackImages stackImages={data.stackImages.edges} />}
  />
)

export default Stack
