import React from 'react'
import Nav from '../Nav'
import { HeaderContainer, Logo } from './styles'
import Brand from './Brand'
import Toggle from '../DarkMode/DarkModeToggle'
import Login from '../Login'
import Search from '../Search'
import Tags from '../SiteTags'

const searchIndices = [
  { name: `Posts`, title: `Blog Posts`, type: `postHit` },
]

const Header = () => {
  return (
    <>
      <HeaderContainer id='header'>
        <Logo to='/' title='Publius Logic' rel='home'>
          <Brand
            css='grid-area: title;'
          />
        </Logo>
        <Nav
          css='grid-area: nav;'
        />
        <Toggle
          css='grid-area: toggle;'
        />
        <Tags
          css='grid-area: tags;'
        />
        <Login
          css='grid-area: login;'
        />
        <Search collapse indices={searchIndices} css='grid-area: search;' />
      </HeaderContainer>
    </>
  )
}

export default Header
