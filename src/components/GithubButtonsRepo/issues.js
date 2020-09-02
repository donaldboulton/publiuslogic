import React, { PureComponent } from 'react'
import GitHubButton from 'react-github-btn'

// eslint-disable-next-line valid-typeof
if (typeof window !== undefined) { require('react-github-btn') }

class GitHubIssues extends PureComponent {
  render () {
    return (
      <GitHubButton href='https://github.com/donaldboulton/publiuslogic/issues' data-size='large' data-show-count='true' data-color-scheme='no-preference: dark; light: dark' aria-label='Issue donaldboulton/publiuslogic on GitHub'>Issues</GitHubButton>
    )
  }
}

export default GitHubIssues

