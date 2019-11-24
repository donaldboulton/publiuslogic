import React, { Component } from 'react'
import GithubButtonFollow from './follow'
import GithubButtonWatch from './watch'
import GithubButtonStar from './star'
import GithubButtonFork from './fork'

require('octicons/index')
class GitHubRepo extends Component {
  render () {
    return (
      <>
        <div
          style={{
            width: `100%`,
            display: `flex`,
            placeContent: `end`,
          }}
        >
          <GithubButtonFollow />
          <GithubButtonWatch />
          <GithubButtonStar />
          <GithubButtonFork />
        </div>
      </>
    )
  }
}

export default GitHubRepo
