import React from 'react'
import GithubButtonFollow from './follow'
import GithubButtonWatch from './watch'
import GithubButtonStar from './star'
import GithubButtonFork from './fork'

require('octicons/index')

const GitHubRepo = () => {
  return (
    <>
      <div
        style={{
          display: `flex`,
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

export default GitHubRepo
