---
templateKey: article-page
title: Gatsby React Scroll toTop
slug: Gatsby GitHub Comments Utterances
canonical: "https://publiuslogic.com/blog/gatsby-react-scroll-toTop/"
date: 2019-04-22T20:20:43.942Z
categorys: 'tech'
cover: '/images/top.jpg'
tags:
  - Gatsby
  - toTop
  - React
  - Scroll
  - WebDev
  - Tutorial
meta_title: Scroll toTop or Bottom
meta_description: Gatsby React Scroll toTop. Built with React Hooks, Styled Components and Love
tweet_id: '1118651504674725888'
---

## Gatsby React Scroll toTop or Bottom

> Have you tried Scroll to the top of the page react module's, I have and all of them use the .window function to go to top.
Which does not work in Gatsby without a work around.

```js
import Scroll from 'react-scroll'
```

Then tell Gatsby that, `window !== undefined`.

```js
// eslint-disable-next-line valid-typeof
if (typeof window !== undefined) { require('react-scroll') }
```

Such as the errors I got from react-scroll, and the workaround I used, "Which Works", but I did not like the implementation

So I came up with my own digging through Gatsby Repos. With React we can use handleScroll and window.pageYOffset to go to top or bottom of the page or anything.

```js
import React, { useState, useEffect } from 'react'

// and then use handleScroll and window.pageYOffset to go to top or bottom

const scroll = ({ mode, to }) =>
    window[`scroll` + mode]({ top: to, behavior: `smooth` })

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }
```

### The Component using a styled icon styledArrow

```jsx{1-2,5}:title=src/components/Scroll
import React, { useState, useEffect } from 'react'
import { Arrow } from './styles'

const Scroll = ({
  direction = `up`,
  by,
  to,
  showBelow,
  className,
  size = `1.7em`,
}) => {
  if (![`up`, `down`].includes(direction))
    throw TypeError(
      `Scroll component's direction prop must be either 'up' or 'down'`
    )
  if (to && (typeof to !== `number` || to <= 0))
    throw TypeError(`Scroll component's to prop must be a positive number`)
  if (by && typeof by !== `number`)
    throw TypeError(`Scroll component's by prop must be a number`)

  const [show, setShow] = useState(showBelow ? false : true)

  const scroll = ({ mode, to }) =>
    window[`scroll` + mode]({ top: to, behavior: `smooth` })

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    if (to) scroll({ mode: `To`, to: to * window.innerHeight })
    else if (by) scroll({ mode: `By`, to: by * window.innerHeight })
    else if (direction === `up`) scroll({ mode: `To`, to: 0 })
    else scroll({ mode: `To`, to: document.body.scrollHeight })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  const arrowProps = { show, direction, className, size }
  return <Arrow onClick={handleClick} {...arrowProps} />
}

export default Scroll

```

### The styles.js Code

```jsx:title=src/components/Scroll/styles
import styled from 'styled-components'
import { ArrowDownCircle as Down } from 'styled-icons/feather/ArrowDownCircle'
import { ArrowUpCircle as Up } from 'styled-icons/feather/ArrowUpCircle'

export const Arrow = styled(Down).attrs(({ direction, size }) => ({
  as: direction === `up` && Up,
  size,
}))`
  ${({ theme, show, size }) => `
  z-index: 2;
  background: ${theme.darkOrange};
  color: ${theme.white};
  border-radius: 50%;
  transition: ${theme.shortTrans};
  position: fixed;
  bottom: 2.5em;
  opacity: ${show ? 1 : 0};
  visibility: ${show ? `visible` : `hidden`};
  :hover {
    transform: scale(1.15);
    background: ${theme.orange};
  }
  right: calc(1vw - ${size} / 1);`}
`
```

### Add Scroll to Layout

```jsx:title=src/components/Scroll
  <Scroll
    showBelow={1500}
    css='position: fixed; right: 1.3em; bottom: 1.3em;'
  />
```

### Scroll Down

```jsx:title=src/components/ScrollDown
import React, { useState, useEffect } from 'react'
import { Arrow } from './styles'

const ScrollDown = ({
  direction = `down`,
  by,
  to,
  showBelow,
  className,
  size = `1.7em`,
}) => {
  if (![`up`, `down`].includes(direction))
    throw TypeError(
      `Scroll component's direction prop must be either 'up' or 'down'`
    )
  if (to && (typeof to !== `number` || to <= 0))
    throw TypeError(`Scroll component's to prop must be a positive number`)
  if (by && typeof by !== `number`)
    throw TypeError(`Scroll component's by prop must be a number`)

  const [show, setShow] = useState(showBelow ? false : true)

  const scroll = ({ mode, to }) =>
    window[`scroll` + mode]({ top: to, behavior: `smooth` })

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    if (to) scroll({ mode: `To`, to: to * window.innerHeight })
    else if (by) scroll({ mode: `By`, to: by * window.innerHeight })
    else if (direction === `up`) scroll({ mode: `To`, to: 0 })
    else scroll({ mode: `To`, to: document.body.scrollHeight })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  const arrowProps = { show, direction, className, size }
  return <Arrow onClick={handleClick} {...arrowProps} />
}

export default ScrollDown
```

#### Scroll Down styles.js

```jsx:title=src/components/ScrollDown/styles
export const Arrow = styled(Up).attrs(({ direction, size }) => ({
  as: direction === `down` && Down,
  size,
}))`
  ${({ theme, show, size }) => `
  z-index: 2;
  background: ${theme.darkOrange};
  color: ${theme.white};
  border-radius: 50%;
  transition: ${theme.shortTrans};
  position: fixed;
  top: 4.5em;
  opacity: ${show ? 1 : 0};
  visibility: ${show ? `visible` : `hidden`};
  :hover {
    transform: scale(1.15);
    background: ${theme.orange};
  }
  right: calc(1vw - ${size} / 1);`}
`
```

### Added Down to ArticleTemplate

Only my post's are long enough to need scroll down

```js:title=add to template
  <ScrollDown
    direction='down' to={15}
    showAbove={1500}
    css='position: fixed; right: 1em; top: 4.5em;'
  />
```

Scroll down is visible at the top of the page and is fixed. I think its cool and somewhat original. Not static like the Netlify build page has scroll to bottom of the build log or back to top which is pretty Cool.
