---
templateKey: article-page
title: Gatsby Netlify No Plugins
path: /gatsby-netlify-no-plugins
slug: /gatsby-netlify-no-plugins
date: 2019-07-06T17:29:36.776Z
cover: "/images/hero-no-plugins.jpg"
category: 'Gatsby'
tags:
  - Netlify 
  - CMS
  - Identity 
  - Widget
meta_title: Keep it clean = No Plugins
meta_description: >-
  Gatsby Netlify No Plugins; Netlify CMS and Netlify Identity with my own styling
  and custom builds
tweet_id: "1148277966230695936"
showToc: true  
showTags: true 
showAdds: true 
showStack: true
related: true
---

## Gatsby

🔌 I started using Gatsby from Jekyll in March and I was already using netlify and Netlify Identity and Netlify CMS for my personal website so I picked 🔗 [Gatsby + Netlify CMS Starter](https://github.com/netlify-templates/gatsby-starter-netlify-cms)  for my first Gatsby Project, and it was slower than some of the other starters I messed around with.

### Identify Widget

Gatsby configurations and plugin "gatsby-plugin-netlify-identity-widget", slowed my Gatsby site down even more, Netlify CMS and  Netlify Identity Widget both are processed and build with Gatsby, which is not needed like a lot of Gatsby Plugins.

I stripped Netlify CMS and Netlify identity out of gatsby-config.js plugins and any related plugins out of my package.json and any config references to them and now my Gatsby site is super fast like its supposed to be, even with cookie consent, Google adds, including analytics tracking from HotJar, CookieConsent and Google. = all external scripts with out any Gatsby plugins I inject preload them in my Gatsby Netlify configuration for the gatsby-plugin-netlify in gatsby-config.

## Identity Webpack Config

If you are going to use the identity widget npm package then tell Gatsby not to build it, as you should do with any stand alone precompiled js, "like Netlify CMS". Add them as an array.

```jsx
// FIX in gatsby-node.js netlify-identity-widget server rendering ... @2018/12/12
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /netlify-identity-widget/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}// end of onCreateWebpackConfig
```

## Gatsby Config

```js
{
   resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            'Link: <https://pagead2.googlesyndication.com/pagead/js/
            adsbygoogle.js>; rel=preload; as=script',
            'Link: <https://www.googletagmanager.com/gtag/js?id=UA-24847941-1>; 
            rel=preload; as=script',
            'Link: <https://cookiehub.net/cc/0536e9f8.js>; 
            rel=preload; as=script',
          ],
          '/blog/*': [
            'Link: <https://platform.twitter.com/widgets.js>; 
            rel=preload; as=script',
          ],
          '/*.js': [
            'cache-control: public, max-age=31536000, immutable',
          ],
          '/*.css': [
            'cache-control: public, max-age=31536000, immutable',
          ],
          '/sw.js': [
            'cache-control: public, max-age=0, must-revalidate',
          ],
        },
```

I had incorporated Netlify CMS and Identity into a Jekyll site and did a custom build for Netlify CMS and Netlify Identity widget with my own styling and custom builds, Separate from my Jekyll build so I knew it could be done in Gatsby without plugins.

I liked having the ability to edit my pages and posts remotely from maybe a library computer and Netlify CMs works great for me in my Gatsby site but not in my Gatsby build.

I Forked both Netlify CMS and Identity customized them and added the necessary Custom Webpack builds of each to my /static/admin folder and added them to my index.html admin file.

For Netlify Identity on the front end I added a folder to my Components as NetlifyIdentity and used the custom build script and its .map file for the Identify Widget service.

### Building this post

![Netlify CMS building this post](/img/Cms+Gatsby+Netlify+NoPlugins.jpg)

### Adding to my NavBar

```jsx
import NetlifyIdentityWidget from '../IdentityWidget'

// and then the component to the navbar links

  <div className='navbar-item' id='login'>
    <NetlifyIdentityWidget />
  </div>
```

Moving the CMS folder that came with the Gatsby Netlify Starter, with the, "cms.js and preview templates", to the /static/admin/cms folder.

## Code index.html

[Repo Link](https://github.com/donaldboulton/publiuslogic/blob/master/static/admin/index.html)

```html{3-5,23-25}:title=static/admin/index.html

<!doctype html><html lang="en" class="no-js" itemscope 
itemtype="https://schema.org/WebSite">
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

<body id="style-3" class="body" auth-false" itemscope 
itemtype="https://schema.org/WebPage">
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
        '<img src="https://www.w3.org/2000/svgimg.youtube.com/vi/' + 
        obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
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

### CMS index file

Then a index.js file to import and export the Netlify CMS

```js{1,4}:title=static/admin/cms/cms.js
import CMS from '../admin/cms/cms'

export default {
  CMS,
}
```

## External Images

I am using an external service for my Images with uploadcare or you can use cloudinary library and not have to use all the plugins slowing your Gatsby build and site speed; "like, "gatsby-plugin-netlify-cms' and "gatsby-plugin-netlify-identity-widget" "gatsby-remark-relative-images", "gatsby-remark-copy-linked-files", "netlify-cms-app", netlify-cms-media-library-cloudinary", "netlify-cms-media-library-uploadcare". No does Gatsby have to care about uploaded files or folder configurations for static uploads and/or images in gatbsy.config.

Just include any custom code or external libraries in you CMS or Identity Builds.

I added the preview styles from my Netlify build style sheet using styled components and Bluma with a custom override style sheet on stock Bluma styles for my Gatsby Site, so I used my production style sheet i n my admin folder as

```jsx:title=static/admin/styles.d5154f21eaaa9091536f.css
CMS.registerPreviewStyle("./styles.d5154f21eaaa9091536f.css");
```

## No MDX

Here is an example of not using MDX Plugins, but only using remark-rehype with HTMLAst to render a component in markdown pages.

### Counter

<interactive-counter></interactive-counter>

My repo holds all the code for the discussion above at 🔗 [DWB publislogic repo](https://github.com/donaldboulton/publiuslogic)
