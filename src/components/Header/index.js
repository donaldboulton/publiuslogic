import React from 'react'
import Nav from '../Nav'
import { HeaderContainer, Logo } from './styles'
import Brand from './Brand'
import Toggle from '../DarkMode/DarkModeToggle'
import Login from '../Login'
import SiteTags from '../SiteTags'
import Search from '../Search'

const searchIndices = [
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
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
        <SiteTags
          css='grid-area: tags;'
        />
        <Login
          css='grid-area: login;'
        />
        <Search collapse indices={searchIndices} type='search' className='luna__input' css='grid-area: search; place-self: end;' />
      </HeaderContainer>
    </>
  )
}

export default Header
