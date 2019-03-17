import React, { Component, Fragment } from 'react'
import Editor from './Editor'
import './styles.sass'

class TextArea extends Component {
  render () {
    return (
      <Fragment>
        <main className={`container ${styles.editor}`}>
          <Editor />
        </main>
      </Fragment>
    )
  }
}

export default TextArea
