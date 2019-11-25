import React from 'react'
import hotjar from '../../assets/img/HotJar-250x100_logo.png'
import hotjarIcon from '../../assets/img/hotjar-icon.png'

const HotJar = () => {
  return (
    <div className='column is-10 is-offset-1'>
      <article className='message'>
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
              <strong>Heatmaps by Hotjar</strong>
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
      </article>
    </div>
  )
}

export default HotJar
