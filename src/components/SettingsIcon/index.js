import React from 'react'
import './SettingIcon.css' // eslint-disable-line

const SettingIcon = (props) => {
  const className = props.className || ''
  return (
    <span onClick={props.onClick} className={`setting-toggle-wrapper ${className}`}>
      <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink="http://www.w3.org/1999/xlink"viewBox='0 0 100 125' className='settings-toggle'>
        <use href='#settings' className='settings-gear' />
      </svg>
    </span>
  )
}

export default SettingIcon
