---
templateKey: article-page
title: React Hook Form Builder
slug: React Hook Form Builder
date: 2019-04-23T20:20:43.942Z
category: 'tech'
cover: /img/react-hooks-form.jpg
tags:
  - Gatsby
  - Forms
  - React
  - Validation
meta_title: React Hook Form Builder
meta_description: React Hook Form Builder
---

## React Hook Forms

I chose this module to validate my forms, its lightweight and integrates with yup schemas. Plus a nice online form builder and right on point instructions.

You can see this form validation in action on my contact page and on my email form in a modali window, the button for the popup email form is in the email section at the lower part of every PubliusLogic page.

[简体中文](https://github.com/bluebill1049/react-hook-form/blob/master/docs/README.zh-CN.md")

![](https://raw.githubusercontent.com/bluebill1049/react-hook-form/master/website/logo.png)

[React Hooks Form Builder](href="https://react-hook-form.now.sh/")

> React hook form validation without the hassle

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=React+Hook-Form&url=https://github.com/bluebill1049/react-hook-form)&nbsp;
[![CircleCI](https://circleci.com/gh/bluebill1049/react-hook-form.svg?style=svg)](https://circleci.com/gh/bluebill1049/react-hook-form) 
[![Coverage Status](https://coveralls.io/repos/github/bluebill1049/react-hook-form/badge.svg?branch=master)](https://coveralls.io/github/bluebill1049/react-hook-form?branch=master) 
[![npm downloads](https://img.shields.io/npm/dm/react-hook-form.svg?style=flat-square)](https://www.npmjs.com/package/react-hook-form)
[![npm](https://img.shields.io/npm/dt/react-hook-form.svg?style=flat-square)](https://www.npmjs.com/package/react-hook-form)
[![npm](https://badgen.net/bundlephobia/minzip/react-hook-form)](https://badgen.net/bundlephobia/minzip/react-hook-form)

- Super easy to integrate and create forms
- Built with React Hooks with performance and developer experience in mind
- Follows HTML standard for validation
- Tiny size without other any dependency
- Build forms quickly with the [form builder](https://react-hook-form.now.sh/builder)

## Install

    $ npm install react-hook-form

    $ yarn add react-hook-form

    For validation schemas use yup

    $ npm install yup

    $ yarn add yup

### Yup at [code sandbox](https://codesandbox.io/s/yyyqp7y8x)

## [Docs](https://react-hook-form.now.sh/api)

- [Motivation](https://medium.com/@bruce1049/form-validation-with-hook-in-3kb-c5414edf7d64)
- [Get started](https://react-hook-form.now.sh/api)
- [API](https://react-hook-form.now.sh/api)
- [Examples](https://github.com/bluebill1049/react-hook-form/tree/master/examples)
- [Demo](https://react-hook-form.now.sh)
- [Form Builder](https://react-hook-form.now.sh/builder)

## Quickstart

```jsx
import React from 'react'
import useForm from 'react-hook-form'

function App() {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const onSubmit = (data) => { console.log(data) } // callback when validation pass
    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstname" ref={register} /> {/* register an input */}
      
      <input name="lastname" ref={register({ required: true })} /> {/* apply required validation */}
      {errors.lastname && 'Last name is required.'} {/* error message */}
      
      <input name="age" ref={register({ pattern: /\d+/ })} /> {/* apply a Refex validation */}
      {errors.age && 'Please enter number for age.'} {/* error message */}
      
      <input type="submit" />
    </form>
  )
}
```

### validationSchema

If you would like to centralize your validation rules or external validation schema, you can apply validationSchema when you invoke useForm. we use Yup for object schema validation and the example below demonstrate the usage.

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import useForm from 'react-hook-form'
import * as yup from 'yup'

const SignupSchema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required(),
});

function App() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: SignupSchema
  });
  const onSubmit = data => {
    console.log(data);
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="name" ref={register} />
      <input type="number" name="age" ref={register} />
      <input type="submit" />
    </form>
  )
}
```

## Contributors 
Thanks goes to these wonderful people:

    [AyumiKai]https://github.com/AyumiKai)
    [garthmcrae](https://github.com/garthmcrae)
    [erikras]https://github.com/erikras)

