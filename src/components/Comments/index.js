import React from 'react'
import CommentForm from './form'

class Comments extends React.Component {
  render () {
    return (
      <div>
        <CommentForm />
        <hr />
        <div className='comment-list'>
          <h5 className='no-comments-alert'>
              No comments on this post yet. Be the first
          </h5>
        </div>
      </div>
    )
  }
}

export default Comments
