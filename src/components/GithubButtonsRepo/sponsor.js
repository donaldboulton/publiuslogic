import React, { PureComponent } from 'react'
import GitHubButton from 'react-github-btn'

// eslint-disable-next-line valid-typeof
if (typeof window !== undefined) { require('react-github-btn') }

class GitHubButtonSponsor extends PureComponent {
  render () {
    return (
      <GitHubButton href='https://github.com/sponsor/donaldboulton' data-icon='octicon-heart' data-color-scheme='no-preference: dark; light: dark' data-size='large' aria-label='Sponsor donaldboulton/publiuslogic on GitHub'>Sponsor</GitHubButton>
    )
  }
}

export default GitHubButtonSponsor

