import React, { PureComponent } from 'react'
import GitHubButton from 'react-github-btn'

// eslint-disable-next-line valid-typeof
if (typeof window !== undefined) { require('react-github-btn') }

class GitHubWatch extends PureComponent {
  render () {
    return (
      <GitHubButton href='https://github.com/donaldboulton/publiuslogic/subscription' className='btn is-small' data-icon='octicon-eye' data-show-count='true' aria-label='Watch donaldboulton/publiuslogic on GitHub'>Watch</GitHubButton>
    )
  }
}

export default GitHubWatch

