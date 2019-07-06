const path = require(`path`)

/* 
  Author : Mohan
  CreatedAt : 06-07-2019
*/

//this will create pages programatically

exports.createPages = ({ graphql, actions }) => {

  const { createPage } = actions

  const blogPost = path.resolve(`./src/components/ArticleContent.js`)

  return graphql(
    `
    {
        allContentfulArticle{
          edges{
            node{
              title
              slug
              createdAt
              tags
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allContentfulArticle.edges

    posts.forEach((post, index) => {

      createPage({
        path: post.node.slug,
        component: blogPost,
        context: {
          slug: post.node.slug,
          title: post.node.title,
          timeStamp: post.node.createdAt,
          tags: post.node.tags
        },
      })

    })

    return null
  })
}

