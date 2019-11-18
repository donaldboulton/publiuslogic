import React from 'react'
import OpenWeatherMap from 'react-open-weather-map'
import axios from 'axios'

const Weather = () => {
  constructor (props) {
    super(props)
    this.link = React.createRef()
    this.state = {
      link: this.href,
  }
  componentDidMount () {
    axios.get('http://maps.openweathermap.org/maps/2.0/weather/{CL}/{2}/{35.3931}
    
    /{-97.6006}?date=1527811200&
    opacity=0.9&fill_bound=true&appid={8f4c1537b5fad3b111dae7b441fd0937}')
      .then(res => {
        console.log(res.data.resources)
        this.setState({ weather: res.data.resources })
      })
  }
}

  onLink (event) {
    this.setState({ link: this.href = `http://maps.openweathermap.org/maps/2.0/weather/{CL}/{2}/{35.3931}/{-97.6006}?date=1527811200&
    opacity=0.9&fill_bound=true&appid={8f4c1537b5fad3b111dae7b441fd0937}` })
  }
  const config = { containerClassName: 'column is-2 react-open-weather-map' }

  return (
      <>
        <OpenWeatherMap config={config} />
        <div id="openweathermap-widget-11"></div>
        <script src='//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'></script><script>window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 11,cityid: '4544349',appid: '8f4c1537b5fad3b111dae7b441fd0937',units: 'metric',containerid: 'openweathermap-widget-11',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();</script>
      </>
  )
}

export default Weather
