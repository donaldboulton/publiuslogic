---
templateKey: article-page
title: Gatsby CRUD Netlify Fauna
slug: Gatsby CRUD Netlify Fauna
date: 2019-11-10T20:20:43.942Z
category: 'tech'
cover: '/images/gatsby-netlify-fauna.jpg'
tags:
  - Gatsby
  - Serverless
  - Netlify
  - Fauna
  - Functions
meta_title: Gatsby CRUD Netlify Fauna
meta_description: Gatsby CRUD Netlify Fauna
tweet_id: '1118651504674725888'
showToc: true
---

## Gatsby Serverless FaunaDB

Based on [Nelifty post](https://www.netlify.com/blog/2018/07/09/building-serverless-crud-apps-with-netlify-functions-faunadb/?_ga=2.21698171.1777301599.1576092869-301685750.1573932436#wrapping-up)

And some code functions and the Database schema mixed in from [Netlify FaunaDB ToDo](https://github.com/fauna/netlify-faunadb-todomvc) for Netlify Identity Login and to set up the database.

Serverless functions seem to be all the rage these days. But why?

Devs are adopting the FAAS (Functions-as-a-Service) because of:

Pay-per-execution pricing: You only pay for the how long your function code runs, not for idle server time.
Scalability: Load balancing, security patches, logging, etc. are all handled by the FAAS provider. That leaves more time for companies to focus on their app instead of the underlying infrastructure.
Most importantly, perhaps, is that server-less functions give frontend developers superpowers.

If you can write JavaScript, you can build out robust backend applications and APIs using simple AWS Lambda functions.

Need to process payments? Functions have your back.

Need to build a backend API? Yep, functions can do that.

Need to send transactional emails/SMS to users? Functions got you.

We’ve previously explored how functions work together with Identity on Netlify, but today we’re going a step further. This post will focus on using functions to build a backend API for a React App.

We will be walking through how you can use FaunaDB with Netlify Functions to build a CRUD (Create, Read, Update, Delete) API.

![FaunaDB](/img/fauna.png "FaunaDB")
_[`FaunaDB` serverless functions](https://www.netlify.com/docs/functions/)_

## Fauna Functions ToDo Example

The Todo Sample is in the [Netlify Fauna ToDo](https://github.com/jchris/netlify-fauna-todo), GitHub Repo.

See our users page for the [ToDo](/users) Functions Example

Details and Code Sample's are being added ASAP
