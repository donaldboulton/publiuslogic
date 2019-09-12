
import React from 'react'
import OpenWeatherMap from 'react-open-weather-map'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/Section'

class Weather extends Component {
  constructor (props) {
    super(props)
    this.link = React.createRef()
    this.state = {
      link: this.href,
    }
  }
  componentDidMount () {
    // Request for images tagged cats
    axios.get('http://maps.openweathermap.org/maps/2.0/weather/{CL}/{2}/{35.3931}/{-97.6006}?date=1527811200&
    opacity=0.9&fill_bound=true&appid={8f4c1537b5fad3b111dae7b441fd0937}')
      .then(res => {
        console.log(res.data.resources)
        this.setState({ weather: res.data.resources })
      })
  }

  onLink (event) {
    this.setState({ link: this.href = `http://maps.openweathermap.org/maps/2.0/weather/{CL}/{2}/{35.3931}/{-97.6006}?date=1527811200&
    opacity=0.9&fill_bound=true&appid={8f4c1537b5fad3b111dae7b441fd0937}` })
  }
  const config = { containerClassName: 'column is-2 react-open-weather-map' }

  return (
    <ThemeProvider theme={theme}>
      <>
        <OpenWeatherMap config={config} />
      </>
    </ThemeProvider>
  )
}

export default Weather
