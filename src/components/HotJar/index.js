import React from 'react'
import hotjar from '../../../static/img/HotJar-250x100_logo.png'
import hotjarIcon from '../../../static/img/hotjar-icon.png'
import { Media, MediaWrapper, Logo } from './styles'

const HotJar = () => {
  return (
    <MediaWrapper className='message'>
      <Media className='message-body'>
        <div
          style={{
            display: `flex`,
          }}
        >
          <a href='https://www.hotjar.com/r/r543e6a' target='_blank' rel='noopener noreferrer'>
            <img
              className='img'
              src={hotjarIcon}
              alt='PubliusLogic'
              style={{ width: '64px', height: '64px', float: 'left' }}
            />
          </a>
        </div>
        <span><h2 className='title'>Heatmaps By HotJar</h2>
          <a href='https://www.hotjar.com/r/r543e6a' target='_blank' rel='noopener noreferrer'>
            <Logo
              src={hotjar}
              alt='Hotjar'
              style={{ width: '159px', height: '90px', float: 'right' }}
            />
          </a>
        </span>
        <div className='content'>
          <p>
            <h3>Hotjar is the fast and visual way to understand your users..</h3>
            <p>Heatmaps Visualize behavior – Understand what users want, care about and do on your site by visually representing their clicks, taps and scrolling behavior – which are the strongest indicators of visitor motivation and desire.</p>
          </p>
          <div>
            <a href='https://www.hotjar.com/r/r543e6a' target='_blank' rel='noopener noreferrer'>
              <img
                src={hotjar}
                alt='Hotjar'
                style={{ width: '159px', height: '90px' }}
              />
            </a>
          </div>
        </div>
      </Media>
    </MediaWrapper>
  )
}

export default HotJar

