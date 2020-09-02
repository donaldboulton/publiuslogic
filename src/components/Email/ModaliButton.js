import React from 'react'

const ModaliButton = ({ handleClick, children }) => (
  <button aria-label='email' className='button-transparent round mail__ShareButton' onClick={handleClick}>
    {children}
  </button>
)

export default ModaliButton

