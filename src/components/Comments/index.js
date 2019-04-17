import React from 'react'
import CommentForm from './comment'
import logo from '../../img/logo.png'

class Comments extends React.Component {
  render () {
    return (
      <div>
        <section className='section'>
          <div className='container'>
            <div>
              <h3>Comments</h3>
            </div>
            <div className='columns is-10 is-offset-1'>
              <div className='column is-three-fifths'>
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
