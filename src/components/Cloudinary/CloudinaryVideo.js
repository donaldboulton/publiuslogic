import React from 'react'
import {Video, Transformation, CloudinaryContext} from 'cloudinary-react'

const VideoPlayer = () => {
  return (
    <>
    <CloudinaryContext cloudName="mansbooks">
      {/* Cloudinary Video Player embed code */}
      <Video
        cloudName="mansbooks"
        controls
        publicId="videos/Big_Buck_Bunny"
        width="800"
        crop="scale"
        poster={{publicId: 'videos/Big_Buck_Bunny'}}
        fallbackContent="Your browser does not support HTML5 video tags."  
        loop="true">
          <Transformation controls="true"/>
      </Video>
      <Transformation crop="pad" height="520" width="800" quality="90" duration="10"  />
    </CloudinaryContext>
    </>
  )
}

export default VideoPlayer