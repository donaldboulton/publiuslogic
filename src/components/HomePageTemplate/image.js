import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import HeroText from '../Hero/HeroText'
import mediaQuery from '../../utils/mediaQuery'

const BackgroundSection = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "sunset-kitzeberg-fjord.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <StyledWrapper className='item-b'>
          <StyledSymetryWrapper>
            <StyledWelcomeImage
              fluid={imageData}
              backgroundColor='#040e18'
              objectFit='cover'
              objectPosition='50% 50%'
            />
            <StyledTitle>
              <Styledh1>
                <HeroText />
              </Styledh1>
            </StyledTitle>
          </StyledSymetryWrapper>
        </StyledWrapper>
      )
    }}
  />
)

const StyledSymetryWrapper = styled.div`
  width: 100vw;
  height: 400px;
  grid-area: post-cover;
`
const StyledWelcomeImage = styled(Img)`
  width: 100vw;
  height: 400px;
  z-index: 1;
  background-clip: border-box;
  background-origin: border-box;
  position: absolute;
`
const StyledBackgroundSection = styled(BackgroundSection)`
  position: relative;
  text-align: center;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  ${mediaQuery.desktop} {
    background-size: cover;
      &:after, &:before {
      background-size: contain;
    }
  }
`
export const StyledTitle = styled.div`
  text-align: center;
  font-size: 1.5em;
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
`
const Styledh1 = styled.h1`
  display: inline-block;
  font-size: 60px;
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
export default StyledBackgroundSection
