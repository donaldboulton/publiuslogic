# publiuslogic.com

To Publish Logic

[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/donaldboulton/publiuslogic/master/LICENSE.txt)
[![Tip Me via PayPal](https://img.shields.io/badge/PayPal-tip%20me-green.svg?logo=paypal)](https://www.paypal.me/donaldboulton)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/?t=fa5cdbee-00bf-4ca8-be8f-f150a6f643e1)

## gatsby-starter-publius

This repo powers the Gatsby site hosted at publiuslogic.com. I use it to write about my personal interests, ranging from theoretical physics and spiritual learning to sustainability, web development and spending time outdoors... oh and not to forget breaking conventions like a Gatsby Site with Microdata for SEO, Internet Positioning.

The site is built with Gatsby, Bulma and styled-components. It's fully responsive, relies heavily on React Hooks for stateful components such as Image Gallery's, Modal's and ToTop. Prism for syntax highlighting, Disqus for blog post comments and Lunr for custom search.

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

## Demo

[Gatsby Starter Publius](https://publiuslogic.com)

## Features

* Complete Website Suite - Home Page, About Page, Pricing Page, Privacy, Contact Page and Blog
* Netlify CMS for Content Management
* SEO Friendly (Sitemap, Schemas, Meta Tags, GTM etc)
* Bulma and Sass Support for styling
* Progressive Web App & Offline Support
* Tags and RSS Feed for Blog
* Disqus and Share Support
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
  disqusShortname: 'publius', // Disqus shortname.
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

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/donaldboulton/publiuslogic&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

You can read up on how to set up Identity(Authentication for CMS User) here [How To Set Up Netlify CMS](https://www.netlifycms.org/docs/add-to-your-site/)
