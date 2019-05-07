import React from 'react'
import gatsbyastro from './gatsby-astronaut.png'
import Global from '../../../components/Global'

const SuccessPage = () => {
  return (
    <Global>
      <section className='hero is-primary is-bold is-medium'>
        <div className='hero-body'>
          <h1 className='title'>
           Success! Your Form Has Been Submitted.
          </h1>
        </div>
        <div className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-half'>
                <p>
                  If an Approval or Response is required, each form send's a Slack Notification to us.
                </p>
                <p>
                  Slack Realtime Notification's are then sent to Our Devices; A response should be forthcoming A.S.A.P.
                </p>
              </div>
              <div className='column'>
                <img
                  src={gatsbyastro}
                  alt='GitHub'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Global>
  )
}

export default SuccessPage
