import React from 'react'
import withUtterances from 'with-utterances'

class Comments extends React.Component {
  render () {
    return (
      <div>
        <withUtterances />
      </div>
    )
  }
}

export default withUtterances(Comments, 'donaldboulton/publiuslogic', 'github-dark', 'og:title')
