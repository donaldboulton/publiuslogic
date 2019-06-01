import React from 'react'
import useForm from './useForm'
import validate from './FormValidationRules'

const ContactForm = () => {
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
    <>
      <form
        name='contact'
        method='post'
        action='/contact/success'
        encType='application/x-www-form-urlencoded'
        data-netlify='true'
        data-netlify-recaptcha='true'
        onSubmit={handleSubmit}
        noValidate
      >
        <input type='hidden' name='form-name' value='contact' />
        <div className='field'>
          <label className='label'>Email Address</label>
          <div className='control'>
            <input autoComplete='off' className={`input is-large ${errors.email && 'is-danger'}`} type='email' name='email' onChange={handleChange} value={values.email || ''} />
            {errors.email && (
              <p className='help is-danger'>{errors.email}</p>
            )}
          </div>
        </div>
        <div className='field'>
          <label className='label'>Name</label>
          <div className='control'>
            <input className={`input is-large ${errors.name && 'is-danger'}`} type='text' name='name' onChange={handleChange} value={values.name || ''} />
          </div>
          {errors.name && (
            <p className='help is-danger'>{errors.name}</p>
          )}
        </div>
        <div className='field'>
          <label className='label'>Message</label>
          <div className='control'>
            <textarea className='textarea is-large' type='text' name='message' rows='5' />
          </div>
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
    </>
  )
}

export default ContactForm
