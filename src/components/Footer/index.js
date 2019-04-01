import React from 'react'
import AboutSection from '../AboutSection'

const Footer = () => {
  return (
    <footer className='footer' itemScope itemType='https://schema.org/WPFooter'>
      <div className='container'>
        <AboutSection />
      </div>
    </footer>
  )
}

export default Footer
