import React from 'react'
import { Carousel } from 'nuka-carousel'

class Slides extends React.Component {
    return (
      <Carousel>
        <img src='../../../static/logos/gatsby.svg' />
        <img src='../../../static/logos/react.svg' />
        <img src='../../../static/logos/nodejs.svg' />
        <img src='../../../static/logos/js.svg' />
        <img src='../../../static/logos/css.svg' />
        <img src='../../../static/logos/styled-components.svg' />
      </Carousel>
    )
}

export default Slides
