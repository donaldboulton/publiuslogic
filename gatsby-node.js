const _ = require('lodash')
const path = require('path')
const moment = require('moment')
const config = require('./data/config') 
const { createFilePath } = require('gatsby-source-filesystem')
const createPaginatedPages = require('gatsby-paginate')

const postNodes = []

function addSiblingNodes (createNodeField) {
  postNodes.sort(
    ({ frontmatter: { date: date1 } }, { frontmatter: { date: date2 } }) => {
      const dateA = moment(date1, config.dateFromFormat)
      const dateB = moment(date2, config.dateFromFormat)

      if (dateA.isBefore(dateB)) return 1

      if (dateB.isBefore(dateA)) return -1

      return 0
    }
  )
}

exports.createPages = ({ page, actions, graphql }) => {
  const { createPage } = actions
  if (page.path.match(/^\/app/)) {
    page.matchPath = '/src/app/*'
    createPage(page)
  }

  return graphql(`
    {
      allMarkdownRemark(limit: 1000, sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            timeToRead
            fields {
              slug              
            }
            frontmatter {
              title
              cover
              categorys
              tags
              templateKey
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const postsAndPages = result.data.allMarkdownRemark.edges

    // Post pages:
    let posts = []
    // Iterate through each post/page, putting all found posts (where templateKey = article-page) into `posts`
    postsAndPages.forEach(edge => {
      if (_.isMatch(edge.node.frontmatter, { 'templateKey': 'article-page' })) {
        posts = posts.concat(edge)
      }
    })

    createPaginatedPages({
      edges: posts,
      createPage: createPage,
      pageTemplate: 'src/templates/blog.js',
      pageLength: 6, // This is optional and defaults to 10 if not used
      pathPrefix: 'blog', // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
    })
    postsAndPages.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        categorys: edge.node.frontmatter.categorys,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    let categorys = []
    // Iterate through each post, putting all found category into `categories`
    postsAndPages.forEach(edge => {
      if (_.get(edge, `node.frontmatter.categorys`)) {
        categorys = categorys.concat(edge.node.frontmatter.categorys)
      }
    })
    // Eliminate duplicate tags
    categorys = _.uniq(categorys)

    // Make category pages
    categorys.forEach(category => {
      const categoryPath = `/categorys/${_.kebabCase(category)}/`

      createPage({
        path: categoryPath,
        component: path.resolve(`src/templates/categorys.js`),
        context: {
          category,
        },
      })
    })
    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    postsAndPages.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({ type, node, actions, getNode }) => {
  const { createNodeField } = actions
  const { name } = type

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

