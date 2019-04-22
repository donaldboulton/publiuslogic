import React from 'react'
import useForm from './useForm'
import validate from './FormValidationRules'

const ShareForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(post, validate)

  function post () {
    console.log('No errors, submit callback called!')
  }

  return (
    <div className='column is-8'>
      <div>
        <h2>Contact us if you have found an error</h2>
      </div>
      <div className='box'>
        <form
          name='ShareForm'
          method='post'
          action='/contact/success'
          encType='application/x-www-form-urlencoded'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
          data-netlify-recaptcha='true'
          onSubmit={handleSubmit}
          noValidate
        >
          <input type='hidden' name='form-name' value='email' />
          <div hidden>
            <label>
                  Don not fill this out:{' '}
              <input name='bot-field' onChange={handleChange} />
            </label>
          </div>
          <div className='field'>
            <label className='label'>Full Name</label>
            <div className='control'>
              <input className='input' type='text' placeholder='Full Name' name='name' id='name' onChange={handleChange} value={values.name} required />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Email</label>
            <div className='control'>
              <input autoComplete='off' className={`input ${errors.email && 'is-danger'}`} type='email' name='email' onChange={handleChange} value={values.email || ''} required />
              {errors.email && (
                <p className='help is-danger'>{errors.email}</p>
              )}
            </div>
          </div>

          <div className='field'>
            <label className='label'>Message</label>
            <div className='control'>
              <textarea className='textarea' name='message' rows='5' id='message' onChange={handleChange} value={values.message} required />
            </div>
          </div>
          <br />
          <div className='field is-grouped is-pulled-right'>
            <div className='control'>
              <button className='button is-text' type='reset'>Cancel</button>
            </div>
            <div className='control'>
              <button className='button is-primary' type='submit'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}

export default ShareForm
