import React from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'
import mediaQuery from '../../utils/mediaQuery'

const StyledTypist = styled(Typist)`
  color: #fff;
  letter-spacing: 14px;
  margin: 0 auto;
  font-size: 52px;
  line-height: 60px;
  z-index: 4;
  font-weight: 100;
  text-transform: uppercase;
  font-family: 'Roboto';
  ${mediaQuery.minPhablet} {
    font-size: 32px;
    line-height: 40px;    
    background-size: 80vw;
      &:after, &:before {
      background-size: contain;
    }
  }
`

class HeroText extends React.Component {
  render () {
    if (this.props.text) {
      return (
        <StyledTypist cursor={{ show: false }} {...this.props}>
          <strong>{this.props.text.split(' ').slice(0, 1)}</strong><br />{this.props.text.split(' ').slice(1).join(' ')}
        </StyledTypist>
      )
    } else {
      return (
        <StyledTypist cursor={{ show: false }} {...this.props}>
          <strong key={1}>I</strong> Make Fast Web Apps
          <Typist.Backspace count={19} delay={1000} />
          <span key={2}> Architect Complex IT Systems</span>
          <Typist.Backspace count={30} delay={1000} />
          <span key={3}> Am Microsoft Certified</span>
          <Typist.Backspace count={23} delay={1000} />
          <span key={4}> Live In OKC OK</span>
          <Typist.Delay ms={300} />
          <span key={5}>.</span>
          <Typist.Delay ms={600} />
          <span key={6}>.</span>
          <Typist.Delay ms={900} />
          <span key={7}>.</span>
          <Typist.Backspace count={20} delay={10} />
          <strong key={8}>But Mostly I Just Do</strong> Awesome Stuff With Web Tech
        </StyledTypist>
      )
    }
  }
}

export default HeroText
