import React from 'react'
import Subscriptions from '../Subscriptions'
import Slack from '../Slack'
import NetlifyAds from '../NetlifyAds'
import { AdsContainer, NetlifyDiv, SlackDiv, SubscriptionsDiv } from './styles'

const AdsGroup = () => {
  return (
    <AdsContainer css='grid-area: ads;'>
      <SlackDiv>
        <Slack />
      </SlackDiv>
      <SubscriptionsDiv>
        <Subscriptions />
      </SubscriptionsDiv>
      <NetlifyDiv>
        <NetlifyAds />
      </NetlifyDiv>
    </AdsContainer>
  )
}

export default AdsGroup

