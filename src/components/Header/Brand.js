import React from 'react'
import styled from 'styled-components'

import logo from '../../../static/img/apple-touch-icon-64x64.png'

const Brand = ({ title }) => {
  return (
    <>
      <Image src={logo} alt='PubliusLogic' />
    </>
  )
}

export default Brand

const Image = styled.img`
  grid-area: title;
  font-size: 2.4em;
  transform: scale(1, 0.85);
  color: inherit;
`
