import React from 'react'
import GithubButtonFollow from './follow'
import GithubButtonWatch from './watch'
import GithubButtonStar from './star'
import GithubButtonFork from './fork'

require('octicons/index')

const GitHubRepo = () => {
  return (
    <>
      <div className='field is-grouped has-addons'>
        <p className='control'>
          <GithubButtonFollow />
        </p>
        <p className='control'>
          <GithubButtonWatch />
        </p>
        <p className='control'>
          <GithubButtonStar />
        </p>
        <p className='control'>
          <GithubButtonFork />
        </p>
      </div>
    </>
  )
}

export default GitHubRepo
