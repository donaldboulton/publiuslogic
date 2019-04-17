---
templateKey: article-page
title: Gatsby GitHub Comments Utterances
slug: Gatsby GitHub Comments Utterances
date: 2019-03-25T20:20:43.942Z
category: "tech"
cover: /img/gatsby+react+utterances.jpg
tags:
  - Gatsby
  - GitHub
  - React
  - Utterances 
  - Comments
meta_title: Gatsby GitHub Comments Utterances
meta_description: Gatsby GitHub Comments Utterances
---

# React withUtterances [Repo](https://github.com/khw1031/withUtterances)

## React ❤️ [Utterances](https://github.com/utterance/utterances)

**WithUtterances** is a React Higher-Order-Component for Super LightWeight Comments Widget named [Utterances](https://github.com/utterance/utterances).

### No need Duplicated DOM Bindings for each react component.

#### Just Wrap It!

1. `import withUtterances from 'with-utterances'`
2. Wrap your react component
3. Pass your repo as a String
4. Done!

### Installation

```sh
npm i with-utterances
yarn add with-utterances
```

### Usage

import `withUtterances` to the file which has component that you want to show utterances comment widget.

```jsx
import withUtterances from 'with-utterances'


class PostPage extends React.Component {
    //...
}

// Or

const PostPage = () => {
    //...
}

export default withUtterances(PostPage, 'YOUR_REPO')

// Or to specify a theme

export default withUtterances(PostPage, 'YOUR_REPO', 'github-dark')

// Or to specfiy an issue term

export default withUtterances(PostPage, 'YOUR_REPO', 'github-light', 'og:title')
```

It uses your pathname as `issue-term`.

#### Supported Themes

By default [Utterances](https://github.com/utterance/utterances) comes with two choices for themes:
- `github-light` - The normal Github style
- `github-dark` - A dark mode in the style of Github

More themes can be added [with additional stylesheets](https://github.com/utterance/utterances/blob/master/CONTRIBUTING.md#theme-development).

### Supported Issue Terms

- `pathname` - Issue title which contains the path of the current page.
- `url` - Issue title which contains the URL of the current page.
- `title` - Issue title which contains the tab title of the current page.
- `og:title` - Issue title which contains the Open Graph title meta.
- `<serach term>` - Issue title which contains the given String.

### PS. preload and prefetch Applied

It will make your Utterances Widget to load slightly faster. <3


### PS. DEMO SITE

[Demo Using withUtterance](https://khw1031.github.io/posts/withUtterances)

### My Utterances react Component

```jsx
import React from 'react'
import withUtterances from 'with-utterances'

class Comments extends React.Component {
  render () {
    return (
      <div>
        <withUtterances />
      </div>
    )
  }
}

export default withUtterances(Comments, 'donaldboulton/publiuslogic', 'github-dark', 'og:title')
```

### Or not using a react component

```js
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
      "issue-term": title,
      theme: 'github-dark',
      async: true,
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
```
