import React from 'react'
import './SettingIcon.css'

const SettingIcon = (props) => {
  const className = props.className || ''
  return (
    <span onClick={props.onClick} className={`setting-toggle-wrapper ${className}`}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125' className='settings-toggle'>
        <use xlinkHref='#settings' className='settings-gear' />
      </svg>
    </span>
  )
}

export default SettingIcon
