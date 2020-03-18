import React from 'react'
import hotjar from '../../../static/img/HotJar-250x100_logo.png'
import { HotJarDiv, HotJarTitle, HotJarIcon, Box } from './styles'

const HotJar = () => {
  return (
    <HotJarDiv className='footer-background'>
      <HotJarTitle>
        <HotJarIcon />
        Heatmaps By HotJar
      </HotJarTitle>
      <div className='center'>
        <a href='https://www.hotjar.com/r/r543e6a' target='_blank' rel='noopener noreferrer'>
          <img
            src={hotjar}
            alt='Hotjar'
            style={{ width: '140px', height: '79px' }}
          />
        </a>
      </div>
      <span>
        <h3 className='center'>Heatmaps Visualize behavior.</h3>
        <h4 className='center'>Hotjar is the fast and visual way To...</h4>
        <Box>
          Understand what users want, care about and do on your site by visually representing their clicks, taps and scrolling behavior – which are the strongest indicators of visitor motivation and desire.
        </Box>
      </span>
    </HotJarDiv>
  )
}

export default HotJar

