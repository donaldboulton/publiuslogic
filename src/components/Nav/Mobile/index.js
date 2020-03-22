import React, { memo, useRef, useState, useLayoutEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'
import { useSize } from '../../../hooks/useSize'
import Toggle from '../../DarkMode/DarkModeToggle'
import {
  Children,
  ArrowUp,
  ArrowDown,
  Item,
  MobileNavDiv,
  NavLink,
  NavToggle,
  ControlsDiv,
} from './styles'

const Tree = memo(({ title, url, children }) => {
  const ref = useRef()
  const [open, setOpen] = useState(false)
  const treeHeight = useSize(ref, `height`)
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: `translateX(1em)` },
    to: {
      height: open ? treeHeight : 0,
      opacity: open ? 1 : 0,
      transform: `translateX(${open ? 0 : 1}em)`,
    },
  })
  const Arrow = open ? ArrowUp : ArrowDown
  return (
    <Item>
      {children && <Arrow onClick={() => setOpen(!open)} />}
      <NavLink to={url}>{title}</NavLink>
      {children && (
        <Children style={{ opacity, height }} open={open}>
          <animated.div style={{ transform }} ref={ref}>
            {children}
          </animated.div>
        </Children>
      )}
    </Item>
  )
})

export default function MobileNav ({ nav }) {
  const ref = useRef()
  const [open, setOpen] = useState(false)
  useOnClickOutside(ref, () => open && setOpen(false))
  useLockBodyScroll()
  return (
    <>
      <NavToggle opener open={open} onClick={() => setOpen(true)} />
      <MobileNavDiv ref={ref} open={open} onScroll={e => e.preventDefault()} className='scroll'>
        <ControlsDiv>
          <NavToggle open={open} onClick={() => setOpen(false)} />
          <Toggle />
        </ControlsDiv>
        {nav.map(({ title, url, subNav }) => (
          <Tree key={url} url={url} title={title}>
            {subNav &&
              subNav.map(item => (
                <Tree key={item.url} url={url + item.url} title={item.title} />
              ))}
          </Tree>
        ))}
      </MobileNavDiv>
    </>
  )
}

// Hook

function useLockBodyScroll () {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden'
    // Re-enable scrolling when component unmounts
    return () => document.body.style.overflow = originalStyle
  }, []) // Empty array ensures effect is only run on mount and unmount
}
