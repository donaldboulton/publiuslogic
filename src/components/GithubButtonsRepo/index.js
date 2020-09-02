import React from 'react'
import GithubButtonFollow from './follow'
import GithubButtonWatch from './watch'
import GithubButtonIssues from './issues'
import GithubButtonSponsor from './sponsor'
import GithubButtonStar from './star'
import GithubButtonFork from './fork'
import { GithubButtonsWrapper } from './styles'

require('@primer/octicons-react')

const GitHubRepo = () => {
  return (
    <>
      <div
        className='social-links'
      >
        <GithubButtonsWrapper>
          <span
            css='grid-area: sponsor;'
          >
            <GithubButtonSponsor />
          </span>
          <span
            css='grid-area: issues;'
          >
            <GithubButtonIssues />
          </span>
          <span
            css='grid-area: follow;'
          >
            <GithubButtonFollow />
          </span>
          <span
            css='grid-area: watch;'
          >
            <GithubButtonWatch />
          </span>
          <span
            css='grid-area: star;'
          >
            <GithubButtonStar />
          </span>
          <span
            css='grid-area: fork;'
          >
            <GithubButtonFork />
          </span>
        </GithubButtonsWrapper>
      </div>
    </>
  )
}

export default GitHubRepo
