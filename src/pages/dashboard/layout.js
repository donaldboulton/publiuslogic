import AllSitePages from './allsitepages'
import Footer from './footer'
import React from 'react'

class Template extends React.Component {
  render () {
    const { children } = this.props
    return (
      <div>
        <div>
          <div>
            <header>
              <h1>gatsby-starter by David Sabine</h1>
            </header>
            <div>
              <div className='nav'>
                <AllSitePages />
              </div>
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Template
