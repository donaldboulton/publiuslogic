import React from 'react'
import hotjar from '../../img/HotJar-250x100_logo.png'
import hotjarIcon from '../../img/hotjar-icon.png'

const HotJar = () => {
  return (
    <section className='section'>
      <div className='message column is-10 is-offset-1'>
        <div className='message-body'>
          <div className='columns is-multiline is-desktop'>
            <div className='media column is-1'>
              <figure className='media-left'>
                <p className='image is-64x64'>
                  <a href='https://www.hotjar.com/r/r543e6a' className='native-main' target='_blank'>
                    <img
                      src={hotjarIcon}
                      alt='PubliusLogic'
                    />
                  </a>
                </p>
              </figure>
            </div>
            <div className='column is-9'>
              <h2>Heatmaps by Hotjar</h2>
              <p className='subtitle is-5'>
                <div>Hotjar is the fast and visual way to understand your users..</div>
              </p>
            </div>
            <div className='column'>
              <a href='https://www.hotjar.com/r/r543e6a' className='native-main' target='_blank'>
                <img
                  src={hotjar}
                  alt='Hotjar'
                  style={{ width: '159px', height: '90px' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HotJar
