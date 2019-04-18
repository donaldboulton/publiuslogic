import React, { PureComponent } from 'react'
import GitHubButton from 'react-github-btn'

// eslint-disable-next-line valid-typeof
if (typeof window !== undefined) { require('react-github-btn') }

class GitHubIssues extends PureComponent {
  render () {
    return (
      <GitHubButton href='https://github.com/donaldboulton/publiuslogic/issues' className='button is-primary is-small' data-size='large' data-show-count='true' aria-label='Issue donaldboulton/publiuslogic on GitHub'>Issue</GitHubButton>
    )
  }
}

export default GitHubIssues

