import React, { PureComponent } from 'react'

if (typeof window !== undefined) { const GitHubButton = require('react-github-btn') }

class GitHubButton extends PureComponent {
  render () {
    return (
      <GitHubButton className='button is-primary is-small' href='https://github.com/donaldboulton/publiuslogic' data-icon='octicon-star' data-show-count='true' aria-label='Star ntkme/Publiuslogic GitHub'>Star</GitHubButton>      
    )
  }
}

export default GitHubButton

