import React from 'react'

const Comment = ({ comment }) => (
  <div className='comments__list'>
    {this.state.comments.map(o => (
      <p key={o.number}>
        <div className='comments__name'>{o.name}</div>
        <div>{o.data.message}</div>
      </p>
    ))}
  </div>
)

export default Comment

