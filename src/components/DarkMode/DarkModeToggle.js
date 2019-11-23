import React from 'react'
import Toggle from './Toggle'
import useDarkMode from 'use-dark-mode'
import './styles.scss'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(true)

  return (
    <div className='dark-mode-toggle'>
      <button className='button-transparent' type='button' onClick={darkMode.disable}>
        ☀
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type='button' onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  )
}

export default DarkModeToggle
