import React, { useState, useEffect } from 'react'

import axios from 'axios'

const API = 'https://api.applause-button.com'
const VERSION = '3.0.0'
const mainUrl = 'https://publiuslogic.com'

const HEADERS = {
  'Content-Type': 'text/plain',
}

const getClaps = async (url) => {
  const query = url ? `?url=${url}` : ''
  return await axios.get(`${API}/get-claps${query}`, {
    headers: HEADERS,
  })
}

const updateClaps = async (url, claps = 1) => {
  console.log(claps)
  const query = url ? `?url=${url}` : ''
  return await axios.post(`${API}/update-claps${query}`,
    JSON.stringify(`${claps},${VERSION}`), {
      headers: HEADERS,
    })
}

const ApplauseButton = ({ url = mainUrl }) => {
  const [count, setCount] = useState(0)
  const [isClapped, setIsClapped] = useState(false)

  const doApplause = () => {
    if (!isClapped) {
      console.log('do clapping')
      const callBackend = async () => {
        const result = await updateClaps(url, 1)
        setCount(result.data)
        setIsClapped(true)
      }
      callBackend()
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await getClaps(url)
      console.log(result)
      setCount(result.data)
    }
    fetchData()
  }, [])

  return <span
    style={{
      cursor: 'pointer',
      padding: '10px',
    }} onClick={doApplause}
  >
    {
      isClapped ? '🤟' : '👏'
    }
    {` ${count}`}
         </span>
}

export default ApplauseButton
