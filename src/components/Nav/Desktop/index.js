import React from 'react'
import { DesktopNavDiv, NavEntry, SubNav, DownArrow } from './styles'
import { NavLink } from '..'

export default ({ nav }) => (
  <DesktopNavDiv aria-haspopup='true'>
    {nav.map(({ url, title, subNav }) => (
      <NavEntry key={url}>
        <NavLink to={url || subNav[0].url} title={title}>
          {title} {subNav && <DownArrow size='0.6em' />}
        </NavLink>
        {subNav && (
          <SubNav aria-expanded='false'>
            {subNav.map(item => (
              <NavLink key={item.url} to={url + item.url} title={item.title}>
                {item.title}
              </NavLink>
            ))}
          </SubNav>
        )}
      </NavEntry>
    ))}
  </DesktopNavDiv>
)
