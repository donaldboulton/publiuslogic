import React from 'react'
import { usePostMetadata } from '../hooks/use-site-metadata'

export default () => {
  const { title, tweet_id } = usePostMetadata()
  return <h1>welcome to {title} with twitter id of {tweet_id}</h1>