import React from 'react'
import { Link } from 'gatsby'
import CommentForm from './comments'
import GitHubIssues from '../GithubIssues'
import logo from '../../../static/img/logo.png'

const Comments = () => {
  return (
    <section>
      <div>
        <h3>Comments</h3>
        <GitHubIssues />
      </div>
      <div
        style={{
          display: `flex`,
        }}
      >
        <CommentForm />
        <div>
          <h4>Messaging</h4>
          <Link href='/privacy/#Comment-Policy'>
            <img
              src={logo}
              alt='PubliusLogic'
              style={{ width: '130px', height: '130px' }}
            />
          </Link>
          <div>
            <div className='is-centered'>
              <Link href='/privacy#Comment Policy/'>
                Submitting Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comments
