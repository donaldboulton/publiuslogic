import React, { PureComponent } from 'react'
import GitHubButton from 'react-github-btn'

class GitHubStarButton extends PureComponent {
  render () {
    return (
      <GitHubButton className='button is-primary is small' href='https://github.com/donaldboulton/publiuslogic' data-icon='octicon-star' data-show-count='true' aria-label='Star ntkme/Publiuslogic GitHub'>Star</GitHubButton>      
    )
  }
}

export default GitHubStarButton

