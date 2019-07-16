import React from 'react'
const Rating = require('react-rating');
const Rating = ReactRating

class ControlledRating extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      value: props.initialRating,
      hoverValue: undefined,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  handleChange (value) {
    this.setState({
      value,
    });
  }
  
  handleHover (hoverValue) {
    this.setState({
      hoverValue,
    })
  }

  render () {
    return (
      <div>
        <Rating {...this.props}
          onChange={this.handleChange}
          onHover={this.handleHover}
          initialRating={this.state.value} />
        <div>Current value: {this.state.value}</div>
        <div>Hovered value: {this.state.hoverValue}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <ControlledRating />,
  document.getElementById('root')
);