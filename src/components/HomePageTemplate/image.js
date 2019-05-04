import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { generateMedia } from 'styled-media-query'

const media = generateMedia()

const BackgroundSection = ({ className, title, backdrop }) => (
  <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "sunset-kitzeberg-fjord.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
    const imageData = data.desktop.childImageSharp.fluid
    return (
      <StyledWrapper>
        <StyledSymetryWrapper>
          <StyledWelcomeImage
            fluid={imageData}
            backgroundColor='#040e18'
            objectFit='cover'
            objectPosition='50% 50%'
          />
          <StyledTitle>
            <h1>PubliusLogic</h1>
            <small>publiuslogic.com</small>
          </StyledTitle>
        </StyledSymetryWrapper>
      </StyledWrapper>
    )
  }
  }
  />
)

const StyledSymetryWrapper = styled.div`
  width: 100vw;
  height: 400px;
  overflow: hidden;
`
const StyledWelcomeImage = styled(Img)`
  width: 100vw;
  height: 400px;
`
const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  
  ${media.lessThan('large')`
    background-size: cover;
      &:after, &:before {
      background-size: contain;
    }
  `}
  
  // For pseudo-elements you have to overwrite the default options (see style={{}} above).
  // See: https://github.com/timhagn/gatsby-background-image/#styling--passed-through-styles 
  //&:after, &:before {
  //   background-clip: content-box;
  //   background-size: contain;
  //}
`

export const StyledTitle = styled.div`
  text-align: center;
  font-size: 1.5em;
  font-color: #fff;
  margin: 1em;
`
const StyledWrapper = styled.div`
  width: 100vw;
  height: 400px;
  display: flex;
  overflow: hidden;
  // This is an example how to target the pseudo-elements via classId (deprecated):
  //.gatsby-background-image-gbi:after, .gatsby-background-image-gbi:before {
  //  background-clip: content-box;
  //}
`

export default StyledBackgroundSection
