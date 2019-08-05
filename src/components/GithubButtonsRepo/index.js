import React, { Component, Fragment } from 'react'
import GithubButtonFollow from './follow'
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
            <div className='column'>
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
            </div>
          </Fragment>
        </>
      </ThemeProvider>
    )
  }
}

export default GitHubRepo
