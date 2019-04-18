---
templateKey: article-page
title: Gatsby GitHub Comments Utterances
slug: Gatsby GitHub Comments Utterances
date: 2019-04-16T20:20:43.942Z
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

[Taken From: bhnywl.com](https://www.bhnywl.com/how-to-add-comments-to-a-blog-built-with-a-static-site-generator/)

## Why use Utterances

Lets say all your users are developers and already have a GitHub account so they don’t need to sign up for yet another 3rd party service like Disqus (which will also track their every move through the web 😈)
Unlike Staticman GitHub Issues are truly dynamic so new comments will show without having to wait for your site to rebuild and deploy
You get access to all the features of GitHub Issues out of the box (notifications, moderation, reactions, etc.)
Developers care about the appearance of their GitHub accounts, which is likely to result in better (or at least civil) discussion.
It’s free and open source!

If your users are more privacy-minded then Disqus may not be the right fit. Software developers, for example, are extremely privacy conscious. As my blog is aimed at other software developers I use [Utterances](https://utteranc.es) as a comment system. However, remember that your readers will need a GitHub account to leave a comment using Utterances so if your target audience do not work (or play!) within the tech industry this will not be the comment system for you.

### React ❤️ [Utterances](https://github.com/utterance/utterances)

**WithUtterances** is a React Higher-Order-Component for Super LightWeight Comments Widget named [Utterances](https://github.com/utterance/utterances).

### No need Duplicated DOM Bindings for each react component

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
- `github-light` - The normal GitHub style
- `github-dark` - A dark mode in the style of GitHub

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

### My withUtterances react Component

Using GitHub pages dark theme. From the SEO component, 'og:title', to set the comment to a specific page.
And this component with the specific meta-tags can be used, "anywhere", not just posts!

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

### Or not using withUtterances npm module

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

### Issues total count button

You could add a issues total count button which links to your repo page issues.

Using [react-github-btn](https://github.com/ntkme/react-github-btn)

Then you can go to [Button github.io](https://buttons.github.io/) to configure your buttons.

My new trick to get around window or .document module errors, which this 'react-github-btn' is an offending npm module is to...

First call the offending Module

```js
import GitHubButton from 'react-github-btn'
```

Then tell Gatsby it window is undefined.

```js
// eslint-disable-next-line valid-typeof
if (typeof window !== undefined) { require('react-github-btn') }
```

The Component for the issues button

```js
import React, { PureComponent } from 'react'
import GitHubButton from 'react-github-btn'

// eslint-disable-next-line valid-typeof
if (typeof window !== undefined) { require('react-github-btn') }

class GitHubIssues extends PureComponent {
  render () {
    return (
      <GitHubButton href='https://github.com/donaldboulton/publiuslogic/issues' 
          data-size='large' 
          data-show-count='true' 
          aria-label='Issue donaldboulton/publiuslogic on GitHub'>
            Issue
      </GitHubButton>
    )
  }
}

export default GitHubIssues
```

If you are a developer and use Gatsby this is a cool and logical way to have comments.

In my next post I will tie this component to Google Analytics as GitHub Issues.
