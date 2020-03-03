import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import fetch from 'node-fetch'

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
  To Include Recaptcha V3
  https://github.com/netlify/code-examples/blob/master/forms/html-invisible-recaptcha.html
*/

const Form = styled.form`
  overflow-x: auto;
`

const Name = styled.input`
  padding:10px;
  margin:0 0 20px;
  border-radius: 6px;
  width:100%;
`

const Email = styled.input`
  padding:10px;
  margin:0 0 20px;
  border-radius: 6px;
  width:100%;
`

const Message = styled.textarea`
  padding:10px;
  border: 1px solid #434040;
  margin:0 0 20px;
  border-radius: 6px;
  width:100%;
  height: 220px;
`

const Submit = styled.button`
  padding: 15px 30px;
  margin: 0 0 20px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border-radius: 6px;
`

const ModalButton = styled.button`
  border:solid 1px #ccc;
  padding:15px 30px;
  margin:0 0 20px;
  text-transform:uppercase;
  font-weight:bold;
  cursor:pointer;
  border-radius:4px;
  background: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.2)));
  background: linear-gradient(180deg,rgba(0,0,0,.5),rgba(0,0,0,.2));
  background-color: linear-gradient(180deg,rgba(0,0,0,.5),rgba(0,0,0,.2));
  color: #fff;
`

const Modal = styled.div`
  background: #1d1d1d;
  color: #ccc;
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 30;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`

const ModalOverlay = styled.div`
  top:0;
  left:0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 30;
  background-color: rgba(0,0,0,0.3);
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
class ContactForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      showModal: false,
      submitting: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    this.setState({
      submitting: true,
    })
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: true,
      submitting: false,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render () {
    return (
      <Form
        name='contact-form'
        onSubmit={this.handleSubmit}
        data-netlify='true'
        data-netlify-honeypot='bot'
        overlay={this.state.showModal}
        onClick={this.handleCloseModal}
        netlify-recaptcha
      >
        <input aria-label='hidden do not fill this out' type='hidden' name='form-name' value='contact' />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name='bot' onChange={this.handleInputChange} />
          </label>
        </p>
        <label htmlFor='name' className='label'>Name</label>
        <Name
          name='name'
          className='input'
          id='name'
          type='text'
          title='Name'
          aria-label='Your Name'
          aria-required='true'
          placeholder='Full Name'
          value={this.state.name}
          onChange={this.handleInputChange}
          required
          disabled={this.state.submitting}
        />
        <label htmlFor='email' className='label'>Email</label>
        <Email
          name='email'
          className='input'
          id='email'
          type='email'
          title='Email'
          placeholder='Email'
          aria-label='Your Email'
          aria-required='true'
          value={this.state.email}
          onChange={this.handleInputChange}
          required
          disabled={this.state.submitting}
        />
        <label htmlFor='message' className='label'>Message</label>
        <Message
          name='message'
          className='textarea'
          id='message'
          title='Message'
          type='textarea'
          placeholder='Message'
          aria-label='Message'
          aria-required='true'
          value={this.state.message}
          onChange={this.handleInputChange}
          required
          disabled={this.state.submitting}
        />
        <Submit
          name='submit'
          type='submit'
          aria-label='Submit Message'
          className='g-recaptcha button-form'
          data-sitekey='6Lf0NasUAAAAAAY1WJlMelYekqb_cwziQ4LiNnuk'
          data-callback='onSubmit'
          value={this.state.submitting ? 'Sending...' : 'Send'}
          disabled={this.state.submitting}
        >
          Submit
        </Submit>
        <ModalOverlay onClick={this.handleCloseModal} visible={this.state.showModal} />
        <Modal visible={this.state.showModal}>
          <p>
            Thank you for reaching out. I will get back to you as soon as possible.
          </p>
          <ModalButton aria-label='Close Ok' onClick={this.handleCloseModal}>Okay</ModalButton>
        </Modal>
      </Form>
    )
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
}

export default ContactForm

