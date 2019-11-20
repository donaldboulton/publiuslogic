import React, { Component } from 'react'
import GithubButtonFollow from './follow'
import GithubButtonWatch from './watch'
import GithubButtonStar from './star'

require('octicons/index')
class GitHubRepo extends Component {
  render () {
    return (
      <>
        <div>
          <GithubButtonFollow />
          <GithubButtonWatch />
          <GithubButtonStar />
        </div>
      </>
    )
  }
}

export default GitHubRepo
