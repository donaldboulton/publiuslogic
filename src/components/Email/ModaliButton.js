import React from 'react';

const ButtonStyle = {
  borderRadius: '4px',
  width: '32px',
  height: '32px',
  background: 'transparent',
}

const Button = ({ handleClick, children }) => (
  <button style={ButtonStyle} onClick={handleClick}>
    {children}
  </button>
)

export default Button

