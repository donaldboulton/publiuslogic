import React from 'react'
import Nav from '../Nav'
import { HeaderContainer, Logo } from './styles'
import Brand from './Brand'
import Toggle from '../DarkMode/DarkModeToggle'
import Login from '../Login'
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
        <Login
          css='grid-area: login;'
        />
        <Search collapse indices={searchIndices} className='input' css='grid-area: search;' />
      </HeaderContainer>
    </>
  )
}

export default Header
