import React, { PureComponent } from 'react'
import GitHubButton from 'react-github-btn'

// eslint-disable-next-line valid-typeof
if (typeof window !== undefined) { require('react-github-btn') }

class GitHubFollow extends PureComponent {
  render () {
    return (
      <GitHubButton href='https://github.com/donaldboulton' className='btn is-small' data-show-count='true' aria-label='Follow @donaldboulton on GitHub'>Follow @donaldboulton</GitHubButton>    
    )
  }
}

export default GitHubFollow

