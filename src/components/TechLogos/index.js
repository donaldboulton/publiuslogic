import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Grid } from '../styles/Grid'

const techLinkCss = `transition: 0.4s; :hover {transform: scale(1.05);}`
const techImageCss = `width: 86px; height : 86px}`

const TechLogos = ({ group, ...rest }) => {
  const data = useStaticQuery(graphql`
  {
    tech: allTechYaml {
      edges {
        node {
          title
          url
          logo {
            src: publicURL
          }
        }
      }
    }
  }
`)
  return (
    <>
      <div>
        <h2>Development Stack and Tools</h2>
        <Grid minWidth='5em' align='center'>
          {data.tech.edges.map(({ node: { title, url, logo } }) => (
            <a key={title} href={url} css={techLinkCss}>
              <span css='font-size: 0.85em;'>{title}</span>
              <img src={logo.src} alt={title} css={techImageCss} />
            </a>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default TechLogos

