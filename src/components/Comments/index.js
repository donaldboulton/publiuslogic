import React from 'react'
import { Link } from 'gatsby'
import CommentForm from './comments'
import GitHubIssues from '../GithubIssues'
import logo from '../../../static/img/logo.png'

const Comments = () => {
  return (
    <div>
      <section className='section'>
        <div className='container'>
          <div>
            <h3>Comments</h3>
            <GitHubIssues />
          </div>
          <div className='columns is-10 is-offset-1'>
            <div className='column is-10'>
              <CommentForm />
            </div>
            <div className='column'>
              <h4>Messaging</h4>
              <div>
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default Comments
