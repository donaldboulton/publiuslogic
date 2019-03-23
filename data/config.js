const config = {
  siteTitle: 'Publiuslogic', // Site title.
  locale: 'en-US',
  siteTitleShort: 'PubliusLogic', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'To Publish Logic', // Alternative site title for SEO.
  siteLogo: '/src/img/logo.png', // Logo used for SEO and manifest.
  siteUrl: 'publiuslogic.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'Publius Logic is to Publish Logic and/or Common Sense. Publius Logic as publiuslogic.com is a developer website built with Gatsby Netlify functions integrated with Slack. Publications as the Founding Fathers Publius will be of discussions based upon considerations of logic and common sense via the idealisms of Thomas Paine',
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssAuthor: 'Donald Boulton', // The author name used in the RSS file
  siteFBAppID: '1825356251115265', // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: 'UA-24847941-1', // GA tracking ID.
  // disqusShortname: 'https-vagr9k-github-io-gatsby-advanced-starter', // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    'https://facebook.com/don.boulton',
    'https://twitter.com/donboulton',
    'mailto:donaldboulton@gmail.com',
  ],
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/donaldboulton/publiuslogic',
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
  userAvatar: 'https://publiuslogic.com/img/donald-boulton.jpg', // User avatar to display in the author segment.
  userDescription: 'Donald Boulton a Frontend Developer since Windows 3.1',
  recaptchaKey: '6Le3cZMUAAAAAEAXmN6cDoJGVUVZ0RzuJlLAj6a-',
  copyright: 'Copyright © 2019. Publius Logic', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#1d1d1d', // Used for setting manifest and progress theme colors.
  backgroundColor: '#1d1d1d', // Used for setting manifest background color.
  HEROKU_DATABASE: 'dapncikelccuph',
  HEROKU_DATABASE_URL: 'postgres://tyztjtioncjzxm:fe231bb6021e79a5beb3e014f270c189c0da2ed758b60c6fe2da71fc22f8e0c6@ec2-75-101-133-29.compute-1.amazonaws.com:5432/dapncikelccuph',
  HEROKU_OAUTH_ID: 'ad8a6389-c109-4b02-8c23-41eb19f609f5',
  HEROKU_OAUTH_SECRET: '5bb50117-9fa0-4ecf-b02c-e53a4baff9f3',
  HASURA_GRAPHQL_ENABLE_CONSOLE: 'true',
  HASURA_GRAPHQL_ADMIN_SECRET: '@sysWB1h452891k',
  HASURA_GRAPHQL_ACCESS_KEY: 'B1wA0DLVYM00IATUdFjKeit6D5uxDBoXjXcQArf+pBi0wikvXrGLtSd1rWFE21FL2uaJuIb6CPYqrArmWwYapB0vDlKljsIge65edlPVYpGrHM8q+dcq74ZSN9bxqxw71PESA4uCPgTlU+mVkxgEXvvQHCKYr0BtgUrQDtGGQQg=',
  HASURA_GRAPHQL_URL: 'https://publiuslogic.herokuapp.com/',
}
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
