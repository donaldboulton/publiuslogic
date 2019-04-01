import React from 'react'

import CommentForm from './form'
import Comment from './Comment'

class Comments extends React.Component {

  render () {
    const { comments } = this.state
    return (
      <div>
        <CommentForm />
        <hr />
        <div className='comment-list'>
          {comments.length ? (
            comments.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))
          ) : (
            <h5 className='no-comments-alert'>
              No comments on this post yet. Be the first
            </h5>
          )}
        </div>
      </div>
    )
  }
}

export default Comments

