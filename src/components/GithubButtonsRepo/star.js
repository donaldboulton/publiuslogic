import React, { PureComponent } from 'react'
import GitHubButton from 'react-github-btn'

// eslint-disable-next-line valid-typeof
if (typeof window !== undefined) { require('react-github-btn') }

class GitHubStar extends PureComponent {
  render () {
    return (
      <GitHubButton href='https://github.com/donaldboulton/publiuslogic' className='btn' data-icon='octicon-star' data-color-scheme='no-preference: dark; light: dark' data-show-count='true' aria-label='Star donaldboulton/publiuslogic on GitHub'>Star</GitHubButton>
    )
  }
}

export default GitHubStar

