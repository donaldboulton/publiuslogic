import React from 'react'
import RetroHitCounter from 'react-retro-hit-counter'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  text-align: right;
`

const HitCounter = () => (
  <Container>
    <RetroHitCounter
      hits={1337}
      // eslint-disable-next-line react/jsx-boolean-value
      withBorder={false}
      minLength={4}
      size={40}
      padding={4}
      digitSpacing={3}
      segmentThickness={4}
      segmentSpacing={0.5}
      segmentActiveColor='#d64000'
      segmentInactiveColor='#222222'
      backgroundColor='#222222'
      borderThickness={1}
      glowStrength={0.5}
    />
  </Container>
)

export default HitCounter
