---
templateKey: article-page
title: Gatsby React Disqus Comments
slug: Gatsby React Disqus Comments
date: 2019-03-25T20:20:43.942Z
categorys: 'tech'
cover: 'gatsby+disqus.jpg'
tags:
  - Gatsby 
  - React
  - React Hooks
  - Disqus Comments
  - Tutorial
meta_title: Gatsby React Disqus Comments
meta_description: Gatsby React Disqus Comments
tweet_id: '1118651504674725888'
---

## Taken From

[janosh.io Gatsby React Disqus Comments](https://janosh.io/blog/disqus-comments)


If you're running a Gatsby blog (or any React-powered blog for that matter) and you'd like to add comment functionality, rest assured, it's very easy. I just went through that process and the only thing that took time was deciding which service to use. There are quite a few to choose from. The ones I considered were all mentioned in a [2017 Gatsby Spectrum chat](https://spectrum.chat/gatsby-js/general/whats-the-best-way-to-make-commenting-system~0c7e3f0f-8737-4948-9c52-0d20dfe37a05?m=MTUxNjM2MjE1NTY1MA==):

- [Disqus](https://disqus.com) [[mention](https://spectrum.chat/gatsby-js/general/whats-the-best-way-to-make-commenting-system~0c7e3f0f-8737-4948-9c52-0d20dfe37a05?m=MTUxMTIzMDE0NjY2MQ==)]
- [Staticman](https://staticman.net) [[mention](https://spectrum.chat/gatsby-js/general/whats-the-best-way-to-make-commenting-system~0c7e3f0f-8737-4948-9c52-0d20dfe37a05?m=MTUzNDkxODUxMDk4OA==)]
- [Facebook comments](https://www.npmjs.com/package/react-facebook) [[mention](https://spectrum.chat/gatsby-js/general/whats-the-best-way-to-make-commenting-system~0c7e3f0f-8737-4948-9c52-0d20dfe37a05?m=MTU0MTEwNTQyNDI1MA==)]
- [JustComments](https://just-comments.com) [[mention](https://spectrum.chat/gatsby-js/general/whats-the-best-way-to-make-commenting-system~0c7e3f0f-8737-4948-9c52-0d20dfe37a05?m=MTU0MTQ0MzcxMTgxMQ==)]
- [TalkYard](https://www.talkyard.io) [[mention](https://spectrum.chat/gatsby-js/general/whats-the-best-way-to-make-commenting-system~0c7e3f0f-8737-4948-9c52-0d20dfe37a05?m=MTUxNjMzMzM5MTU5NA==)]
- [Gitalk](https://gitalk.github.io) [[mention](https://github.com/gatsbyjs/gatsby/issues/12209#issuecomment-471165136)]

I ended up going with Disqus for the following reasons.

- It [seems to be by far the most widely used service](https://www.datanyze.com/market-share/comment-systems/disqus-market-share).
- It is low maintenance, meaning [moderating your comments and maintaining your forum](https://help.disqus.com/moderation/moderating-101) is easy.
- It provides official [React support](https://github.com/disqus/disqus-react).
- It offers a [generous free tier](https://disqus.com/pricing).
- It’s easy to comment: Disqus has a large existing user base and the onboarding experience for new users is fast since you can register with your Google, Facebook or Twitter account. You can also easily share your review about the post through those channels.
- Its commenting interface has a distinct but unobtrusive look that many users will instantly recognize and trust.
- All Disqus components are lazy-loaded, meaning they won't negatively impact the load times of your posts.

The other services seemed excellent as well, though, and are well worth checking out. 

Staticman, for instance, took an interesting approach. Essentially, you set up your own HTML form for writing comments, let it send a POST request on submission to one of their endpoints. From this Staticman will automatically submit a pull request to your site's repo which you can accept or deny. 
And it would be a good choice if Staticman's APi, though GitHub's limitations, was not overused and unavailable 80% of the time.

If that isn't a geeky way of doing comment moderation, I don't know what is. This has the big advantage of keeping everything static (hence the name). All your data is in one place (your repo) as opposed to having to be loaded through JavaScript embeds or iframes on the fly. It will remain there even if Staticman is ever discontinued. With the other services, you depend on an external platform to deliver your comments.

Of course, in return you have the disadvantage of increased manual setup including putting together the comment form and hooking it up to Staticman. Depending on your use case, this degree of customizability may well be an advantage. In my case, though, I just wanted something fast with as little manual configuration and setup as possible. Disqus turned out to perfect in this regard.

## Implementing Disqus

Here are the steps for adding Disqus comments to your own blog:

1. [Sign-up to Disqus](https://disqus.com/profile/signup). During the process you'll have to choose shortname for your site. This is how Disqus will identify comments coming from your site. Copy that for later.

2. Install the Disqus React package

```js
yarn add disqus-react
```

3. Add the shortname from step 1 as something like

```js
GATSBY_DISQUS_NAME
```

to your

```js
.env
```

example usage in .env.sample

```env
GATSBY_ALGOLIA_APP_ID=insertValue
GATSBY_ALGOLIA_SEARCH_KEY=insertValue
ALGOLIA_ADMIN_KEY=insertValue

GOOGLE_ANALYTICS_ID=insertValue
GATSBY_GOOGLE_MAPS_API_KEY=insertValue

# enables Disqus comments below blog posts
GATSBY_DISQUS_NAME=insertValue
```

files so that people forking your repo will know that they need to supply this value to get comments to work. (You need to prefix the environment variable with GATSBY in order to [make it available to client side code](https://www.gatsbyjs.org/docs/environment-variables/#client-side-javascript).)

or

3.5 Add it to your config.js in your data folder.
   Data/config.js

### enables Disqus comments below blog posts

```js
import config from '../../data/config'
```

```js
disqusShortname: 'yourOwnSiteShortname'
```

4. Go to your template file for blog post 

```js
(in my case src/components/ArticleTemplate) and import the DiscussionEmbed
```

React component.

```js{3}:title=src/components/ArticleTemplate
  import React from 'react'
  import { graphql } from 'gatsby'
  import { DiscussionEmbed } from 'disqus-react'
```

Then define your Disqus configuration object if you are not using .env or Data/config.js

```js
  const disqusShortname = 'yourShortName'
  const disqusConfig = {
    identifier: slug,
    title: title,
  }
```

Where identifier must be a string or number that uniquely identifies the post. Finally, add DiscussionEmbed to the JSX of your post template.

Add Discussion embed

 ```js{5}:title=src/components/ArticleTemplate
  return (
    <Global>
      <PageBody>
        ...
      <DiscussionEmbed {...disqusConfig} />
      </PageBody>
    </Global>
  )  
```

And you're done. You should now see the Disqus comment form appear beneath your blog post just like the one below this post. Happy blogging!

# Update

## Adding comment counts to your blog post previews

If you'd like your blog post previews to show a count of the number of comments each post received, simply import disqus-react's CommentCount in the relevant component and provide it the exact same config object as DiscussionEmbed.

adding

```js{6,20-22}:title=data/config.js
  import React from 'react'
  import { Link } from 'gatsby'
  import { CommentCount } from 'disqus-react'

  import { Meta, TagList, Calendar, Timer, Comments } from './styles'
  import config from '../../data/config'

  const PostMeta = ({ title, slug, date, timeToRead, tags }) => (
    <Meta>
      <span>
        <Calendar size='1.2em' />
        {date}
      </span>
      <span>
        <Timer size='1.2em' />
        {timeToRead} min read
      </span>
      <span>
        <Comments size='1.2em' />
        <Link to={`/blog` + slug + `#disqus_thread`}>
          <CommentCount {...disqusConfig({ slug, title })} />
        </Link>
      </span>
      <TagList tags={tags} />
    </Meta>
  )
  
  export default PostMeta
```

where the config object now comes from the utility function 

```js
  disqusConfig()
```

You can customize what string the Comment Count component displays depending on how many comments a post has by going to your Disqus admin settings [as described here](https://help.disqus.com/installation/customizing-comment-count-link-text). For instance you might want to change the text '0 comments' to something more inspiring like 'Start a discussion!'. :wink:

![Disqus community admin settings](/img/disqus-community-admin-settings.png)
