import React from 'react'
import AllSitePages from './allsitepages'

class Template extends React.Component {
  render () {
    const { children } = this.props
    return (
      <section className='section'>
        <div style={{ marginTop: `2rem` }}>
          <div>
            <header>
              <h1>Profile Backend</h1>
            </header>
            <div>
              <div className='nav'>
                <AllSitePages />
              </div>
              {children}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Template
