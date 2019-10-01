import React, { PureComponent } from 'react'
import GitHubButton from 'react-github-btn'

// eslint-disable-next-line valid-typeof
if (typeof window !== undefined) { require('react-github-btn') }

class GitHubButtonFork extends PureComponent {
  render () {
    return (
      <GitHubButton className='btn' href='https://github.com/donaldboulton/publiuslogic/fork' data-icon='octicon-repo-forked' data-color-scheme='no-preference: dark; light: dark' data-show-count='true' aria-label='Fork donaldboulton/publiuslogic on GitHub'>Fork</GitHubButton>
    )
  }
}

export default GitHubButtonFork
