import React, { useState, useRef } from 'react'
import { Link } from 'gatsby'
import { Meta, Category, Post, PostContent, PostGrid, Cover } from './styles'
import { Calendar, FileSymlinkFile } from '@styled-icons/octicons/'
import { Timer } from '@styled-icons/material/Timer'
import { useSpring, animated } from 'react-spring'
import ReactParticles from 'react-particles-js'
import particlesConfig from '../../utils/particles-config.js'

function Particles ({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <ReactParticles
        params={particlesConfig}
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
      />
      {children && <div style={{ position: 'relative' }}>{children}</div>}
    </div>
  )
}

function Card ({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef()

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false)

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 },
    }
  })

  return (
    <animated.div
      ref={ref}
      className='card-blog'
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft))

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop))

        // Set animated values based on mouse position and card dimensions
        const dampen = 50 // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07, // Scale
        ]

        // Update values to animate to
        setAnimatedProps({ xys: xys })
      }}
      onMouseLeave={() => {
        setHovered(false)
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] })
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`,
        ),
      }}
    >
      {children}
    </animated.div>
  )
}

const PostCard = ({ posts, category, date, timeToRead, postNode, coverClassName, frontmatter, inTitle = false, ...rest }) => {
  return (
    <PostGrid minWidth='17em' maxWidth='50em' gap='1.5em' {...rest}>
      {posts
        .filter(post => post.node.frontmatter.templateKey === 'article-page')
        .map(({ node: post }) => (
          <Card
            key={post.id}
          >
            <Post>
              <Link to={post.fields.slug}>
                <div className='container'>
                  <Cover src={post.frontmatter.cover} alt={post.frontmatter.title} />
                </div>
              </Link>
              <div className='post-section'>
                <Link
                  style={{
                    marginLeft: '1em',
                  }}
                  aria-label='Post Link'
                  className='h2 a'
                  to={post.fields.slug}
                >
                  {post.frontmatter.title}
                </Link>
                <Meta inTitle={inTitle}>
                  <div
                    style={{
                      marginLeft: '1em',
                    }}
                  >
                    <span>
                      <Calendar size='1em' /><small>&nbsp;{post.frontmatter.date}</small>&nbsp;
                      <Timer size='1em' />&nbsp;
                      <small key={post.timeToRead}>{post.timeToRead}&nbsp;min read</small>&nbsp;
                      <Category><FileSymlinkFile size='1em' />&nbsp;<small>Category:</small>&nbsp;<Link aria-label='Categories' to='/categories/'><small>{post.frontmatter.category}</small></Link></Category>
                    </span>
                  </div>
                </Meta>
                <PostContent>
                  <Particles>
                    <div
                      style={{
                        marginBottom: '1em',
                      }}
                    >
                      {post.excerpt}
                    </div>
                  </Particles>
                </PostContent>
              </div>
            </Post>
          </Card>
        ))}
    </PostGrid>
  )
}

export default PostCard

