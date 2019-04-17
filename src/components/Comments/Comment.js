import React from 'react'
import Utterances from 'with-utterances'

class withUtterances extends React.Component {
  render () {
    return (
        <div>
          <section className='section'>
            <Utterances />
          </section>
        </div>
      )
    }
}

export default withUtterances(PostPage, 'YOUR_REPO', 'github-dark')
