# publiuslogic.com

To Publish Logic

## 🚀 gatsby-starter-publius

🍸 Just Having fun coding!

[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/donaldboulton/publiuslogic/master/LICENSE.txt)
[![Tip Me via PayPal](https://img.shields.io/badge/PayPal-tip%20me-green.svg?logo=paypal)](https://www.paypal.me/donaldboulton)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/?t=fa5cdbee-00bf-4ca8-be8f-f150a6f643e1)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![Known Vulnerabilities](https://snyk.io/test/github/donaldboulton/publiuslogic/badge.svg)](https://snyk.io/test/github/donaldboulton/publiuslogic/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/27d2be12-eb4a-4da2-a471-aea92e199948/deploy-status)](https://app.netlify.com/sites/publiuslogic/deploys)

## Styling with Bluma and Styled Css Grid

[![made with bluma](/img/made-with-bulma--dark.png)](https://bulma.io/)

### `styled-css-grid 🍱`
[![Travis](https://img.shields.io/travis/azz/styled-css-grid.svg?style=flat-square)](https://travis-ci.org/azz/styled-css-grid)

> A tiny (~2kb) [CSS grid] layout for React, built with [styled-components] 💅.

### A Gatsby Starter and My Personal website

This repo powers the Gatsby site hosted at publiuslogic.com. I use it to write about my personal interests, ranging from theoretical physics, international and United States Law's including spiritual learning to sustainability, web development and spending time outdoors... oh and not to forget breaking conventions like a Gatsby Site with Structured Microdata for SEO, Internet Positioning.

The site style and design is with, Bulma and styled-components. It's fully responsive, relies heavily on React Hooks for stateful components such as Image Gallery's, Modal's and ToTop. 
Prism for syntax highlighting, GitHub issues for blog post comments, Hooked into Analytics with Slack Notifications which is fully incorporated within this repo.
Lunr for custom search.

Feel free to reuse any part of this repo to create your own Gatsby site.

A [Gatsby v2](https://www.gatsbyjs.org/) and [Netlify CMS](https://www.netlifycms.org) powered generic business website starter based on [gatsby-starter-netlify-cms](https://github.com/AustinGreen/gatsby-starter-netlify-cms).

## Authentication

### Netlify Identity Widget

A Custom Styled and Build for Publius, a component used to authenticate with Netlify's Identity service.
[Live demo](https://identity.netlify.com)

For a lower level library to the underlying [GoTrue](https://github.com/netlify/gotrue) API, see
[gotrue-js](https://github.com/netlify/gotrue-js).

### What is Netlify Identity

Netlify’s Identity service is a plug-and-play microservice for handling site
functionalities like signups, logins, password recovery, user metadata, and
roles. You can use it from single page apps instead of rolling your own, and
integrate with any service that understands JSON Web Tokens (JWTs).

Learn more about this service from this
[blog post](https://www.netlify.com/blog/2017/09/07/introducing-built-in-identity-service-to-streamline-user-management/).

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Netlify CMS

[Static + content management = ♥](https://www.netlifycms.org/)

Netlify CMS is Always the latest GitHub repo pull, with my custom Webpack hashed build.
My custom dark build of the Netlify Identity Widget is used on the Gatsby frontend and in my git-gateway back-end.

Get the speed, security, and scalability of a static site, while still providing a convenient editing interface for content.

An integrated part of your Git workflow
Content is stored in your Git repository along side your code for easier versioning, multi-channel publishing, and the option to handle content updates directly in Git.

### An extensible CMS built on React

Netlify CMS is built as a single-page React app. Create custom-styled previews, UI widgets, and editor plugins or add backends to support different Git platform APIs.
My Netlify CMS backend will build and add Pages, Posts, My layout components with Event data for Bulma GCal fullCalendar localized events, Notifications, Authors, Products, Site Updates and charts data using charts.js displaying build, sales and analytics charts data on individual pages and posts. All edited from a CMS Backend on a Static Website!

## Demo

[Gatsby Starter Publius](https://publiuslogic.com)

## 🧐 Features

* Complete Website Suite - Home Page, About Page, Pricing Page, Privacy, Contact Page and Blog
* Netlify CMS for Content Management
* SEO Friendly (Sitemap, Schemas, Meta Tags, GTM etc)
* Bulma and Sass Support for styling
* Progressive Web App & Offline Support
* Tags and RSS Feed for Blog
* Comments with GitHub Issues
* Follow, Mention, Star and Fork GitHub buttons
* Share Support
* Elastic-Lunr Search
* Pagination
* Contact Form (Netlify Forms)
* Easy Configuration using `config.js` file

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
  siteLogo: '/icons/icon-512x512.png', // Logo used for SEO and manifest.
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
