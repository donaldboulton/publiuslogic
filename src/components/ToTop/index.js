import React from 'react'
import chevron from '../../img/chevron-up.svg';
import scroll from 'react-scroll'

const Top = class extends React.Component {
  constructor (props) {
    super(props)
    this.scrollToTop = this.scrollToTop.bind(this)
  }
  componentDidMount () {

    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments)
    })

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments)
    })
  }
  scrollToTop () {
    scroll.scrollToTop();
  }
  scrollTo () {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  render () {
    return (
      <div>
        <span className='toTop' id='toTop' title='Go to top'>
          <a
            onClick={this.scrollToTop}
            activeClass='active'
            to='nav'
            offset={-70}
            duration={500}
          >
            <img src={chevron} alt='toTop' style={{ width: '1.5em' }} />
          </a>
        </span>
      </div>
    )
  }
}

export default Top
