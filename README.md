# To Publish Logic

## Technical notes about this website

🎁 [![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/donaldboulton/publiuslogic/master/LICENSE.txt)
[![Tip Me via PayPal](https://img.shields.io/badge/PayPal-tip%20me-green.svg?logo=paypal)](https://www.paypal.me/donaldboulton)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/?t=fa5cdbee-00bf-4ca8-be8f-f150a6f643e1)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![Netlify Status](https://api.netlify.com/api/v1/badges/27d2be12-eb4a-4da2-a471-aea92e199948/deploy-status)](https://app.netlify.com/sites/publiuslogic/deploys)

- 🚋Serverless Functions
- 🔏Authentication (with Netlify Identity)
- 🔐Authenticated Serverless Functions
- 😻External Provider login with GitHub, Bitbucket, Google, etc.
- 🏠Protected Routes
- 👋🏼Dynamic Clientside Pages in Gatsby (enabling all the above)
- 🕵🏼‍♂️Hide API Secrets from being exposed to Frontend

## Styling

No added external Style sheets no more Bluma which as of March 1, 2020 to March 6th I removed and, used the below to style my site. That was fun! My first attempt using my own styling Globally.

### Styled Components

Styled Components 💅 with custom React Hooks screen [window.matchMedia](/blog/js-media-queries) mediaQuery's 💍

> Beautiful media queries better than CSS @media for styled-components with ability to specify custom breakpoints.

Gallery and Logo Grids with `custom-screen mediaQuerys 🍱` [Masonry Post](/blog/react-hooks-masonary) 💅.

### Page Body Layout

`styled-css-grid 🍱`

> A tiny (~2kb) [CSS grid] layout for React, built with [styled-components] 💅.

JavaScript Standard

> [![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Just Having Fun

🍸 This website is built as static HTML with Gatsby component-modular Docker Container builds  using React components and GraphQL, Built with WebPack. Including a user data backend on FaunaDB.

Served on Netlify via a continuous deployment (CD) workflow. Pull requests are automatically built into preview apps, while commits to the master branch trigger the production build and deploy onto Netlify’s CDN edge node infrastructure. Since the whole site is just a bunch of static files copied onto multiple CDN nodes around the world, time to first byte (TTFB) is consistently fast at around 1ms to 2ms. Instant Notifications through my Slack Bots or GMail and phone notifications using Netlify Functions for my Mansbooks.com publiuslogic.com workspace.

## Gatsby Starter Publius

🚀 This repo powers the Gatsby site hosted at publiuslogic.com. I use it to write about my personal interests, ranging from theoretical physics and spiritual learning to sustainability, web development and spending time outdoors... oh and not to forget breaking conventions like a Gatsby Site with Json-Ld per template for SEO, Internet Positioning.

The site is built with Gatsby, Bulma and styled-components. It's fully responsive, relies heavily on React Hooks for stateful components such as Image Gallery's, Modal's and ToTop & ToBottom. Prism for syntax highlighting, withUtterances for blog post comments and Lunr for custom search.

Feel free to reuse any part of this repo to create your own Gatsby site.

A [Gatsby v2](https://www.gatsbyjs.org/) 🗸 and [Netlify CMS](https://www.netlifycms.org) 🗸 powered generic business website starter based on [gatsby-starter-netlify-cms](https://github.com/AustinGreen/gatsby-starter-netlify-cms) 🗸

### Server-less

🔥 No run time dependency or vulnerable server stack required Pre-built pages served over a CDN for fastest time to first byte Fast and cheap CDN scaling results in ultra-high availability worldwide Server-side processes abstracted into microservice APIs for reduced attack surface areas Modern Continuous Deployment (CD) Git workflows with instant rollbacks Headless CMS for complete separation from your app/site and with full version control Modern authentication methods such as OAuth 2 for ultimate security.

## Authentication

### Netlify Identity Widget

🔐 A Custom Styled and Build for Publius, a component used to authenticate with Netlify's Identity service.
🆔 [Live demo](https://identity.netlify.com) 🗸

For a lower level library to the underlying [GoTrue](https://github.com/netlify/gotrue) 🗸 API, see
[gotrue-js](https://github.com/netlify/gotrue-js) 🗸

> Utilizing Netlify Identity in Gatsby to make public and private pages easily.

#### What is Netlify Identity

⁉️ Netlify’s Identity service is a plug-and-play microservice for handling site
functionalities like signups, logins, password recovery, user metadata, and
roles. You can use it from single page apps instead of rolling your own, and
integrate with any service that understands JSON Web Tokens (JWTs).

Learn more about this service from this
[Blog Post](https://www.netlify.com/blog/2017/09/07/introducing-built-in-identity-service-to-streamline-user-management/) 🗸

It follows the [JAMstack architecture](https://jamstack.org) 🗸 by using Git as a single source of truth, and [Netlify](https://www.netlify.com) 🗸 for continuous deployment, and CDN distribution.

## Netlify CMS

[Static + content management = ❤️](https://www.netlifycms.org/) 🗸

🖥️ Netlify CMS is Always the latest Netlify CMS GitHub repo pull, with my custom Webpack hashed build, not the Gatsby plugin and netlify-cms node module way; which builds it into the frontend = slowing Gatsby way down; TEST it to see for yourself.

My custom dark build of the Netlify Identity Widget is used on the Gatsby frontend and in my git-gateway back-end.

Get the speed, security, and scalability of a static site, while still providing a convenient editing interface for content.

An integrated part of your Git workflow
Content is stored in your Git repository along side your code for easier versioning, multi-channel publishing, and the option to handle content updates directly in Git.

### An extensible CMS built on React

❤️ Netlify CMS is built as a single-page React app. Create custom-styled previews, UI widgets, and editor plugins or add backends to support different Git platform APIs.
My Netlify CMS backend will build and add Pages, Posts, My layout components with Event data for Bulma GCal fullCalendar localized events, Notifications, Authors, Products, Site Updates and charts data using charts.js displaying build, sales and analytics charts data on individual pages and posts. All edited from a CMS Backend on a Static Website!

## Features

> ✔️ Complete Website Suite - Pages = Home, Blog, About, Privacy, Sitemap and Contact

* Netlify CMS for Content Management
* Netlify Identity for Authentication
* FaunaDB for Authentication - Users Backend and Admin
* SEO Friendly (Sitemap, Schemas, Meta Tags, GTM etc.)
* All Twitter Widgets, Meta and SEO
* Styled Components, screen mediaMatch mediaQuerys & Bulma for styling
* Table Of Contents, on or off through frontmatter
* Tags, Categories and a RSS Feed for Blog
* Time to Read tags categories and published time meta
* Comments with React withUtterances as GitHub Issues
* Follow, Mention, Star and Fork GitHub buttons
* Share Support
* Elastic-Lunr Search
* Pagination for Blog and Posts Previous Next
* Contact Form (Lambda Netlify Forms)
* Easy Configuration using `config.js` file

## Context Provider Wrapper

PubliusLogic has a `GlobalContextProvider` wrapper for its light and dark Theme, Users{CTX} and FaunaDB{CTX}

### useDarkMode

A custom [React Hook](https://reactjs.org/docs/hooks-overview.html) to help you implement a "dark mode" component for your application.
The user setting persists to `localStorage`.

❤️ it? ⭐️ it on [GitHub](https://github.com/donavon/use-dark-mode/stargazers)
or [Tweet](https://twitter.com/intent/tweet?text=Check%20out%20the%20useDarkMode%20custom%20React%20Hook%20that%20simplifies%20adding%20a%20persistent%20dark%20mode%20setting%20to%20your%20app.&url=https%3A%2F%2Fgithub.com%2Fdonavon%2Fuse-dark-mode&via=donavon&hashtags=reactjs,hooks,darkmode)
about it.

PubliusLogic is using [use-dark-mode](https://github.com/donavon/use-dark-mode) and its suggested install instructions with [gatsby-plugin-dark-mode | GatsbyJS](https://www.gatsbyjs.org/packages/gatsby-plugin-dark-mode/), plugin for Gatsby integration injecting noflash.js.

#### Demo

[Gatsby Starter Publius](https://publiuslogic.com)

## Prerequisite

* Node
* Gatsby CLI (globally installed)

## Getting Started

Create your own project with Gatsby CLI:
```shell
gatsby new yourbusinessname https://github.com/donaldboulton/publiuslogic.git 
```

## Available Scripts

### Develop

Start a hot-reloading development environment accessible at `localhost:8000`
```shell
yarn start
```

### Build

Get an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
```shell
yarn build
```

### Serve

gatsby serve — Gatsby starts a local HTML server for testing your built site.
```shell
yarn serve
```

### Lint

Lint the code according to eslintrc file, for consistency.
```shell
yarn lint
```

### Clean

Remove the .cache and public for a scratch compile.
```shell
yarn clean
```

## Configuration

To personalize and configure this Starter open `data/config.js` file and replace the default values.

```javascript
module.exports = {
  siteTitle: 'Gatsby Starter Publius', // Site title.
  siteTitleAlt: 'Business', // Alternative site title for SEO.
  siteLogo: '/logos/icon-512x512.png', // Logo used for SEO and manifest.
  siteUrl: 'https://publiuslogic.com', // Domain of your website without pathPrefix.
  // Do not use trailing slash!
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-business/.
  siteDescription: 'Leverage Gatsby Publius Starter for fun or your Business.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml',
  siteFBAppID: '', // FB Application ID for using app insights
  googleTagManagerID: '', // GTM tracking ID.
  disqusShortname: 'mansbooks-1', // Disqus shortname.
  userName: 'Donald Boulton',
  userTwitter: 'donboulton',
  userLocation: 'OKC, Oklahoma',
  userDescription: '',
  copyright: 'Copyright © Gatsby Starter Publius 2019. All Rights Reserved.', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#1d1d1d', // Used for setting manifest and progress theme colors.
  backgroundColor: '#1d1d1d', // Used for setting manifest background color.
}

```

## Deployment

Clicking the button will ask for authentication via GitHub, which will create a repo in your github account with this starter. Then, it will build and deploy the site to Netlify.
💫
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/donaldboulton/publiuslogic&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

You can read up on how to set up Identity(Authentication for CMS User) here [How To Set Up Netlify CMS](https://www.netlifycms.org/docs/add-to-your-site/)
