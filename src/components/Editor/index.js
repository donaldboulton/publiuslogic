import React, { Component } from 'react'
import Editor from 'for-editor'

import './styles.sass'

class Textarea extends Component {
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

export default Textarea

