import React from 'react'

const ButtonStyle = {
  background: '-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.2)))',
  background: 'linear-gradient(180deg,rgba(0,0,0,.5),rgba(0,0,0,.2))',
  background: '#d64000',
  border: 'transparent !important',
  color: '#cccccc !important',
}

const Button = ({ handleClick, children }) => (
  <button style={ButtonStyle} onClick={handleClick}>
    {children}
  </button>
)

export default Button

