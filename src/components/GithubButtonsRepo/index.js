import React, { Component, Fragment } from 'react'
import GithubButtonWatch from './watch'
import GithubButtonStar from './star'
import GithubButtonFork from './fork'
import { ThemeProvider } from 'styled-components'
import theme from './buttons.css'

class GitHubRepo extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Fragment>
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
          </Fragment>
        </>
      </ThemeProvider>
    )
  }
}

export default GitHubRepo

