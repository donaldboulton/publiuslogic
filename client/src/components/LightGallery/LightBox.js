import React from 'react'
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery'
import 'lightgallery.js/dist/css/lightgallery.css'

const GROUP1 = [
  'https://publiuslogic.com/photos/boys-cat-house.jpg',
  'https://publiuslogic.com/photos/tiger.jpg',
]

const GROUP2 = [
  'https://publiuslogic.com/photos/ready-for-lunch.jpg',
  'https://publiuslogic.com/photos/little-hun.jpg',
  'https://publiuslogic.com/photos/boys-kittens.jpg',
]

const LightGallery = ({ image, group, title, PhotoItem }) => {
  return (
    <>
      <div style={{ maxWidth: '250px', width: '200px', padding: '5px' }}>
        <LightgalleryItem group={group} src={image}>
          <img src={image} style={{ width: '100%' }} />
        </LightgalleryItem>
      </div>
      <LightgalleryProvider>
        <h1 style={{ textAlign: 'center' }}>Group 1</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {GROUP1.map((p, title) => (
            <PhotoItem key={title} image={p} group='group1' />
          ))}
        </div>
        <h1 style={{ textAlign: 'center' }}>Group 2</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {GROUP2.map((p, title) => (
            <PhotoItem key={title} image={p} group='group2' />
          ))}
        </div>
      </LightgalleryProvider>
    </>
  )
}

export default LightGallery

