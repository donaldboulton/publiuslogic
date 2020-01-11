---
templateKey: article-page
title: React Hooks Masonry
path: /react-hooks-masonry
slug:  React Hooks Masonry
date: 2019-03-25T20:20:43.942Z
category: 'tech'
cover: '/images/masonry.jpg'
tags:
  - Masonry
  - Hooks
meta_title: React Hooks Masonry
meta_description: React Hooks Masonry
tweet_id: '1118651504674725888'
showToc: true
---

## From janosh.io React Hooks Masonry Post

🔗 [janosh.io React Hooks Masonry](https://janosh.io/blog/react-hooks-masonry)

🔥 Now that we have React Hooks, so many components can (and probably should 🔗 [despite what Dan said at React Conf](https://youtu.be/dpw9EHDh2bM?t=3365)) be rewritten in a more succinct, readable and maintainable manner. A perfect candidate for this in my own code base was a `Masonry` component that used to rely on CSS grid with very narrow rows and managing the number of rows each child item spans based on its natural height to control their placement. With hooks, it was easy to significantly improve on this approach.

For those unfamiliar with “masonry” on the web, the goal is to create a layout like this.

<interactive-colorbox></interactive-colorbox>

The new implementation uses only 36 lines of codes and is about as plug-and-play as components get.

```jsx:title=src/components/masonry/index.js
iimport React, { useEffect, useRef, useState } from 'react'
import { useEventListener } from 'hooks'
import { Col, MasonryDiv } from './styles'

const fillCols = (children, cols) => {
  children.forEach((child, i) => cols[i % cols.length].push(child))
}

export default function Masonry({ children, gap, minWidth = 500, ...rest }) {
  const ref = useRef()
  const [numCols, setNumCols] = useState(3)
  const cols = [...Array(numCols)].map(() => [])
  fillCols(children, cols)

  const resizeHandler = () =>
    setNumCols(Math.ceil(ref.current.offsetWidth / minWidth))
  useEffect(resizeHandler, [])
  useEventListener(`resize`, resizeHandler)

  return (
    <MasonryDiv ref={ref} gap={gap} {...rest}>
      {[...Array(numCols)].map((_, index) => (
        <Col key={index} gap={gap}>
          {cols[index]}
        </Col>
      ))}
    </MasonryDiv>
  )
}
```

### Hooks useEventListener

```jsx:title=/hooks/useEventListener
import { useEffect, useRef } from 'react'

export function useEventListener (eventNames, handler, element) {
  // Create a ref that stores the handler.
  const savedHandler = useRef()
  if (!Array.isArray(eventNames)) eventNames = [eventNames]

  // Save handler to ref.current on initial call to useEventListener
  // and then update ref.current whenever the handler changes.
  // This allows the second useEffect below to always get the latest
  // handler without needing to have it in than hooks deps array which
  // could cause the effect to re-run every render.
  useEffect(() => (savedHandler.current = handler), [handler])

  useEffect(() => {
    const elementSupportsListener = element && element.addEventListener
    if (!elementSupportsListener) return

    // Create event listener that calls handler function stored in ref
    const listener = event => savedHandler.current(event)
    for (const e of eventNames) element.addEventListener(e, listener)
    return () => {
      for (const e of eventNames) element.removeEventListener(e, listener)
    }
  }, [element, eventNames])
}

```

The styled components `MasonryDiv` and `Col` each create a CSS grid to space out child items according a default gap `1em` or whatever distance in CSS units you pass as a string to `<Masonry gap="calc(1vw + 20px)" />`.

```js:title=src/components/masonry/styled.js
import styled from 'styled-components'

export const MasonryDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => props.gap || `1em`};
`

export const Col = styled.div`
  display: grid;
  grid-gap: ${props => props.gap || `1em`};
`
```

## Examples

Using `Masonry` is as simple as wrapping it around an array of child elements. For example, here's how you'd use it to display a 🔗 [list of image thumbnails](https://janosh.io/nature) in a masonry layout.

```jsx{3,11,24}
import React, { useState, Fragment } from 'react'

import Masonry from '../Masonry'
import Modal from '../Modal'

import { Thumbnail, LargeImg } from './styles'

export default function Photos({ photos }) {
  const [modal, setModal] = useState()
  return (
    <Masonry>
      {photos.map((img, index) => (
        <Fragment key={img.title}>
          <Thumbnail
            onClick={() => setModal(index)}
            alt={img.title}
            src={img.src}
          />
          <Modal {...{ open: index === modal, modal, setModal }}>
            <LargeImg alt={img.title} src={img.src} />
          </Modal>
        </Fragment>
      ))}
    </Masonry>
  )
}
```

### ColorBox

More concretely, the above colored tiles are rendered by the this component.

```jsx:title=src/components/ColorBox
import React, { useState } from 'react'
import Masonry from 'components/Masonry' 
import shuffle from 'lodash/shuffle'
import styled from 'styled-components'

const ColorBox = styled.div`
  border-radius: 1em;
  transition: 0.2s;
  justify-content: center;
  align-content: center;
  display: grid;
  color: white;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    box-shadow: 0 0 12px 0 ${props => props.theme.lightGray};
  }
`

const data = [
  [`5em`, `linear-gradient(45deg, #f05f70, #164b78)`],
  [`2em`, `linear-gradient(45deg, #5cb767, #2e9fff)`],
  [`4em`, `linear-gradient(45deg, #e0c3fc, #8ec5fc)`],
  [`7em`, `linear-gradient(45deg, #f093fb, #f5576c)`],
  [`1em`, `linear-gradient(45deg, #ffd34f, #2e9fff)`],
  [`3em`, `linear-gradient(45deg, #d299c2, #fef9d7)`],
  [`2em`, `linear-gradient(45deg, #f6d365, #fda085)`],
  [`5em`, `linear-gradient(45deg, #164b78, #ffd34f)`],
  [`5em`, `linear-gradient(45deg, #96fbc4, #f9f586)`],
]

export default function MasonryExample() {
  const [divs, setDivs] = useState(data.concat(data))
  return (
    <Masonry minWidth={300} css="margin: 2em 0;"> 
      {divs.map(([minHeight, background], index) => (
        <ColorBox
          key={index}
          style={{ background, minHeight }}
          onClick={() => setDivs(shuffle)}
        >
          {index + 1}
        </ColorBox>
      ))}
    </Masonry>
  )
}
```

I will soon have this working in my portfolio.
