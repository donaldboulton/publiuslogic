import React from 'react'
import Subscriptions from '../Subscriptions'
import Slack from '../Slack'
import CssTricksAds from '../CssTricksAds'
import { AdsContainer, CssTricksDiv, SlackDiv, SubscriptionsDiv } from './styles'

const AdsGroup = () => {
  return (
    <AdsContainer css='grid-area: ads;'>
      <SlackDiv>
        <Slack />
      </SlackDiv>
      <SubscriptionsDiv>
        <Subscriptions />
      </SubscriptionsDiv>
      <CssTricksDiv>
        <CssTricksAds />
      </CssTricksDiv>
    </AdsContainer>
  )
}

export default AdsGroup

