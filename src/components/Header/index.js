import React, { Component } from 'react'
import NavBar from '../NavBar'
import { HeaderContainer, Logo } from './styles'
import DarkModeToggle from '../DarkMode/DarkModeToggle'
import logo from '../../../static/img/apple-touch-icon-46x46.png'
import config from '../../../_data/config'

class Header extends Component {
  render () {
    return (
      <HeaderContainer className='navbar is-fixed-top'>
        <Logo to='/' title={config.siteTitle} rel='home'>
          <img itemProp='image' src={logo} alt='Publiuslogic' />
        </Logo>
        <DarkModeToggle />
        <NavBar />
      </HeaderContainer>
    )
  }
}

export default Header
