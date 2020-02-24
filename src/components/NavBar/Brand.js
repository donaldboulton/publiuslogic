import React from 'react'
import styled from 'styled-components'

import logo from '../../../static/img/apple-touch-icon-64x64.png'

const Brand = () => {
  return (
    <>
      <Image src={logo} alt='Company Logo' />
    </>
  )
}

export default Brand

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`
