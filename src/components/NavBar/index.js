import React from 'react'
import SlideMenu from '../SlideMenu'
import { DesktopNavDiv } from './styles'

export default (nav) => {
  return (
    <DesktopNavDiv css='grid-area: nav;' aria-label='main navigation' itemScope='itemScope' itemType='https://schema.org/SiteNavigationElement'>
      <SlideMenu />
    </DesktopNavDiv>
  )
}

