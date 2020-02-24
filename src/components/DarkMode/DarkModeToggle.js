/* eslint-disable react/jsx-handler-names */
import React from 'react'
import Toggle from './Toggle'
import useDarkMode from 'use-dark-mode'
import './styles.scss'

const DarkModeToggle = ({ toggle }) => {
  const darkMode = useDarkMode(true)

  return (
    <span className='navbar-item'>
      <div className='dark-mode-toggle'>
        <button type='button' onClick={darkMode.disable}>
          ☀
        </button>
        <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
        <button type='button' onClick={darkMode.enable}>
          ☾
        </button>
      </div>
    </span>
  )
}

export default DarkModeToggle
