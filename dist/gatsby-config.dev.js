"use strict";

var config = require('./_data/config');

var queries = require("./src/utils/algolia");

var siteAcronyms = require('./gatsby-site-acronyms');

require('dotenv').config({
  path: ".env.".concat(process.env.NODE_ENV)
});

module.exports = {
  siteMetadata: {
    siteTitle: 'Publiuslogic',
    title: 'Publiuslogic',
    titleTemplate: '%s · To Publish Logic',
    titleAlt: 'To Publish Logic',
    siteDescription: 'PubliusLogic is built and written by Donald Boulton, I write about God, Logic gov and tech on my blogs',
    author: 'Donald Boulton',
    siteUrl: 'https://publiuslogic.com',
    pathPrefix: '/blog',
    keywords: 'Publiuslogic, React',
    image: '/img/icon.png',
    twitterUserName: 'donboulton',
    twitterSite: '1135998',
    headline: 'Writing and publishing content for PubliusLogic',
    // Headline for schema.org JSONLD
    url: 'https://publiuslogic.com',
    siteLanguage: 'en',
    // Language Tag on <html> element
    logo: '/img/logo.png',
    // Used for SEO
    ogLanguage: 'en_US',
    // Facebook Language
    twitter: 'donboulton',
    facebook: 'don.boulton',
    gitHubEditMe: 'https://github.com/donaldboulton/publiuslogic/blob/master/src/pages/',
    social: {
      twitter: "donboulton"
    },
    rssMetadata: {
      site_url: 'https://publiuslogic.com',
      feed_url: config.siteUrl + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: "".concat(config.siteUrl, "/logos/icon-512x512.png"),
      author: config.userName,
      copyright: config.copyright,
      twitterCreator: "@donboulton",
      social: {
        twitter: "donboulton"
      }
    }
  },
  plugins: ['gatsby-transformer-sharp', 'gatsby-plugin-sharp', {
    resolve: 'gatsby-transformer-remark',
    options: {
      tableOfContents: {
        heading: null,
        maxDepth: 4
      },
      plugins: [{
        resolve: 'gatsby-remark-copy-linked-files',
        options: {
          destinationDir: 'static'
        }
      }, "gatsby-remark-code-titles", {
        resolve: 'gatsby-remark-component',
        options: {
          components: ['interactive-upload-widget', 'interactive-cloudinary', 'interactive-cloudinary-video', 'interactive-counter', 'interactive-todo', 'interactive-colorbox', 'interactive-contact', 'interactive-comments', 'interactive-fork', 'interactive-issues', 'custom-image']
        }
      }, {
        resolve: "gatsby-remark-acronyms",
        options: {
          acronyms: siteAcronyms
        }
      }, {
        resolve: 'gatsby-remark-normalize-paths',
        options: {
          pathFields: ['image', 'cover']
        }
      }, {
        resolve: 'gatsby-remark-embed-video',
        options: {
          width: 800,
          ratio: 1.77,
          // Optional: Defaults to 16/9 = 1.77
          height: 400,
          // Optional: Overrides optional.ratio
          related: false,
          // Optional: Will remove related videos from the end of an embedded YouTube video.
          noIframeBorder: true // Optional: Disable insertion of <style> border: 0

        }
      }, {
        resolve: "gatsby-remark-autolink-headers",
        options: {
          offsetY: "100",
          icon: "<svg aria-hidden='true' height='20' version='1.1' viewBox='0 0 16 16' width='20'><path fill='#d64000' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'></path></svg>",
          className: "link-icon",
          maintainCase: true,
          removeAccents: true
        }
      }, {
        resolve: "gatsby-remark-prismjs",
        options: {
          classPrefix: 'language-',
          inlineCodeMarker: null,
          aliases: {},
          showLineNumbers: false,
          noInlineHighlight: false
        }
      }, {
        resolve: 'gatsby-remark-relative-images',
        options: {
          name: 'images'
        }
      }, {
        resolve: "gatsby-remark-images-anywhere",
        options: {
          staticDir: "static",
          createMarkup: function createMarkup(_ref) {
            var src = _ref.src,
                srcSet = _ref.srcSet,
                sizes = _ref.sizes,
                aspectRatio = _ref.aspectRatio,
                alt = _ref.alt,
                base64 = _ref.base64,
                presentationWidth = _ref.presentationWidth;
            return "<custom-image src=\"".concat(src, "\" srcset=\"").concat(srcSet, "\" sizes=\"").concat(sizes, "\" aspectratio=\"").concat(aspectRatio, "\" alt=\"").concat(alt, "\" base64=\"").concat(base64, "\" presentationwidth=\"").concat(presentationWidth, "\"></custom-image>");
          },
          sharpMethod: "fluid",
          // Additional sharp image arguments: https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/
          maxWidth: 800
        }
      }, {
        resolve: "gatsby-remark-responsive-iframe",
        options: {
          wrapperStyle: "margin-bottom: 1.0725rem"
        }
      }, {
        resolve: "gatsby-remark-emojis",
        options: {
          active: true,
          size: 24
        }
      }]
    }
  }, 'gatsby-plugin-react-helmet', {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      trackingIds: ['UA-24847941-1'],
      gtagConfig: {
        anonymize_ip: true
      },
      pluginConfig: {
        head: false,
        respectDNT: true
      }
    }
  }, {
    resolve: "gatsby-plugin-use-dark-mode",
    options: {
      classNameDark: "dark-mode",
      classNameLight: "light-mode",
      storageKey: "darkMode",
      minify: true
    }
  }, 'gatsby-plugin-styled-components', 'gatsby-plugin-sass', {
    resolve: 'gatsby-plugin-purgecss',
    options: {
      develop: true,
      purgeOnly: ['/content/assets/sass/styles.sass']
    }
  }, {
    resolve: "gatsby-plugin-postcss",
    // Implements PostCSS
    options: {
      postCssPlugins: [require('postcss-import')(), // Add support for sass-like '@import'
      require('postcss-extend')(), // Add support for sass-like '@extend'
      require('postcss-nesting')(), // Add support for sass-like nesting of rules
      require('postcss-pxtorem')({
        mediaQuery: true,
        // Ignore media queries
        minPixelValue: 0,
        // Minimal pixel value that will be processed
        propList: [],
        // List of CSS properties that can be changed from px to rem; empty array means that all CSS properties can change from px to rem
        replace: true,
        // Replace pixels with rems
        rootValue: 20,
        // Root font-size
        selectorBlackList: ['html'],
        // Ignore pixels used for html
        unitPrecision: 4 // Round rem units to 4 digits

      }), require("postcss-preset-env")({
        stage: '3'
      }), require('cssnano')() // Minify CSS
      ]
    }
  }, {
    resolve: "gatsby-plugin-algolia",
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
      queries: queries,
      chunkSize: 10000 // default: 1000

    }
  }, 'gatsby-plugin-robots-txt', "gatsby-plugin-catch-links", "gatsby-plugin-twitter", 'gatsby-transformer-yaml', "gatsby-transformer-json", {
    resolve: 'gatsby-plugin-netlify-cms',
    options: {
      modulePath: "".concat(__dirname, "/src/cms/cms.js")
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: "".concat(__dirname, "/content/assets/img"),
      name: 'uploads'
    }
  }, {
    resolve: "gatsby-source-filesystem",
    options: {
      path: "".concat(__dirname, "/static/images"),
      name: "images"
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: "".concat(__dirname, "/static/logos"),
      name: 'logos'
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: "".concat(__dirname, "/static/img"),
      name: 'icons'
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: "".concat(__dirname, "/src/pages"),
      name: 'pages'
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'ratings',
      path: "".concat(__dirname, "/_data/ratings")
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'tech',
      path: "".concat(__dirname, "/_data/tech")
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'nav',
      path: "".concat(__dirname, "/_data/nav")
    }
  }, {
    resolve: "gatsby-plugin-nprogress",
    options: {
      color: config.themeColor,
      showSpinner: false
    }
  }, "gatsby-plugin-sitemap", {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: config.siteTitle,
      short_name: config.siteTitleAlt,
      start_url: '/index.html',
      background_color: config.backgroundColor,
      theme_color: config.themeColor,
      display: 'standalone',
      icons: [{
        src: "/img/icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      }, {
        src: "/img/icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }]
    }
  }, {
    resolve: 'gatsby-plugin-feed',
    options: {
      setup: function setup(ref) {
        var ret = ref.query.site.siteMetadata.rssMetadata;
        ret.allMarkdownRemark = ref.query.allMarkdownRemark;
        ret.generator = config.siteTitle;
        return ret;
      },
      query: "\n                {\n                  site {\n                    siteMetadata {\n                      rssMetadata {\n                        site_url\n                        feed_url\n                        title\n                        description\n                        image_url\n                        author\n                        copyright\n                      }\n                    }\n                  }\n                }\n              ",
      feeds: [{
        serialize: function serialize(ctx) {
          var rssMetadata = ctx.query.site.siteMetadata.rssMetadata;
          return ctx.query.allMarkdownRemark.edges.filter(function (edge) {
            return edge.node.frontmatter.templateKey === 'article-page';
          }).map(function (edge) {
            return {
              tags: edge.node.frontmatter.tags,
              date: edge.node.frontmatter.date,
              cover: edge.node.frontmatter.cover,
              title: edge.node.frontmatter.title,
              category: edge.node.frontmatter.category,
              description: edge.node.excerpt,
              author: rssMetadata.author,
              url: rssMetadata.site_url + edge.node.fields.slug,
              guid: rssMetadata.site_url + edge.node.fields.slug,
              custom_elements: [{
                'content:encoded': edge.node.html
              }]
            };
          });
        },
        query: "\n                    {\n                      allMarkdownRemark(\n                        limit: 1000,\n                        sort: { order: DESC, fields: [frontmatter___date] },\n                      ) {\n                        edges {\n                          node {\n                            excerpt(pruneLength: 400)\n                            html\n                            id\n                            fields { slug }\n                            frontmatter {\n                              title\n                              templateKey\n                              cover\n                              date(formatString: \"MMMM DD, YYYY\")\n                              category\n                              tags\n                              tweet_id\n                            }\n                          }\n                        }\n                      }\n                    }\n                  ",
        output: config.siteRss
      }]
    }
  }, {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint: 'https://donboulton.us4.list-manage.com/subscribe/post?u=946962f91a21100144db815b9&amp;id=c2a27bdd5f' // see instructions at official plugin page

    }
  }, {
    resolve: "gatsby-source-cloudinary",
    options: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
      resourceType: "image",
      prefix: "photos/"
    }
  }, "gatsby-plugin-lodash", {
    resolve: "gatsby-plugin-offline",
    options: {
      globPatterns: ['**/*.{js,jpg,html,css}']
    }
  }, {
    resolve: "gatsby-plugin-netlify",
    options: {
      headers: {
        '/*.js': ['cache-control: public, max-age=31536000, immutable'],
        '/*.css': ['cache-control: public, max-age=31536000, immutable'],
        '/sw.js': ['cache-control: public, max-age=0, must-revalidate']
      }
    }
  }, 'gatsby-plugin-netlify-cache']
};