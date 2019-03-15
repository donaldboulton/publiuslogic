import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Editor from 'for-editor'

import './styles.sass'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '',
    }
  }

  handleChange (value) {
    this.setState({
      value,
    })
  }

  render () {
    const { value } = this.state
    return (
      <Editor value={value} onChange={this.handleChange.bind(this)} />
    )
  }
}

ReactDOM.render(
  <Editor />,
  document.getElementById('textarea')
)