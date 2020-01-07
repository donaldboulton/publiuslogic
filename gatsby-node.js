const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const createPaginatedPages = require('gatsby-paginate')
const toHAST = require(`mdast-util-to-hast`)
const hastToHTML = require(`hast-util-to-html`)
const Remark = require(`remark`)

// Initialise remark
const remark = new Remark().data(`settings`, {
  commonmark: true,
  footnotes: true,
  pedantic: true,
})

const R = require('ramda')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve('src/templates/article-page.js')

  return graphql(`
    {
      allMarkdownRemark(limit: 1000, sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 200)
            id
            fields {
              slug              
            }
            headings {
              depth
              value
            }            
            timeToRead  
            frontmatter {
              title
              slug
              cover
              templateKey
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
    const pages = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      const id = post.node.id
      createPage({
        path: post.node.fields.slug,
        component: postTemplate,
        context: {
          id,
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    pages.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    createPaginatedPages({
      edges: posts,
      createPage: createPage,
      pageTemplate: 'src/templates/blog.js',
      pageLength: 6, // This is optional and defaults to 10 if not used
      pathPrefix: 'blog', // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
    })

    let category = []
    // Iterate through each post, putting all found category into `categories`
    posts.forEach(post => {
      if (_.get(post, `node.frontmatter.category`)) {
        category = category.concat(post.node.frontmatter.category)
      }
    })
    // Eliminate duplicate tags
    category = _.uniq(category)

    // Make category pages
    category.forEach(category => {
      const categoryPath = `/categories/${_.kebabCase(category)}/`

      createPage({
        path: categoryPath,
        component: path.resolve(`src/templates/category.js`),
        context: {
          category,
        },
      })
    })
    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(post => {
      if (_.get(post, `node.frontmatter.tags`)) {
        tags = tags.concat(post.node.frontmatter.tags)
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

  // For comment nodes (which are stored in JSON) parse the `message` field from
  // markdown into HTML, and add it to the node as a field called `messageHtml`.
  // Then we can use that field to render the comments.
  if (_.get(node, 'internal.type') === `RatingsJson`) {
    // Generate an HTML version of the markdown field `message`
    const ast = remark.parse(_.get(node, 'message'))
    const htmlAst = toHAST(ast, { allowDangerousHTML: true })
    const html = hastToHTML(htmlAst, {
      allowDangerousHTML: true,
    })

    createNodeField({
      node,
      name: 'messageHtml',
      value: html,
    })
  }
  // console.log(R.path("internal.type")(node));
  // console.log(node.parent);
  if (R.path(['internal', 'type'])(node) === `MarkdownRemark`) {
    // Get the parent node
    const parent = getNode(R.prop('parent', node))

    // Create a field on this node for the "collection" of the parent
    // NOTE: This is necessary so we can filter `allMarkdownRemark` by
    // `collection` otherwise there is no way to filter for only markdown
    // documents of type `post`.
    createNodeField({
      node,
      name: 'collection',
      value: R.prop('sourceInstanceName', parent),
    })
  }
}
