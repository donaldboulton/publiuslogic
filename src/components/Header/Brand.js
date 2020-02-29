import React from 'react'
import styled from 'styled-components'

import logo from '../../../static/img/apple-touch-icon-46x46.png'

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
  color: inherit;
`
