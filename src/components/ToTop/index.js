import React from 'react'
import chevron from '../../img/chevron-up.svg';
require('./ToTop')

const Top = class extends React.Component {
  render () {
    return (
      <div>
        <span onClick='topFunction()' className='toTop' id='toTop' title='Go to top'>
          <img src={chevron} alt='toTop' style={{ width: '1.5em' }} />
        </span>
      </div>
    )
  }
}

export default Top
