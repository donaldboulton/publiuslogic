const _ = require('lodash')
const path = require('path')
const Promise = require('bluebird')
const { createFilePath } = require('gatsby-source-filesystem')
const createPaginatedPages = require('gatsby-paginate')
const moment = require('moment')
const siteConfig = require('./data/config')

const postNodes = []

function addSiblingNodes (createNodeField) {
  postNodes.sort(
    ({ frontmatter: { date: date1 } }, { frontmatter: { date: date2 } }) => {
      const dateA = moment(date1, siteConfig.dateFromFormat)
      const dateB = moment(date2, siteConfig.dateFromFormat)

      if (dateA.isBefore(dateB)) return 1

      if (dateB.isBefore(dateA)) return -1

      return 0
    }
  )
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath)
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`
    } else {
      slug = `/${parsedFilePath.dir}/`
    }

    if (Object.prototype.hasOwnProperty.call(node, 'frontmatter')) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug'))
        slug = `/${_.kebabCase(node.frontmatter.slug)}`
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'date')) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat)
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter)

        createNodeField({
          node,
          name: 'date',
          value: date.toISOString(),
        })
      }
    }
    createNodeField({ node, name: 'slug', value: slug })
    postNodes.push(node)
  }
}

exports.setFieldsOnGraphQLNodeType = ({ type, actions }) => {
  const { name } = type
  const { createNodeField } = actions
  if (name === 'MarkdownRemark') {
    addSiblingNodes(createNodeField)
  }
}
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const categoryPage = path.resolve('src/templates/category.js')
  return graphql(`
    {
      allMarkdownRemark(limit: 1000, sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              cover {
                publicURL
              }
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

    const posts = result.data.allMarkdownRemark.edges
    createPaginatedPages({
      edges: result.data.allMarkdownRemark.edges,
      createPage: createPage,
      pageTemplate: 'src/templates/blog.js',
      pageLength: 8, // This is optional and defaults to 10 if not used
      pathPrefix: 'blog', // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
      postsPerPage: 6,
    })
    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
    const categorySet = new Set()
    const categoryList = Array.from(categorySet)
    categoryList.forEach(category => {
      createPage({
        path: `/categories/${_.kebabCase(category)}/`,
        component: categoryPage,
        context: {
          category,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
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

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
