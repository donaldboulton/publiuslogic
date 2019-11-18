import React from 'react'
import OpenWeatherMap from 'react-open-weather-map'
import sample from './weather.json'

const Weather = () => {
  const props = { data: sample }
  const config = { containerClassName: 'column is-2 react-open-weather-map' }

  return (
    <>
      <div>
        <OpenWeatherMap {...props} config={config} />
      </div>
    </>
  )
}

export default Weather
