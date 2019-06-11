import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery'
import Masonry from '../Masonry'

const GROUP1 = [
  'https://images.unsplash.com/flagged/photo-1551706646-9c816bfbff8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
  'https://images.unsplash.com/photo-1551633550-64761da5342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80'
]

const GROUP2 = [
  'https://images.unsplash.com/photo-1551833726-deb5e781c68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1551803021-92431219e83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1551852284-ce16dd4d63d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
]

const PhotoItem = ({ image, group }) => (
  <div style={{ maxWidth: '250px', width: '200px', padding: '5px' }}>
    <LightgalleryItem group={group} src={image}>
      <img src={image} style={{ width: '100%' }} />
    </LightgalleryItem>
  </div>
)
const PhotoItems = ({ className, title, img, photos, image, group }) => (
  <StaticQuery
    query={graphql`
    query {
      photos: allFile(filter: {sourceInstanceName: { eq: "photos" }}) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 1200, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `}
    render={data => {
      photos = photos.filter(photo => photo.title)
      return (
        <>
          <LightgalleryProvider
            lightgallerySettings={
              {
                mode: 'fade',
                enableTouch: 'true',
                enableDrag: 'true',
                animateThumb: 'true',
                speed: 500,
                // settings: https://sachinchoolur.github.io/lightgallery.js/docs/api.html
              }
            }
            galleryClassName='gallery'
          >
            <Masonry id='aniimated-thumbnials'>
              <LightgalleryItem group={group} src={image}>
                {photos.map((photo, index) => (
                  <div key={photo.title} className='react_lightgallery_item'>
                    <PhotoItem alt={photo.title} fluid={photo.fluid} image={photo.fluid} group='subject' />
                  </div>
                ))}
              </LightgalleryItem>
            </Masonry>
          </LightgalleryProvider>
          )}
        </>
      )
    }
    }
  />
)

export default PhotoItems
