import React from 'react'

class PostListing extends React.Component {
  getPostList () {
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      })
    })
    return postList
  }
  render () {
    const postList = this.getPostList()
    return (
      <div className='container content'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            {postList.map(post => (
              <PostMeta key={post.title} postInfo={post} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default PostListing
