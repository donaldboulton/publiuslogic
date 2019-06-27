---
templateKey: article-page
title: Gatsby LightGallery Cloudinary
slug: Gatsby LightGallery Cloudinary
date: 2019-06-17T20:14:43.942Z
categorys: 'tech'
cover: /img/gatsby+react+utterances+home.jpg
tags:
  - Gatsby
  - Cloudinary
  - LightGallery 
  - Gallery
meta_title: Gatsby LightGallery Cloudinary
meta_description: Gatsby Image Gallery using cloudinary-react and react-lightgallery npm modules, styled with styled components and styled-css-grid.
tweet_id: '1118651504674725888'
---

## Gatsby LightGallery Cloudinary

I have used [LightGalley](http://sachinchoolur.github.io/lightGallery/) in my ASP.NET, Core-2, Jekyll, React and now in my Gatsby site for Image Gallerys and iframes to display any kind of html content.
Using Styled Components and mediaQuery in a Styled CSS Grid for the image Cells

 > LightGallery has a react SDK for usage in react and vanilla.js for the plugins. The jQuery plugins do not include the .js

```js:title=for jQuery
import 'lg-autoplay'
```

```jsx:title=React Usage vanilla.js
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
import 'lg-hash.js'
import 'lg-autoplay.js'
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
    axios.get('https://res.cloudinary.com/mansbooks/image/list/v1557911334/cats.json')
      .then(res => {
        console.log(res.data.resources)
        this.setState({ gallery: res.data.resources })
      })
  }
  onLink (event) {
    this.setState({ link: this.href = `https://res.cloudinary.com/mansbooks/image/upload/${data.public_id}.jpg` })
  }
  uploadWidget () {
    let _this = this
    cloudinary.openUploadWidget({ cloud_name: 'mansbooks', upload_preset: 'photos-preset', tags: ['cats'], sources: ['local', 'url', 'camera', 'image_search', 'facebook', 'dropbox', 'instagram'], dropboxAppKey: 'YOUR KEY    `', googleApiKey: 'YOUR KEY' },
      function (error, result) {
          _this.setState({ gallery: _this.state.gallery.concat(result) })
      })
  }
  render () {

    return (
      <div>
        <Fragment>
          <SectionTitle>Gallery by Cloudinary</SectionTitle>
          <div>
            <CloudinaryContext cloudName='mansbooks'>
              <Grid columns='repeat(auto-fit,minmax(260px,1fr))'>
                <LightgalleryProvider>
                  {
                this.state.gallery.map(data => {
                return (
                  <Cell key={data.public_id}>
                    <LightgalleryItem group='group1' src={`https://res.cloudinary.com/mansbooks/image/upload/${data.public_id}.jpg`}>
                      <Image publicId={data.public_id} onClick={() => this.setState({ isOpen: true })}>
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
