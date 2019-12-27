import React from 'react'
import { SettingToggleWrapper } from './styles'

const SettingIcon = (props) => {
  const className = props.className || ''
  return (
    <SettingToggleWrapper onClick={props.onClick} className={`toggle-wrapper ${className}`}>
      <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 125' className='settings-toggle'>
        <use xlinkHref='#settings' className='settings-gear' />
      </svg>
    </SettingToggleWrapper>
  )
}

export default SettingIcon
