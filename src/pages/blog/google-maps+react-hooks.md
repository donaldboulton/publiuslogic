---
templateKey: article-page
title: Google Maps + React Hooks
slug: Google Maps + React Hooks
date: 2019-03-25T20:20:43.942Z
category: 'tech'
cover: '/images/maps.jpg'
tags:
  - React
  - Hooks
  - Maps
  - WebDev
  - Tutorial
meta_title: zero-dependency GMaps Hooks
meta_description: Google Maps + React Hooks 
tweet_id: '1118651504674725888'
showToc: true
---

## Taken From

[janosh.io Google Maps + React Hooks ](https://janosh.io/blog/google-maps+react-hooks)

Had to share this one since it is so nice and simple. If you are looking for a drop-in, zero-dependency Google Maps React component, look no further. Here it is:

```jsx:title=src/components/Maps
import React, { useEffect, useRef } from 'react'

export default function Map({ options, onMount, className }) {
  const props = { ref: useRef(), className }
  const onLoad = () => {
    const map = new window.google.maps.Map(props.ref.current, options)
    onMount && onMount(map)
  }

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement(`script`)
      script.type = `text/javascript`
      script.src =
        `https://maps.google.com/maps/api/js?key=` +
        process.env.GOOGLE_MAPS_API_KEY
      const headScript = document.getElementsByTagName(`script`)[0]
      headScript.parentNode.insertBefore(script, headScript)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
  })

  return (
    <div {...props} style={{height: `70vh` margin: `1em 0`, borderRadius: `0.5em` }} />
  )
}

Map.defaultProps = {
  options: {
    center: { lat: 48, lng: 8 },
    zoom: 5,
  },
}
```

To use it, simply grab a free Google Maps API key from [Google cloud console](https://console.cloud.google.com) ([here is a guide for that](https://developers.google.com/maps/documentation/javascript/get-api-key)) and either add it to your .env file or paste it in directly for GOOGLE_MAPS_API_KEY.

Then simply drop in the above Map component wherever you would like to display a Google map.

```jsx{7}:title=src/app.js
<App>
  <h1>Google Maps</h1>
  <Map />
</App>
```

To change the area shown by the map and its zoom level, pass it an options object containing the keys center and zoom.

```jsx
mapProps = {
  options: {
    center: { lat: 20, lng: 40 },
    zoom: 4,
  },
}

<Map {...mapProps} />
```

If you would like to do something more fancy, for instance add some markers to the map, you can also pass in an onMount function:

```jsx{17}
const addMarkers = links => map => {
  links.forEach((link, index) => {
    const marker = new window.google.maps.Marker({
      map,
      position: link.coords,
      label: `${index + 1}`,
      title: link.title,
    })
    marker.addListener(`click`, () => {
      window.location.href = link.url
    })
  })
}

mapProps = {
  options: { center: { lat: 20, lng: 40 }, zoom: 4 },
  onMount: addMarkers(linksComingFromSomewhere),
}

<Map {...mapProps} />
```

link.coords should be an object of the same structure as center, i.e. with lat and lng keys for the latitude and longitude at which to display the marker.

Note that the onMount function must be curried since the Map component will itself provide the map object on which to apply the onMount to the inner function.

## Optimization

By default, when using the `Map` component inside another functional component it will rerender whenever the parent component rerenders. Not only does this waste computational ressources since there's no need to rerender the map if the changed props do not pertain to it, it also ruins the user experience since the map will jump back to its initial zoom level and center on every rerender. To prevent this, you can easily create a memoized map with the `useCallback` hook:

```jsx{1,4,9}:title=src/app.js
import React, { useCallback } from 'react'
import Map from './components/Maps'

const MemoMap = useCallback(<Map />, [])

export default () => (
  <div>
    <h1>This is a memoized map</h1>
    {MemoMap}
  </div>
)
```

In fact, you may want to make this part of the `Map` vomponent by default, i.e.

```diff{36}:title=src/components/Maps
- export default function Map({ options, onMount, className }) {
+ function Map({ options, onMount, className }) {
  ...
}

+ export default props => useCallback(<Map {...props} />, [])
```
