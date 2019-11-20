import React from 'react'

const counterStyle = {
  width: '300px',
  height: '60px',
  margin: '2em',
  padding: '5px',
  display: 'inline',
}

export default class Counter extends React.Component {
  static defaultProps = {
    initialvalue: 0,
  }

  state = {
    value: Number(this.props.initialvalue),
  }

  handleIncrement = () => {
    this.setState(state => {
      return {
        value: state.value + 1,
      }
    })
  }

  handleDecrement = () => {
    this.setState(state => {
      return {
        value: state.value - 1,
      }
    })
  }

  render () {
    return (
      <span style={counterStyle}>
        <span className='button' style={{ flex: `1 1` }}>{this.state.value}</span>
        <button className='button' type='button' onClick={this.handleDecrement}>-1</button>
        <button className='button' type='button' onClick={this.handleIncrement}>+1</button>
      </span>
    )
  }
}
