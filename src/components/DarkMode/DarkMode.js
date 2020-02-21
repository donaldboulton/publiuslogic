import React from 'react'
import DarkModeStatus from './DarkModeStatus'
import DarkModeCommands from './DarkModeCommands'
import Carbon from '../../../static/img/rgAl-carbon.png'

const DarkMode = () => {
  return (
    <>
      <p>
        This is an example app that uses the <code>useDarkMode</code> custom hook.
        It persists across sessions (i.e., uses <code>localStorage</code>) and
        shares state across instances and even tabs and/or browser windows.
      </p>
      <p>
        For example, here is a component that shares the custom hook{' '}
        <code>useDarkMode</code> with the toggle component above.
      </p>
      <p>
        It is reporting that the current mode is:{' '}
        <code>
          <DarkModeStatus />
        </code>
      </p>
      <p>
        And here's another: <DarkModeCommands />
      </p>
      <p>It couldn't be any easier!</p>
      <p>
        <img
          alt='code'
          src={Carbon}
        />
      </p>
      <div>
        View the source for this&nbsp;
        <a className='a' href='https://codesandbox.io/s/mzj64x80ny'>Code Sand Box Demo app.</a> &nbsp;Or see
        useDarkMode.&nbsp;
        <a className='a' href='https://github.com/donavon/use-dark-mode'>
          Source code on Github.
        </a>
      </div>
    </>
  )
}

export default DarkMode
