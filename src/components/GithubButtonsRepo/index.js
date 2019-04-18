import React, { PureComponent } from 'react'
import GithubButtonWatch from './watch'
import GithubButtonStar from './star'
import GithubButtonFork from './fork'

class GitHubRepo extends PureComponent {
  render () {
    return (
      <div className='columns is-mobile'>
        <div className='column'>
          <GithubButtonWatch />
        </div>
        <div className='column'>
          <GithubButtonStar />
        </div>
        <div className='column'>
          <GithubButtonFork />
        </div>
      </div>
    )
  }
}

export default GitHubRepo

