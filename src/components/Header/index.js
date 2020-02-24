import React from 'react'
import Nav from '../Nav'
import { HeaderContainer, Logo } from './styles'
import Brand from './Brand'
import Toggle from '../DarkMode/DarkModeToggle'
import Login from '../Login'

const Header = () => {
  return (
    <>
      <HeaderContainer id='header'>
        <Nav
          css='grid-area: nav;'
        />
        <Logo to='/' title='Publius Logic' rel='home' css='grid-area: title;'>
          <Brand />
        </Logo>
        <Toggle css='grid-area: toggle;' />
        <Login css='grid-area: login;' />
      </HeaderContainer>
    </>
  )
}

export default Header
