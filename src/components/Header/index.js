import React, { Component } from 'react'
import NavBar from '../NavBar'
import SlideMenu from '../SlideMenu'

class Header extends Component {
  render () {
    return (
      <>
        <NavBar />
        <SlideMenu />
      </>
    )
  }
}

export default Header
