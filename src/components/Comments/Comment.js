import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import moment from 'moment'
import Link from 'gatsby-link'
import fetch from 'node-fetch'
import Recaptcha from 'react-google-recaptcha'
import logo from '../../img/logo.png'

class Comments extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isValidated: false }
  }

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value })
    }

    handleRecaptcha = value => {
      this.setState({ 'g-recaptcha-response': value })
    }

    handleSubmit = e => {
      e.preventDefault()
      const form = e.target
      // eslint-disable-next-line
      fetch('/?no-cache=1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...this.state,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        // eslint-disable-next-line
        .catch(error => alert(error))
    }
    render () {
      const siteTitle = get(this, 'props.data.site.siteMetadata.title')
      const comments = get(this, 'props.data.allCommentsYaml.edges')

      comments.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date)
      })

      return (
        <div>
          <section className='section'>
            <div className='container'>
              <div className='columns is-10 is-offset-1'>
                <Helmet title={siteTitle} />
                {comments.map(({ node }) => {
                  const dateString = moment.unix(node.date).format('DD.MM.YYYY HH:mm')
                  return (
                    <div className='column is-half' key={node._id}>
                      <div className='card'>
                        <div className='card-content'>
                          <div className='card-title'>
                            <span className='name'> {name}</span>
                            <span className='email'>&lt;{node.email}&gt;</span>
                            <span className='date'>{dateString}</span>
                          </div>
                        </div>
                        <div className='card-action'>
                          <p>{node.message}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
                <div className='card form'>
                  <h3>Add a comment</h3>
                  <form
                    name='comments'
                    method='POST'
                    action='https://api.staticman.net/v3/entry/donaldboulton/publiuslogic/master/comments'
                    encType='application/x-www-form-urlencoded'
                    data-netlify='true'
                    data-netlify-honeypot='bot-field'
                    data-netlify-recaptcha='true'
                    onSubmit={this.handleSubmit}
                  >
                    <input
                      name='options[id]'
                      type='hidden'
                      value={this.props.pathContext.id}
                    />
                    <div hidden>
                      <label>
                          Don’t fill this out:{' '}
                        <input name='fields[bot-field]' onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className='field'>
                      <label className='label'>Name</label>
                      <div className='control'>
                        <input
                          className='input is-large'
                          placeholder='Your Name *'
                          value='name'
                          name='fields[name]'
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className='field'>
                      <label className='label'>Email</label>
                      <div className='control'>
                        <input
                          className='input is-large'
                          placeholder='youemail@you.com *'
                          value='email'
                          type='email'
                          name='fields[email]'
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className='field'>
                      <label className='label'>Message</label>
                      <div className='control'>
                        <textarea
                          className='textarea is-large'
                          rows='5'
                          placeholder='Enter your comment *'
                          ame='fields[comment]'
                          value='comment'
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className='field'>
                      <Recaptcha
                        ref='recaptcha'
                        sitekey='6Le3cZMUAAAAAEAXmN6cDoJGVUVZ0RzuJlLAj6a-'
                        theme='dark'
                        render='explicit'
                        onloadCallback='Done'
                        onChange={this.handleRecaptcha}
                      />
                    </div>
                    <div className='field is-grouped is-pulled-right'>
                      <div className='control'>
                        <button className='button is-text is-large' type='reset'>Cancel</button>
                      </div>
                      <div className='control'>
                        <button className='button is-primary is-large' type='submit'>Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='column'>
                  <h4>Realtime Comment</h4>
                  <div>
                    <a href='https://publiuslogic.com/privacy'>
                      <img
                        src={logo}
                        alt='PubliusLogic'
                        style={{ width: '330px', height: '330px' }}
                      />
                    </a>
                    <div>
                      <div>All Comments are governed by our!</div>
                      <div className='is-centered'>
                        <Link to='/privacy#Comment Policy/'>
                           Comment Policy
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
}

export default Comments
