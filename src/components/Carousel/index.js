import React, { useContext, useEffect, useState } from 'react'
import { CarouselContext, CarouselProvider, Slider, Slide, ButtonBack, DotGroup, ButtonNext, ImageWithZoom } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

function Carousel () {
  const carouselContext = useContext(CarouselContext)
  const [currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide)
  useEffect(() => {
    function onChange () {
      setCurrentSlide(carouselContext.state.currentSlide)
    }
    carouselContext.subscribe(onChange)
    return () => carouselContext.unsubscribe(onChange)
  }, [carouselContext])
  return (
    <CarouselProvider
      carouselContext={currentSlide}
      visibleSlides={3}
      totalSlides={8}
      step={2}
      naturalSlideWidth={400}
      naturalSlideHeight={400}
      hasMasterSpinner
      infinite
    >
      <Slider className='column'>
        <Slide index={0}>
          <ImageWithZoom src='../../../static/logos/gatsby.svg' />
        </Slide>
        <Slide index={1}>
          <ImageWithZoom src='../../../static/logos/js.svg' />
        </Slide>
        <Slide index={2}>
          <ImageWithZoom src='../../../static/logos/nodejs.svg' />
        </Slide>
        <Slide index={3}>
          <ImageWithZoom src='../../../static/logos/react.svg' />
        </Slide>
        <Slide index={4}>
          <ImageWithZoom src='../../../static/logos/redux.svg' />
        </Slide>
        <Slide index={5}>
          <ImageWithZoom src='../../../static/logos/logomark.svg' />
        </Slide>
        <Slide index={6}>
          <ImageWithZoom src='../../../static/logos/styled-components.svg' />
        </Slide>
        <Slide index={7}>
          <ImageWithZoom src='../../../static/logos/react-spring.svg' />
        </Slide>
        <Slide index={8}>
          <ImageWithZoom src='../../../static/logos/webpack.svg' />
        </Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
      <DotGroup />
    </CarouselProvider>
  )
}

export default Carousel
