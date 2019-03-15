import React from 'react'
import signin from '../../img/sign-in-alt.svg'
import netlifyIdentity from './netlify-identity.js'

export default class netlifyIdentityWidget extends React.Component {
  componentDidMount () {
    netlifyIdentity.init()
  }
  constructor () {
    super()

    this.handleLogIn = this.handleLogIn.bind(this)
  }

  handleLogIn () {
    netlifyIdentity.open()
  }

  render () {
    return (
      <div className='hidden'>
        <button id='mySigninBtn' className='link-like is-primary' type='button' onClick={this.handleLogIn} >
          <img src={signin} className='icon' alt='Login' />
        </button>
      </div>
    )
  }
}
