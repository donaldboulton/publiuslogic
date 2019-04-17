import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 250px;
`

const Comments = ({ title }) => {
  let container = useRef()

  useEffect(() => {
    if (!container.current) return

    const config = {
      src: 'https://utteranc.es/client.js',
      repo: 'donaldboulton/publiuslogic',
      label: 'comments',
      theme: 'github-dark',
      async: true,
      'issue-term': title,
      crossorigin: 'anonymous',
    }

    const script = document.createElement('script')

    Object.keys(config).forEach(key => {
      script.setAttribute(key, config[key])
    })

    const params = new URLSearchParams(window.location.search)

    // If the 'commenting' URL param is present then scroll to the comments
    if (params.has('commenting')) {
      const commentsScroll = container.current.getBoundingClientRect().top
      const scroll = commentsScroll + window.innerHeight
      window.scroll(0, scroll)
    }

    // Briefly set the 'commenting' URL param while the utterances script is created
    // This ensures the script is initialized with the correct redirect_uri for GitHub OAuth
    params.set('commenting', true)
    const redirectUrl = `${window.location.pathname}?${params.toString()}`
    window.history.replaceState(null, '', redirectUrl)

    // Append the Utterances script to the container
    while (container.current.firstChild) container.current.firstChild.remove()
    container.current.appendChild(script)

    // Once the script has loaded remove the 'commenting' URL param again
    script.onload = () => {
      params.delete('commenting')
      const search = params.toString()
      const originalUrl = window.location.pathname + (search && `?${search}`)
      window.history.replaceState(null, '', originalUrl)
    }
  }, [container.current, title])

  return <Container ref={container} />
}

export default Comments
