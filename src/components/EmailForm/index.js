import React from 'react'
import useForm from './useForm'
import validate from './EmailFormValidationRules'

const EmailForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(contact, validate)

  function contact () {
    console.log('No errors, submit callback called!')
  }

  return (
    <div className='column'>
      <form
        name='contact'
        method='post'
        action='/contact/success'
        encType='application/x-www-form-urlencoded'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        data-netlify-recaptcha='true'
        onSubmit={handleSubmit}
        noValidate
      >
        <input type='hidden' name='form-name' value='contact' />
        <div hidden>
          <label>
              Dont fill this out:{' '}
            <input name='bot-field' />
          </label>
        </div>
        <div className='field'>
          <label className='label'>Email Address</label>
          <div className='control'>
            <input autoComplete='off' className={`input input-control ${errors.email && 'is-danger'}`} type='email' name='email' onChange={handleChange} value={values.email || ''} required />
            {errors.email && (
              <p className='help is-danger'>{errors.email}</p>
            )}
          </div>
        </div>
        <div className='field'>
          <label className='label'>Name</label>
          <div className='control'>
            <input className={`input input-control ${errors.name && 'is-danger'}`} type='text' name='name' onChange={handleChange} value={values.name || ''} required />
          </div>
          {errors.name && (
            <p className='help is-danger'>{errors.name}</p>
          )}
        </div>
        <div className='field'>
          <label className='label'>Message</label>
          <div className='control'>
            <textarea className='textarea input-control' type='text' name='message' rows='4' required />
          </div>
        </div>
        <div className='field'>
          <div className='control'>
            <button className='button is-primary' type='submit'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EmailForm
