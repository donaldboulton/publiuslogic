import { useState, useEffect } from 'react'
const fetch = require('node-fetch')
const Bluebird = require('bluebird')

fetch.Promise = Bluebird

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const useForm = (callback, validate) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])

  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
    callback()
    // fetch and no cache=1 for netlify forms
    const form = event.target
    // eslint-disable-next-line
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...use.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      // eslint-disable-next-line
      .catch(error => alert(error))
  }

  const handleChange = (event) => {
    event.persist()
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
}

export default useForm
