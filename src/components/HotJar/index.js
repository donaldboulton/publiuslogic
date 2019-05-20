import React from 'react'
import hotjar from '../../img/HotJar-250x100_logo.png'
import hotjarIcon from '../../img/hotjar-icon.png'

const HotJar = () => {
  return (
    <section className='section'>
      <div className='message column is-10 is-offset-1'>
        <div className='message-body'>
          <div className='media'>
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
            <div className='media-content'>
              <div className='content'>
                <h2>&nbsp;&nbsp;Heatmaps by Hotjar</h2>
              </div>
              <nav className='level'>
                <div className='level-left'>
                  <div className='level-item'>
                    <p className='subtitle is-5'>
                      <div>Hotjar is the fast and visual way to understand your users..</div>
                    </p>
                  </div>
                </div>
              </nav>
            </div>
            <div className='media-right'>
              <a href='https://www.hotjar.com/r/r543e6a' className='native-main' target='_blank'>
                <span>
                  <img
                    src={hotjar}
                    alt='Hotjar'
                    style={{ width: '129px', height: '60px' }}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HotJar
