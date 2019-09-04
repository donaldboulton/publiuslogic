import React from 'react'
import CommentForm from './comments'
import GitHubIssues from '../GithubIssues'
import logo from '../../assets/img/logo.png'

class Comments extends React.Component {
  render () {
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
                  <a href='https://publiuslogic.com/privacy'>
                    <img
                      src={logo}
                      alt='PubliusLogic'
                      style={{ width: '130px', height: '130px' }}
                    />
                  </a>
                  <div>
                    <div>Governed by our!</div>
                    <div className='is-centered'><a href='/privacy#Comment Policy/'>Submitting Policy</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Comments
