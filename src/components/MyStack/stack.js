import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Modali, { useModali } from 'modali'
import './styles.css'

const StackContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`
const PreviewButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
`

const Stack = () => {
  const [toggleCompleteModal] = useModali({
    animated: true,
    title: 'My Stack 🎉',
    message: 'Email Addresses are Private.',
  })

  this.state = {
    toggleCompleteModal: false,
    selectedImage: null,
  }

  const { stackImages } = this.props
  const { selectedImage } = this.state
  return (
    <Fragment>
      <StackContainer>
        {stackImages.map(image => (
          <PreviewButton
            key={image.node.childImageSharp.fluid.src}
            type='button'
            onClick={() => this.setState({ toggleCompleteModal: true, selectedImage: image })}
          >
            <Img fluid={image.node.childImageSharp.fluid} />
          </PreviewButton>
        ))}
      </StackContainer>
      <Modali.Modal {...stackImages} className='modali-size-large'>
        <Img fluid={selectedImage.node.childImageSharp.fluid} />
      </Modali.Modal>
    </Fragment>
  )
}

Stack.propTypes = {
  stackImages: PropTypes.array.isRequired,
}
