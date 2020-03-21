import React from 'react'
import GithubButtonFollow from './follow'
import GithubButtonWatch from './watch'
import GithubButtonStar from './star'

require('octicons/index')

const GitHubRepo = () => {
  return (
    <>
      <div className='field is-grouped has-addons'>
        <p className='control'>
          <GithubButtonStar />
        </p>
        <p className='control'>
          <GithubButtonFollow />

        </p>
        <p className='control'>
          <GithubButtonWatch />
        </p>
      </div>
    </>
  )
}

export default GitHubRepo
