---
templateKey: article-page
title: Netlify CMS
path: /netlify-cms
slug: /netlify-cms
date: 2019-03-22T03:36:27.484Z
cover: '/images/netlify-cms.jpg'
category: 'tech'
tags:
  - Netlify
  - CMS
  - Identity
meta_title: Netlify CMS
meta_description: Netlify CMS backend for editing data and site pages
tweet_id: '1118651504674725888'
showToc: true
---
 
## Netlify CMS

🔥 Static + content management = ❤️

🔗 [CMS Site](https://www.netlifycms.org/)

Netlify CMS is Always the latest GitHub repo pull, with my custom WebPack hashed build.
My custom dark build of the Netlify Identity Widget is used on the Gatsby frontend and in my git-gateway back-end.

> The below is old content see my new post on 🔗 [Gatsby Netlify No Plugins](https://publiuslogic.com/blog/gatsby-netlify-no-plugins/) for CMS and Identity Widget custom builds and no Gatsby Plugins.

## CMS index.html File exclusive build

```html
<!doctype html><html lang="en" class="no-js" itemscope itemtype="https://schema.org/WebSite">
<head>
  <script src="./index.js"></script>
  <script src="../../src/components/IdentityWidget/netlify-identity.js"></script>
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
)
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
    });
    CMS.registerPreviewTemplate("posts", PostPreview);
    CMS.registerPreviewStyle("./styles.d5154f21eaaa9091536f.css");
</script>
</body>
</html>
```

### Index.js file for templates and cms-bundled.js

```jsx
import CMS from '../../src/components/cms/cms'
// Custom build of latest CMS Repo
export default {
  CMS,
}
```

Get the speed, security, and scalability of a static site, while still providing a convenient editing interface for content.

An integrated part of your Git workflow
Content is stored in your Git repository along side your code for easier versioning, multi-channel publishing, and the option to handle content updates directly in Git.

### An extensible CMS built on React

Netlify CMS is built as a single-page React app. Create custom-styled previews, UI widgets, and editor plugins or add a backend to support different Git platform APIs.
My Netlify CMS backend will build and add Pages, Posts, My layout components with Event data for Bulma GCal fullCalendar localized events, Notifications, Authors, Products, Site Updates and charts data using charts.js displaying build, sales and analytics charts data on individual pages and posts. All edited from a CMS Backend on a Static Website!

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
          - {label: "Template Key", name: "templateKey", widget: "hidden", default: "home-page"}
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

`oembed: https://www.youtube.com/embed/2Xc9gXyf2G4`