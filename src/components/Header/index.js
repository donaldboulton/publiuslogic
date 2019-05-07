import React, { Component } from 'react'
import NavBar from '../NavBar'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = { isActive: false }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({ isActive: !this.state.isActive })
  }
  render () {
    return (
      <>                    
        <NavBar isActive={this.state.isActive} toggleNavbar={() => this.toggleNavbar()} />
      </>
    )
  }
}

export default Header
