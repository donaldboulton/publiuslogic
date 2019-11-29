import React from 'react'

const ButtonStyle = {
  background: 'transparent',
  border: 'transparent',
  color: '#cccccc',
  height: '58px',
  width: '54px',
}

const Button = ({ handleClick, children }) => (
  <button style={ButtonStyle} onClick={handleClick}>
    {children}
  </button>
)

export default Button

