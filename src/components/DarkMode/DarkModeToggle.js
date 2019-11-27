import React from 'react'
import { Moon } from 'styled-icons/fa-solid/Moon'
import { Sun } from 'styled-icons/fa-solid/Sun'
import Toggle from './Toggle'
import useDarkMode from 'use-dark-mode'
import './styles.scss'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(true)

  return (
    <span className='navbar-item'>
      <div className='dark-mode-toggle'>
        <button type='button' onClick={darkMode.disable}>
          <Sun size='1em' />
        </button>
        <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
        <button type='button' onClick={darkMode.enable}>
          <Moon size='1em' />
        </button>
      </div>
    </span>
  )
}

export default DarkModeToggle
