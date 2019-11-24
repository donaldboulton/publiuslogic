---
templateKey: article-page
title: Gatsby LightGallery Cloudinary
slug: Gatsby LightGallery Cloudinary
canonical: "https://publiuslogic.com/blog/gatsby-lightgallery-cloudinary"
date: 2019-09-17T20:14:43.942Z
category: 'tech'
cover: '/images/cloudinary.jpg'
tags:
  - Gatsby
  - Cloudinary
  - LightGallery 
  - WebDev
meta_title: LightGallery is the Coolest
meta_description: Gatsby Image Gallery using cloudinary-react and react-lightgallery npm modules, styled with styled components and styled-css-grid.
tweet_id: '1118651504674725888'
showToc: true
---

## Gatsby LightGallery Cloudinary

### [Using Cloudinary React Library](https://www.npmjs.com/package/cloudinary-react/v/1.1.0)

Cloudinary is a cloud service that offers a solution to a web application's entire image management pipeline.

Easily upload images to the cloud. Automatically perform smart image resizing, cropping and conversion without installing any complex software. Integrate Facebook or Twitter profile image extraction in a snap, in any dimension and style to match your website’s graphics requirements. Images are seamlessly delivered through a fast CDN, and much much more.

Cloudinary offers comprehensive APIs and administration capabilities and is easy to integrate with any web application, existing or new.

Cloudinary provides URL and HTTP based APIs that can be easily integrated with any Web development framework.

I have used [LightGalley](http://sachinchoolur.github.io/lightGallery/) in my ASP.NET, Core-2, Jekyll, React and now in my Gatsby site for Image Galleries and iframes to display any kind of html content.

This demo is using Styled Components and mediaQuery in a Styled CSS Grid for the image Cells.

LightGallery has a react SDK for usage in react and vanilla.js for the plugins. The jQuery plugins do not include the .js. as the code blocks below indicate.

### LightGallery plugins

```js:title=jQuery
import 'lg-autoplay'
```

```jsx:title=vanilla.js
import 'lg-autoplay.js'
```

### The Component for the Gallery

```jsx:title=src/components/Cloudinary/index.js
/* eslint-disable indent */
import React, { Component, Fragment } from 'react'
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery'
import axios from 'axios'
import styled from 'styled-components'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react'
import { Grid, Cell } from 'styled-css-grid'
import { media } from '../../utils/mediaQuery'
import 'lightgallery.js/dist/css/lightgallery.css'

const SectionTitle = styled.h3`
  font-size: 1em;
  margin: 0.67em 0;
  ${media.xs`
    font-size: .85em;
  `}
`
class Gallery extends Component {
  constructor (props) {
    super(props)
    this.link = React.createRef()
    this.state = {
      gallery: [],
      isOpen: false,
      link: this.href,
    }
  }

  componentDidMount () {
    // Request for images tagged cats
    axios.get('https://res.cloudinary.com/mansbooks/image/

    list/v1557911334/cats.json')
      .then(res => {
        console.log(res.data.resources)
        this.setState({ gallery: res.data.resources })
      })
  }
  onLink (event) {
    this.setState({ link: this.href = `https://res.cloudinary.com/mansbooks/

    image/upload/${data.public_id}.jpg` })
  }
  uploadWidget () {
    let _this = this
    // eslint-disable-next-line no-undef
    cloudinary.openUploadWidget({ cloud_name: 'mansbooks', upload_preset:

    'photos-preset', tags: ['cats'], sources: ['local', 'url', 'camera',

    'image_search', 'facebook', 'dropbox', 'instagram'], dropboxAppKey:

    'fk4ayp4zwevjgl7', googleApiKey: 'AIzaSyCEL0HqEXvP42ZYK-xd7CBqO50-ZzLKwFM' },
      // eslint-disable-next-line handle-callback-err
      function (error, result) {
      // Update gallery state with newly uploaded image
          _this.setState({ gallery: _this.state.gallery.concat(result) })
      })
  }
  render () { 
    return (
      <div>
        <Fragment>
          <SectionTitle>Cloudinary LightGallery</SectionTitle>
          <div>
            <CloudinaryContext cloudName='mansbooks'>
              <Grid columns='repeat(auto-fit,minmax(260px,1fr))' id='hash'>
                <LightgalleryProvider>
                  {
                this.state.gallery.map(data => {
                return (
                  <Cell key={data.public_id}>
                    <LightgalleryItem group='group1' src={`

                    https://res.cloudinary.com/mansbooks/image/upload/$

                    {data.public_id}.jpg`}>
                      <Image publicId={data.public_id} onClick={() =>

                      this.setState({ isOpen: true })}>
                        <Transformation
                          crop='scale'
                          width='250'
                          height='170'
                          radius='6'
                          dpr='auto'
                          fetchFormat='auto'
                          responsive_placeholder='blank'
                        />
                      </Image>
                      <div data-sub-html='public_id' />
                    </LightgalleryItem>
                  </Cell>
                  )
                })
              }
                </LightgalleryProvider>
              </Grid>
            </CloudinaryContext>
          </div>
        </Fragment>
      </div>
    )
  }
}

export default Gallery

```

### The Upload Widget

The upload widget uses Cloudinary CND or the scripts, not a node module.

```html
https://widget.cloudinary.com/v2.0/global/all.js
```

The Upload Widget Code with advanced styling

```jsx:title=src/components/Cloudinary/UploadWidget.js
import React, { Component } from 'react'
import Helmet from 'react-helmet'
class UploadWidget extends Component {
  uploadWidget () {
    cloudinary.openUploadWidget({
      cloud_name: 'mansbooks',
      api_key: '228989664973733',
      api_secret: '2RIKEQL1bOOxMNKBoeiCYQR8SnI',
      username: 'donaldboulton@gmail.com',
      upload_preset: 'photos-preset',
      tags: ['cats', 'uploads'],
      sources: ['local', 'url', 'camera', 'image_search', 'facebook', 'dropbox', 'instagram'],
      dropboxAppKey: 'ADD YOUR DROPBOX APP KEY',
      googleApiKey: 'ADD YOUR API KEY',
      showAdvancedOptions: true,
      cropping: true,
      multiple: true,
      image_metadata: 'true',
      defaultSource: 'local',
      styles: {
        palette: {
          window: '#1D1D1D',
          sourceBg: '#000000',
          windowBorder: '#434040',
          tabIcon: '#FFFFFF',
          inactiveTabIcon: '#8E9FBF',
          menuIcons: '#D64000',
          link: '#D64000',
          action: '#9C3204',
          inProgress: '#D64000',
          complete: '#33ff00',
          error: '#EA2727',
          textDark: '#000000',
          textLight: '#FFFFFF',
        },

      },
    },
    function (error, result) {
      console.log(result)
    })
  }
  render () {
    return (
      <div className='main'>
        <Helmet>
          <script src='https://widget.cloudinary.com/v2.0/global/all.js' type='text/javascript' />
        </Helmet>
        <h1>Upload</h1>
        <div className='upload'>
          <button onClick={this.uploadWidget.bind(this)} className='upload-button button'>
            Add Image
          </button>
        </div>
      </div>
    )
  }
}

export default UploadWidget

```
