import React from 'react'
import gatsbyastro from './gatsby-astronaut.png'
import Layout from '../../../components/Layout'

const SuccessPage = () => {
  return (
    <Layout>
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
              Your Form has been Submitted!
                </p>
                <p>
              If an Approval or Response is required, each form send's a Slack Notification Approval to us.
                </p>
                <p>
              Realtime Notification's are then sent to Our Devices; A response should be forthcoming A.S.A.P.
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
    </Layout>
  )
}

export default SuccessPage
