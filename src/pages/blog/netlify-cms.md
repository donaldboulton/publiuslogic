---
templateKey: article-page
title: Netlify CMS
path: /netlify-cms
slug: /netlify-cms
date: 2019-03-22T03:36:27.484Z
cover: '/images/netlify-cms.jpg'
category: 'Gatsby'
tags:
  - Netlify
  - CMS
  - App
  - Identity
meta_title: Netlify CMS
meta_description: Netlify CMS App backend for editing data and site pages
tweet_id: '1118651504674725888'
showToc: true  
showTags: true 
showAdds: true 
showStack: true
---
 
## Netlify CMS-App

🔥 Static + content management = ❤️ 🔗 [CMS Site](https://www.netlifycms.org/)

If you have issues lately with Netlify CMS in Gatsby then you need to upgrade to netlify CMS App

React Hooks support in Netlify CMS (and the Gatsby plugin)
by Tony Alves on July 23, 2019

Netlify CMS is an extensible app written in, and bundled with, React. The most common extension is the custom preview template, which allows the preview on the right side of the editor to show what the site will actually look like as you type. These preview templates are also written in React.

Preview templates and other extensions can only use the Netlify CMS bundled copy of React via the createClass() method that Netlify CMS exports. Since React components are most often written in JSX and transpiled through a build system, most developers won't want to use this method, so the preview templates are created with a separate copy of React.

This means that Netlify CMS has two instances of React running at once.

But everything still worked - until React Hooks was released.

## The problem: React Hooks

Before Hooks, multiple instances of React could work on the same DOM, although it was warned against and technically not supported. React Hooks changed this by throwing an error if multiple instances are detected. When developers started using hooks in their Netlify CMS previews and widgets, their applications stopped working 😭

## The solution

### netlify-cms-app

In the past, the netlify-cms npm package was the only way to run Netlify CMS - it's a "batteries included" distribution that runs as-is, bringing along React and a number of default extensions (widgets, backends, etc).

As of Netlify CMS 2.9.0, a new netlify-cms-app package is provided as a slimmed down alternative to netlify-cms. It still includes most default extensions, but excludes some of the heavier ones, like media libraries for external providers.

Most importantly, it does not include react or react-dom, requiring them instead as peer dependencies. This allows Netlify CMS and any extensions to all use a single instance of React and React DOM. As a bonus, the netlify-cms-app bundle is a bit smaller than netlify-cms.

### How to use it

If you're building your site with Gatsby, skip this section. For all others, you'll want to:

Uninstall netlify-cms if you're already using it
Install netlify-cms-app
Install react and react-dom
Optionally install and register media libraries (see below).
npm uninstall netlify-cms
npm install netlify-cms-app react react-dom
That's it! Now Netlify CMS will use the version of React that you provide.

### The Gatsby plugin

#### I do not use

The below is for usage with Gatsby's plugin which I could not get working with react-netlify-identity-widget and am glad as the way I will show you below [MY Configuration](/My-Configuration)


Gatsby provides transpiling and bundling with Babel and Webpack, and accepts plugins to support various JavaScript dialects, e.g., TypeScript. If a developer sets up their Gatsby site to be written a certain way, they'll want any CMS customization code to be written the same way. The problem is that Netlify CMS is a standalone app that would typically live in Gatsby's static directory, and Gatsby doesn't really have a way to handle a secondary entry point for the CMS for outputting a dedicated bundle.

For this reason, we support an official Gatsby plugin, gatsby-plugin-netlify-cms, which bundles preview templates and other Netlify CMS extensions using the same Babel and Webpack configuration as the Gatsby site itself.

Using React Hooks with Netlify CMS and Gatsby
The recent 4.0.0 release of gatsby-plugin-netlify-cms is the first to use netlify-cms-app and enable the use of React Hooks in Netlify CMS previews/widgets for Gatsby projects.

### Upgrading projects

If you're already using gatsby-plugin-netlify-cms, you'll want to:

Upgrade to 4.0.0 or newer
Remove the netlify-cms dependency
Add netlify-cms-app

```sh
npm upgrade gatsby-plugin-netlify-cms@^4.0.0
npm uninstall netlify-cms
npm install --save netlify-cms-app
```

Note that you'll already have React and React DOM installed in your Gatsby project, so no need to do that here.

### Adding to a new project

If you're not already using gatsby-plugin-netlify-cms with your Gatsby project, you can install it and netlify-cms-app via npm (or your package manager of choice):

```sh
npm install --save netlify-cms-app gatsby-plugin-netlify-cms
```

You'll also need to register the plugin in gatsby-config.js in the site root. Create that file if it’s not already there, and add the following to register the Netlify CMS plugin:

```sh
// gatsby-config.js

module.exports = {
  plugins: [`gatsby-plugin-netlify-cms`],
}
```

The plugin will create the Netlify CMS app and output it to /admin/index.html on your site. The CMS will look for your configuration to be in the same directory on your live site, at /admin/config.yml, so you’ll want to place the configuration file in the static directory of your repo at static/admin/config.yml. You can also configure Netlify CMS with JavaScript. Read more about configuring the CMS in our docs, or check out the Gatsby / Netlify CMS integration guides in both our docs and theirs.

[Netlify CMS Configuration Guide](https://www.netlifycms.org/docs/add-to-your-site/#configuration)
[Netlify CMS Integration Guide for Gatsby Sites](https://www.netlifycms.org/docs/gatsby/)
[Gatsby Guide - Sourcing from Netlify CMS](https://www.gatsbyjs.org/docs/sourcing-from-netlify-cms/)

### Using Media Libraries

With netlify-cms-app
The Netlify CMS media library extensions for Cloudinary and Uploadcare are not included in netlify-cms-app. If you're using netlify-cms-app, you'll need to register media libraries yourself.

Note: if you're using gatsby-starter-netlify-cms, the media libraries are registered within the starter itself.

```sh
import CMS from 'netlify-cms-app';

// You only need to import the media library that you'll use. We register both
// here for example purposes.
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);
```

For more information about the media libraries, refer to the docs.

[Using Cloudinary with Netlify CMS](https://www.netlifycms.org/docs/cloudinary/)
[Using Uploadcare with Netlify CMS](https://www.netlifycms.org/docs/uploadcare/)

With gatsby-plugin-netlify-cms@^4.0.0
In addition to calling registerMediaLibrary() as mentioned above, make sure to provide the path to your CMS customization entry point to Gatsby via gatsby-config.js:

```sh
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ]
}
```

If you run into a problem or need help, open an issue on [GitHub](https://github.com/netlify/netlify-cms/issues/new/choose) or [chat with our community](https://netlifycms.org/chat)!

## My Configuration

Netlify CMS App is Always the latest GitHub repo pull, with my custom WebPack hashed build.
My custom themed light/dark build of the React Netlify Identity Widget is used on the Gatsby frontend and in my git-gateway back-end.

I Line to keep as my Gatsby's build process fast and compiled pages as light as possible, including Netlify CMS or Netlify CMS App the Gatsby way shown above to me makes no sense and does not work with global Netlify identity context my FaunaDB context, thus failing in authentication with react-netlify-identity-widget.

Netlify CMS is a precompiled APP and just add a html page as below calling identity and the CMS which is out of the Gatsby build process = why build another app in to your app just use it.

## File exclusive build

The index admin page under All Admin files at static/admin

```html
<!doctype html><html lang="en" class="no-js" itemscope itemtype="https://schema.org/WebSite">
<head>
  <script src="./cms.js"></script>
  <script src="./identity.js"></script>
  <script>
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      netlifyIdentity.init({
        APIUrl: "https://publiuslogic.com/.netlify/identity"
      });
    });
  } else {
    netlifyIdentity.init({
      APIUrl: "https://publiuslogic.com/.netlify/identity"
    });
  }</script>
  <title>Content Manager</title>
</head>

<body id="style-3" class="body" auth-false" itemscope itemtype="https://schema.org/WebPage">
<div class="page">
<script>
  CMS.registerEditorComponent({
    // Internal id of the component
    id: "youtube",
    // Visible label
    label: "Youtube",
    // Fields the user need to fill out when adding an instance of the component
    fields: [{name: 'id', label: 'Youtube Video ID', widget: 'string'}],
    // Pattern to identify a block as being an instance of this component
    pattern: /^youtube (\S+)$/,
    // Function to extract data elements from the regexp match
    fromBlock: function(match) {
      return {
        id: match[1]
      };
    },
    // Function to create a text block from an instance of this component
    toBlock: function(obj) {
      return 'youtube ' + obj.id;
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function(obj) {
      return (
        '<img src="https://www.w3.org/2000/svgimg.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
      );
    }
  });</script>
</div>
<script charset="utf-8" src="//ucarecdn.com/libs/widget/3.6.1/uploadcare.full.min.js"></script>
<script>
  UPLOADCARE_LOCALE = "en";
  UPLOADCARE_TABS = "file url facebook gdrive gphotos dropbox instagram evernote flickr skydrive";
  UPLOADCARE_PUBLIC_KEY = "YOUR KEY";
  uploadcare.registerTab(
  'preview',
  uploadcareEffectsTab
),
</script>

<script>
  var PostPreview = createClass({
      render: function() {
        var entry = this.props.entry;
        var image = entry.getIn(['data', 'image']);
        var bg = image && this.props.getMedia(image);
        return h('div', {},
          h('div', {className: "hero"},
            h('h1', {}, entry.getIn(['data', 'title'])),
            bg ? h('img', {src: bg.toString()}) : null
          ),
          h('p', {},
            h('small', {}, "Written " + entry.getIn(['data', 'date']))
          ),
          h('div', {"className": "text"}, this.props.widgetFor('body'))
        );
      }
    });  // My Preview style from Gatsby Build Public Folder
    CMS.registerPreviewTemplate("posts", PostPreview);
    CMS.registerPreviewStyle("./styles.d5154f21eaaa9091536f.css");
</script>
<script>
  NetlifyCmsApp.init();
</script>
</body>
</html>
```

### cms.js for netlify-cms-app

```jsx:title=/static/admin/cms.js
import CMS from 'netlify-cms-app'
// Custom build of latest CMS Repo
CMS.init()

export default {
  CMS,
}
```

### React Netlify Identity

To export Identity to the admin index.html page

```jsx:title=/static/admin/identity.js
import {
  identity,
} from 'react-netlify-identity'

export default {
  identity,
}
```

## The Configuration file

```yaml:title=/static/admin/config.yml
backend:
  name: git-gateway
  accept_roles:
    - admin
    - editor
  repo: donaldboulton/publiuslogic
  branch: master
  identity_url: "https://publiuslogic.com/.netlify/identity"
  gateway_url: "https://publiuslogic.com/.netlify/git"
  site_domain:  "https://publiuslogic.com/"
  squash_merges: true

display_url: https://publiuslogic.com
logo_url: https://publiuslogic.com/img/apple-touch-icon-180x180.png

publish_mode: editorial_workflow
media_library:
 name: uploadcare
 config:
   publicKey: <'YOUR KEY'>
media_folder: static/img
public_folder: img
collections:
  - name: "pages"
    label: "Pages"
    files:
      - file: "src/pages/index.md"
        label: "Home Page"
        name: "home"
        fields:
          - {label: "Template Key", name: "templateKey", widget: "hidden", default: "index-page"}
          - {label: Title, name: title, widget: string}
          - {label: Heading, name: heading, widget: string}
          - {label: Description, name: description, widget: string}
          - {label: Offerings, name: offerings, widget: object, fields: [{label: Blurbs, name: blurbs, widget: list, fields: [{label: Image, name: image, widget: image}, {label: Text, name: text, widget: text}]}]}
          - {label: Testimonials, name: testimonials, widget: list, fields: [{label: Quote, name: quote, widget: string}, {label: Author, name: author, widget: string}]}
          - {label: "Meta Title", name: "meta_title", widget: "string"}
          - {label: "Meta Description", name: "meta_description", widget: "text"}
      - file: "src/pages/about/index.md"
        label: "About"
        name: "about"
        fields:
          - {label: "Template Key", name: "templateKey", widget: "hidden", default: "about-page"}
          - {label: "Title", name: "title", widget: "string"}
          - {label: "Body", name: "body", widget: "markdown"}
          - {label: "Meta Title", name: "meta_title", widget: "string"}
          - {label: "Meta Description", name: "meta_description", widget: "text"}
      - file: "src/pages/pricing/index.md"
        label: "Pricing Page"
        name: "pricing"
        fields:
          - {label: "Template Key", name: "templateKey", widget: "hidden", default: "pricing-page"}
          - {label: Title, name: title, widget: string}
          - {label: Image, name: image, widget: image}
          - {label: Pricing, name: pricing, widget: object, fields: [{label: Heading, name: heading, widget: string}, {label: Description, name: description, widget: string}, {label: Plans, name: plans, widget: list, fields: [{label: Plan, name: plan, widget: string}, {label: Price, name: price, widget: string}, {label: Description, name: description, widget: string}, {label: Items, name: items, widget: list}]}]}
          - {label: "Meta Title", name: "meta_title", widget: "string"}
          - {label: "Meta Description", name: "meta_description", widget: "text"}
      - file: "src/pages/contact/index.md"
        label: "Contact Page"
        name: "contact"
        fields:
          - {label: "Template Key", name: "templateKey", widget: "hidden", default: "contact-page"}
          - {label: Title, name: title, widget: string}
          - {label: Subtitle, name: subtitle, widget: string}
          - {label: Contacts, name: contacts, widget: list, fields: [{label: Email, name: email, widget: string}, {label: Description, name: description, widget: string}]}
          - {label: "Meta Title", name: "meta_title", widget: "string"}
          - {label: "Meta Description", name: "meta_description", widget: "text"}
      - file: "src/pages/privacy/index.md"
        label: "Privacy Page"
        name: "privacy"
        fields:
          - {label: "Template Key", name: "templateKey", widget: "hidden", default: "privacy-page"}
          - {label: Title, name: title, widget: string}
          - {label: Subtitle, name: subtitle, widget: string}
          - {label: "Meta Title", name: "meta_title", widget: "string"}
          - {label: "Meta Description", name: "meta_description", widget: "text"}  
  - name: "blog"
    label: "Blog"
    folder: "src/pages/blog"
    create: true
    slug: "{{slug}}"
    fields:
      - {label: "Template Key", name: "templateKey", widget: "hidden", default: "article-page"}
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Slug", name: "slug", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Cover", name: "cover", widget: "image"}
      - {label: "Body", name: "body", widget: "markdown"}
      - {label: "Category", name: "category", widget: "string"}
      - {label: "Tags", name: "tags", widget: "list"}
      - {label: "Meta Title", name: "meta_title", widget: "string"}
      - {label: "Meta Description", name: "meta_description", widget: "text"}
      - {label: "Tweet Id", name: "tweet_id", widget: "text"}

```

`video: https://www.youtube.com/embed/2Xc9gXyf2G4`

## Preview Templates

This post is large enough so here is a link to the my admin [preview templates](https://github.com/donaldboulton/publiuslogic/blob/master/static/admin/cms/preview-templates)