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
            <Styledh1>
              PubliusLogic
            </Styledh1>
            <Styledh2>
              publiuslogic.com
            </Styledh2>
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
  z-index: 1;
  background-clip: border-box;
  background-origin: border-box;
  position: absolute !important;
`
const StyledBackgroundSection = styled(BackgroundSection)`
  position: relative;
  text-align: center;
  color: white;
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
  z-index: 20;
  box-sizing: border-box;
  display: grid;
    -webkit-box-pack: center;
    justify-content: center;
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
const Styledh1 = styled.h1`
  display: inline-block;
  font-size: 80px;
  line-height: 0.9;
  padding: 20px;
  font-family: 'Bowlby', sans-serif;
  text-transform: uppercase;
  z-index: 22;
  background: radial-gradient(
    circle farthest-corner at center center,
    white,
    #111
  ) no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`
const Styledh2 = styled.h2`
  display: inline-block;
  font-size: 50px;
  line-height: 0.9;
  padding: 20px;
  font-family: 'Bowlby', sans-serif;
  z-index: 22;
  background: radial-gradient(
    circle farthest-corner at center center,
    #da1b60,
    #fc9a48
  ) no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`
export default StyledBackgroundSection
