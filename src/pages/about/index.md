---
templateKey: about-page
title: About Us
cover: ./about.jpg
meta_title: About Us | Gatsby Starter Publius
meta_description: >-
  This website is built as static HTML with Gatsby component-modular builds including a Node backend, with React components and Built with Webpack.
---

## Technical notes about this website

[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/donaldboulton/publiuslogic/master/LICENSE.txt)
[![Tip Me via PayPal](https://img.shields.io/badge/PayPal-tip%20me-green.svg?logo=paypal)](https://www.paypal.me/donaldboulton)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/?t=fa5cdbee-00bf-4ca8-be8f-f150a6f643e1)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![Netlify Status](https://api.netlify.com/api/v1/badges/27d2be12-eb4a-4da2-a471-aea92e199948/deploy-status)](https://app.netlify.com/sites/publiuslogic/deploys)

## `styled-css-grid 🍱`
[![Travis](https://img.shields.io/travis/azz/styled-css-grid.svg?style=flat-square)](https://travis-ci.org/azz/styled-css-grid)

> A tiny (~2kb) [CSS grid] layout for React, built with [styled-components] 💅.

🍸 Just Having fun coding!

This website is built as static HTML with Gatsby component-modular builds including a Node backend, with React components and Built with Webpack.

Served on Netlify via a continuous deployment (CD) workflow. Pull requests are automatically built into preview apps, while commits to the master branch trigger the production build and deploy onto Netlify’s CDN edge node infrastructure. Since the whole site is just a bunch of static files copied onto multiple CDN nodes around the world, time to first byte (TTFB) is consistently fast at around 1ms to 2ms. React Notifications through my Slack Bots and Netlify Functions for my Mansbooks publiuslogic.com workspace.

### Server-less

No run time dependency or vulnerable server stack required Pre-built pages served over a CDN for fastest time to first byte Fast and cheap CDN scaling results in ultra-high availability worldwide Server-side processes abstracted into microservice APIs for reduced attack surface areas Modern Continuous Deployment (CD) Git workflows with instant rollbacks Headless CMS for complete separation from your app/site and with full version control Modern authentication methods such as OAuth 2 for ultimate security.

## 🚀 gatsby-starter-publius

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

## Features

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

