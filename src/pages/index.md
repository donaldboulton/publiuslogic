---
templateKey: 'about-page'
title: PubliusLogic
date: 2019-02-18T20:20:43.942Z
cover: /images/home-back-right.jpg
meta_title: Home | publiuslogic.com
meta_description: >-
  At PubliusLogic we Publish Logic as Common Sense. Our name was taken from my 
  extensive studies Of the Books at Large = Us Congressional Reports including a lot 
  of Notes and Letters from our Founding Fathers.
showToc: false
showTags: false
showAdds: false
showStack: true
---

## Just Having Fun

🍸 This website is built as static HTML with Gatsby React component, Node Modular Docker Container builds, data with GraphQL, Built with WebPack. Including determining Users Identity with React Netlify Identity. Data stored FaunaDB User Membership , todo's and site reviews etc... FAAS (Functions-as-a-Service) backend. I am just now working on the full data structure using FaunaDB.

### Redesign March 15th 2020

I was using Bluma for most of my Grid and layout and some styling. Using Styled components for most of My Components styles. Over riding Bluma was increasing my .css overhead and pissing me off so I came up with....

## A Physics-based Grid Cell - Item layout redesign

### Hooks window.matchMedia

Styled Components 💅 with custom React Hooks screen 🔗 [window.matchMedia](/blog/js-media-queries) mediaQuery's 💍, using `window.matchMedia` browser support.

### Abstract

In embodiments of 🔗 [calc](https://css-tricks.com/a-complete-guide-to-calc-in-css/) 🔗 [vmin vmax](https://css-tricks.com/simple-little-use-case-vmin/) screen matchMedia query algorithm to a 🔗 [physics-based](https://en.wikipedia.org/wiki/Rendering_(computer_graphics)) grid, cell, item layout. Using matchMedia browser screen query's that displays a grid layout interface that includes items within cells in a grid cell layout, and the Browser implements a physics-based `window.matchMedia` algorithm as a computer screen grid layout that can receive a redesign input based on screen size media query's to manipulate items within a cell in the grid layout interface.

The physics-based screen algorithm is implemented to then determine one or more of the cell items that are proximate to the manipulated cell based on edge relations between an edge of the manipulated cell and respective edges of the one or more grid items.

The screen matchMedia query algorithm can then reconfigure the one or more proximate cells based on the redesign input to the manipulated items and the edge relations between the edges of the cells and/or there items.

This is a work in progress, If you can help or have any comments use PubliusLogic 🔗 [Slack](https://mansbooks.slack.com/messages/DDMGYN0QY/) or 🔗 [GitHub Issues](https://github.com/donaldboulton/publiuslogic/issues) for discussions.

## Netlify Server

Served on Netlify via a continuous deployment (CD) workflow. Pull requests are automatically built into preview apps, while commits to the master branch trigger the production build and deploy onto Netlify CDN edge node infrastructure. Since the whole site is just a bunch of static files copied onto multiple CDN nodes around the world, time to first byte (TTFB) is consistently fast at around 1ms to 2ms. Instant Notifications through my Slack Bots or GMail and phone notifications using Netlify Functions for my Mansbooks.com - publiuslogic.com workspace.

## ToDo

Still have a few glitches and refactoring out some of my old Dark/Light Mode styling as sass, conversions to Component and Global JavaScript style sheets. And to fully being able to use the Physics based Grid system in a more efficient and effective manner.
