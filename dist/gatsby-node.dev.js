"use strict";

var _ = require('lodash');

var path = require('path');

var _require = require('gatsby-source-filesystem'),
    createFilePath = _require.createFilePath;

var createPaginatedPages = require('gatsby-paginate');

var toHAST = require("mdast-util-to-hast");

var hastToHTML = require("hast-util-to-html");

var Remark = require("remark"); // Initialise remark


var remark = new Remark().data("settings", {
  commonmark: true,
  footnotes: true,
  pedantic: true
});

var R = require('ramda');

var sharp = require('sharp');

sharp.cache(false);
sharp.simd(true);

exports.createPages = function (_ref) {
  var actions = _ref.actions,
      graphql = _ref.graphql;
  var createPage = actions.createPage;
  var postTemplate = path.resolve('src/templates/article-page.js');
  return graphql("\n    {\n      allMarkdownRemark(limit: 1000, sort: { order: DESC, fields: [frontmatter___date] }) {\n        edges {\n          node {\n            excerpt(pruneLength: 300)\n            id\n            fields {\n              slug              \n            }\n            headings {\n              depth\n              value\n            }            \n            timeToRead  \n            frontmatter {\n              title\n              tags\n              slug\n              cover\n              category\n              templateKey\n              date(formatString: \"MMM D, YYYY\")\n            }\n          }\n        }\n      }\n    }\n  ").then(function (result) {
    if (result.errors) {
      result.errors.forEach(function (e) {
        return console.error(e.toString());
      });
      return Promise.reject(result.errors);
    }

    var posts = result.data.allMarkdownRemark.edges;
    var pages = result.data.allMarkdownRemark.edges;
    posts.forEach(function (edge, index) {
      var previous = index === posts.length - 1 ? null : posts[index + 1].node;
      var next = index === 0 ? null : posts[index - 1].node;
      createPage({
        path: edge.node.fields.slug,
        component: postTemplate,
        context: {
          slug: edge.node.fields.slug,
          previous: previous,
          next: next
        }
      });
    });
    pages.forEach(function (edge) {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve("src/templates/".concat(String(edge.node.frontmatter.templateKey), ".js")),
        // additional data can be passed via context
        context: {
          slug: edge.node.fields.slug
        }
      });
    });
    createPaginatedPages({
      edges: posts,
      createPage: createPage,
      pageTemplate: 'src/templates/blog.js',
      pathPrefix: 'blog',
      // This is optional and defaults to an empty string if not used
      context: {} // This is optional and defaults to an empty object if not used

    });
    var category = []; // Iterate through each post, putting all found category into `categories`

    posts.forEach(function (post) {
      if (_.get(post, "node.frontmatter.category")) {
        category = category.concat(post.node.frontmatter.category);
      }
    }); // Eliminate duplicate tags

    category = _.uniq(category); // Make category pages

    category.forEach(function (category) {
      var categoryPath = "/categories/".concat(_.kebabCase(category), "/");
      createPage({
        path: categoryPath,
        component: path.resolve("src/templates/category.js"),
        context: {
          category: category
        }
      });
    }); // Tag pages:

    var tags = []; // Iterate through each post, putting all found tags into `tags`

    posts.forEach(function (post) {
      if (_.get(post, "node.frontmatter.tags")) {
        tags = tags.concat(post.node.frontmatter.tags);
      }
    }); // Eliminate duplicate tags

    tags = _.uniq(tags); // Make tag pages

    tags.forEach(function (tag) {
      var tagPath = "/tags/".concat(_.kebabCase(tag), "/");
      createPage({
        path: tagPath,
        component: path.resolve("src/templates/tags.js"),
        context: {
          tag: tag
        }
      });
    });
  });
};

exports.onCreatePage = function _callee(_ref2) {
  var page, actions, createPage;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          page = _ref2.page, actions = _ref2.actions;
          createPage = actions.createPage; // page.matchPath is a special key that's used for matching pages
          // only on the client.

          if (page.path.match(/^\/app/)) {
            page.matchPath = '/app/*'; // Update the page.

            createPage(page);
          }

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.onCreateNode = function (_ref3) {
  var node = _ref3.node,
      actions = _ref3.actions,
      getNode = _ref3.getNode;
  var createNodeField = actions.createNodeField;

  if (node.internal.type === "MarkdownRemark") {
    var value = createFilePath({
      node: node,
      getNode: getNode
    });
    createNodeField({
      name: "slug",
      node: node,
      value: value
    });
  } // For comment nodes (which are stored in JSON) parse the `message` field from
  // markdown into HTML, and add it to the node as a field called `messageHtml`.
  // Then we can use that field to render the comments.


  if (_.get(node, 'internal.type') === "RatingsJson") {
    // Generate an HTML version of the markdown field `message`
    var ast = remark.parse(_.get(node, 'message'));
    var htmlAst = toHAST(ast, {
      allowDangerousHtml: true
    });
    var html = hastToHTML(htmlAst, {
      allowDangerousHtml: true
    });
    createNodeField({
      node: node,
      name: 'messageHtml',
      value: html
    });
  } // console.log(R.path("internal.type")(node));
  // console.log(node.parent);


  if (R.path(['internal', 'type'])(node) === "MarkdownRemark") {
    // Get the parent node
    var parent = getNode(R.prop('parent', node)); // Create a field on this node for the "collection" of the parent
    // NOTE: This is necessary so we can filter `allMarkdownRemark` by
    // `collection` otherwise there is no way to filter for only markdown
    // documents of type `post`.

    createNodeField({
      node: node,
      name: 'collection',
      value: R.prop('sourceInstanceName', parent)
    });
  }
};