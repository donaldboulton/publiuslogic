import React from 'react'

const Toggle = ({ checked, onChange }) => (
  <span className='toggle-control'>
    <input
      aria-label='switch'
      className='dmcheck'
      type='checkbox'
      checked={checked}
      onChange={onChange}
      id='dmcheck'
    />
    <label htmlFor='dmcheck' />
  </span>
)

export default Toggle
