import React, { Component } from 'react'

class ContactFormWidget extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: '',
        sent: false,
        error: false,
      };
  
    onInputChange(e) {
      this.setState({ [e.target.name]: e.target.value })
    }
  
    onFormSubmit(e) {
      e.preventDefault();
      const gatewayUrl = '/.netlify/functions/SlackMessages/';
      fetch(gatewayUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: {this.state.name},
          email: {this.state.email},
          message: {this.state.message}
      }).then(
        () => { this.setState({ sent: true }); },
        () => { this.setState({ error: true }); }  }
      );
    }
  
    render() {
      const isFormFilled = this.state.name && this.state.email && this.state.message;
      const confirmationText =
        (this.props.widget.get('confirmationText') ||
        'Thanks for you comment') +
        `, ${this.state.name}!`;
      if (this.state.sent) {
        return (
          <div className='alert is-success'>
            <strong>{ confirmationText }</strong>
          </div>
        );
      }
      return (
          <div className='column component-section'>          
            <div className='col-md-5'>
              <form onSubmit={ this.onFormSubmit } className='form'>
                <div className='field'>
                  <label>Name:</label>
                  <div className='control'>
                  <input onChange={ this.onInputChange }
                    type='text' name='name' className='input input-control' required
                  />
                  </div>
                </div>
                <div className='field'>
                  <label>Email:</label>
                  <div className='control'>
                  <input onChange={ this.onInputChange }
                    type='email' name='email' className='input input-control' required
                  />
                  </div>
                </div>
                <div className='field'>
                  <label>Message:</label>
                  <div className='control'>
                  <input onChange={ this.onInputChange }
                    type='text' name='message' className='input input-control' required
                  />
                  </div>
                </div>
                <p>
                  <small className={ `${isFormFilled ? 'invisible' : ''}` }>
                    Please fill in all fields.
                  </small>
                </p>
                { this.state.error &&
                  <p>An error occurred. Please try again later.</p>
                }
                <button type='submit' className={ `button is-primary${isFormFilled ? '' : ' disabled'}` }>
                  { this.props.widget.get('buttonText') || 'Message' }
                </button>
              </form>
            </div>       
        </div>   
      )
    }
  }

