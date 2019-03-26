---
templateKey: article-page
title: Google Maps + React Hooks
slug: Google Maps + React Hooks
date: 2019-03-25T20:20:43.942Z
cover: /img/google-maps+react-hooks.svg
tags:
  - React
  - Hooks
  - Maps
meta_title: Google Maps + React Hooks
meta_description: Google Maps + React Hooks 
---

Had to share this one since it is so nice and simple. If you are looking for a drop-in, zero-dependency Google Maps React component, look no further. Here it is:

```jsx:title=src/components/map.js
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

```jsx:title=src/app.js
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

```jsx
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
