import React, { PureComponent } from 'react'
import GitHubButton from 'react-github-btn'

// eslint-disable-next-line valid-typeof
if (typeof window !== undefined) { require('react-github-btn') }

class GitHubFollow extends PureComponent {
  render () {
    return (
      <GitHubButton href='https://github.com/donaldboulton' className='btn' data-show-count='true' data-color-scheme='no-preference: dark; light: dark' aria-label='Follow @donaldboulton on GitHub'>Follow</GitHubButton>    
    )
  }
}

export default GitHubFollow

