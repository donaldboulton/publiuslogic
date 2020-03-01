import React from 'react'
import FooterContent from './FooterContent'

const Footer = () => {
  return (
    <footer css='grid-area: footer;' className='footer' itemScope='itemScope' itemType='https://schema.org/WPFooter'>
      <div className='section container'>
        <FooterContent />
      </div>
    </footer>
  )
}

export default Footer
