import React from 'react'
import styled from 'styled-components'

const Label = styled('label')`
  background: #363636;
  border: 1px solid #000000;
  border-radius: 0.25rem;
  display: inline-block;
  margin: 0 0.5rem;
  padding: 0.5rem 0.25rem 0.25rem;
  position: relative;
  text-align: center;

  &.focused {
    background: #d64000;
    border: 1px solid #c93c00;
    color: white;
  }

  &:focus-within {
    box-shadow: 0 0 0 4px #c93c00;
  }
`

const Emoji = styled('span')`
  display: block;
  font-size: 3rem;
  line-height: 1;
`

const RatingText = styled('span')`
  display: block;
  font-family: sans-serif;
  font-size: 0.75rem;
  font-weight: bold;
  margin: 0.25rem 0 0;
`

const Input = styled('input')`
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
`

const RatingOption = ({
  emojiLabel,
  emoji,
  ratingText,
  ratingValue,
  checked,
  handleChange,
}) => {
  return (
    <Label className={checked ? 'focused' : null}>
      <Emoji className='emoji' aria-label={emojiLabel}>
        {emoji}
      </Emoji>
      <RatingText className='level'>{ratingText}</RatingText>
      <Input
        type='radio'
        name='feedback'
        value={ratingValue}
        id={`rating${ratingValue}`}
        checked={checked}
        onChange={handleChange}
      />
    </Label>
  )
}

export default RatingOption
