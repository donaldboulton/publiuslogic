import React from 'react'
import hotjar from '../../img/HotJar-250x100_logo.png'
import hotjarIcon from '../../img/hotjar-icon.png'

const Adds = () => {
  return (
    <section className='section'>
      <div className='message column is-10 is-offset-1'>
        <div className='message-body'>
          <div className='section-title'>
            <img
              src={hotjarIcon}
              alt='PubliusLogic'
            />
            <h3>&nbsp;&nbsp;Heatmaps by Hotjar</h3>
          </div>
          <div>See how your visitors are really using your website.</div>
          <div className='native-footer'>
            <a href='https://www.hotjar.com/r/r543e6a' className='native-main' target='_blank'>
              <img
                src={hotjar}
                alt='PubliusLogic'
              />
              <div className='native-cta text-center'><button className='button is-danger is-large'>Try it for Free&nbsp;↬</button></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
