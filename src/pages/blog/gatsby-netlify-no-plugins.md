---
templateKey: article-page
title: Gatsby Netlify No Plugins
slug: Gatsby Netlify No Plugins
date: 2019-07-06T17:29:36.776Z
cover: 'https://ucarecdn.com/990fb54c-e52f-4bbe-a1f8-a6d10fe6c195/'
category: tech
tags:
  - Gatsby Netlify CMS Identity
meta_title: Gatsby Netlify No Plugins
meta_description: >-
  Gatsby Netlify No Plugins; Netlify Cms and Netify Identity with my own styling
  and custom builds
---
I started using [Gatsby + Netlify CMS Starter](https://github.com/netlify-templates/gatsby-starter-netlify-cms) and it was slower than some of the other starters with my pages and posts on a production build.

Adding Netlify Identify slowed my Gatsby site down even more.

I stripped Netlify CMS and Netify identity out of my package.json and any config references to them and now my Gatsby site is super fast like its supposed to be, even with cookie consent, Google adds, including analytics from Hotjar and Google.

I had incorporated both into a Jekyll site and did a custom build for Netlify Cms and Netify Identity with my own styling and custom builds.

I liked having the ability to edit my pages and posts remotely from maybe a library computer so I liked that ability and Netlify CMs works great for me in my Gatsby site but not in my Gatsby build.

I Froked both Netlify CMS and Identity cutomized them and added the necessary Custom Webpack builds of each to my /static/admin folder and added them to my index.html admin file.

Moving the CMS folder with the cms.js and preview templates to the /static/admin/cms folder.

Code for the index page.

```jsx
<!doctype html><html lang="en" class="no-js" itemscope itemtype="https://schema.org/WebSite">
<head>
  <script src="./index.js"></script>
  <script src="./netlify-identity.js"></script>
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
    <script src="./netlify-cms.js"></script>    
    <script src="../admin/cms/cms.js"></script>
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
<script src="../admin/cms/preview-templates/HomePagePreview.js"></script> 
<script src="../admin/cms/preview-templates/AboutPagePreview.js"></script>
<script src="../admin/cms/preview-templates/ArticlePagePreview.js"></script>
<script src="../admin/cms/preview-templates/PricingPagePreview.js"></script>
<script src="../admin/cms/preview-templates/ContactPagePreview.js"></script>
<script src="../admin/cms/preview-templates/PrivacyPagePreview.js"></script>

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
    CMS.registerPreviewTemplate('home', HomePagePreview)
    CMS.registerPreviewTemplate('about', AboutPagePreview)
    CMS.registerPreviewTemplate('pricing', PricingPagePreview)
    CMS.registerPreviewTemplate('contact', ContactPagePreview)
    CMS.registerPreviewTemplate('privacy', PrivacyPagePreview)
    CMS.registerPreviewTemplate('blog', ArticlePreview)
    CMS.registerPreviewStyle("./styles.d5154f21eaaa9091536f.css");
    export default {
  CMS,
}
</script>
</body>
</html>
```
