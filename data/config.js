const config = {
  siteTitle: 'Publiuslogic', // Site title.
  locale: 'en-US',
  siteTitleShort: 'PubliusLogic', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'To Publish Logic', // Alternative site title for SEO.
  siteLogo: '/src/img/logo.png', // Logo used for SEO and manifest.
  siteUrl: 'https://publiuslogic', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'PubliusLogic to publish common sense.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssAuthor: 'Donald Boulton', // The author name used in the RSS file
  siteFBAppID: '1825356251115265', // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: 'UA-111982167-1', // GA tracking ID.
  // disqusShortname: 'https-vagr9k-github-io-gatsby-advanced-starter', // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    'https://github.com/donaldboulton/DWB',
    'https://twitter.com/donboulton',
    'mailto:donaldboulton@gmail.com',
  ],
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/donaldboulton/gatsby-starter-netlify-cms',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/donboulton',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: 'mailto:donaldboulton@gmail.com',
      iconClassName: 'fa fa-envelope',
    },
  ],
  siteFBSecret: 'f3b147f8f8c38e752cf1bc146690ea1f',
  disqusShortname: 'mansbooks-1', // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  userName: 'Donald Boulton', // Username to display in the author segment.
  userEmail: 'donaldboulton@gmail.com', // Email used for RSS feed's author segment
  userTwitter: 'donboulton', // Optionally renders 'Follow Me' in the UserInfo segment.
  userLocation: 'OKC, Oklahoma', // User location to display in the author segment.
  userAvatar: 'https://donboulton.com/assets/images/donald-boulton.jpg', // User avatar to display in the author segment.
  userDescription: 'Donald Boulton a Frontend Developer since Windows 3.1',
  GATSBY_ALGOLIA_APP_ID: '8TO5EHY2FM',
  GATSBY_ALGOLIA_SEARCH_KEY: 'efe2c5eec92d0bf53e2014ccf2300934',
  ALGOLIA_SEARCH_KEY: 'efe2c5eec92d0bf53e2014ccf2300934',
  ALGOLIA_ADMIN_KEY: 'f4242c4cd86cf9121b1b83b58d744401',
  ALGOLIA_APP_ID: '8TO5EHY2FM',
  ALGOLIA_API_KEY: 'efe2c5eec92d0bf53e2014ccf2300934',
  ALGOLIA_INDEX_NAME: 'donald_boulton',
  application_id: '8TO5EHY2FM',
  index_name: 'donald_boulton',
  search_only_api_key: '68c60968e03d06ce61d592425b22c6bd',
  algolia_api_key: 'KLAOJmvpl1yZhCrno50lgSpRVJrrTtPKi98521LaL8X62hajFubs8IHB5eLjrcG5DOQJdfB6Dca9XluHQQQCWVJhQVAD7aqzfivz5/AlYEYukabDmEOw6Efd8RzNhlsFvVTa0t2/oxYWL66Xo9LtRbC0Lfpkf/u/RpA55pn5CkE=',
  powered_by: 'true',
  copyright: 'Copyright © 2019. Donald Boulton', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#363636', // Used for setting manifest and progress theme colors.
  backgroundColor: '#1d1d1d', // Used for setting manifest background color.
};
// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
{ config.siteUrl = config.siteUrl.slice(0, -1) }

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
{ config.siteRss = `/${config.siteRss}` }

module.exports = config
