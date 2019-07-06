<h1 align="center">
    <img alt="Contentful" title="Contentful" src = "https://user-images.githubusercontent.com/21126965/60759275-1314eb80-a040-11e9-8e75-ee8e1d75169a.png" width = "200"> </br>
    Gatsby Contentful Starter
</h1>

<h4 align="center">
  A clean , minimal, and responsive starter for creating blogs uses <a href="https://github.com/gatsbyjs/gatsby" target="_blank">Gatsby</a>.
</h4>

## 🚀 Quick Start 

#### Create a Gatsby site

Use the Gatsby CLI to create a new site and specify this starter

```sh
# Create a new Gatsby site using this starter
gatsby new blog https://github.com/mohanmonu777/gatsby_contentful_starter
```

#### Start Developing

Navigate into your new site’s directory and start it up.

```sh
cd blog
gatsby develop
```

#### Open the source code and start editing!

Your site is now running at `http://localhost:8000`!

Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

#### Models 

In this starter , i used `Article` model that defines the data of a single Article.

It contains the following fields
+ title : The title of the Article
+ description : Holds the description of Article
+ slug : A 'slug' is the part that comes at the very end of a URL, and refers to a specific page.
+ content: The Rich Text Document that holds the overall content of the Article
+ tags : Ah boy! you know what it is! 😁

#### Query

we use `graphql` to query data, you can find more about graphql [here](https://graphql.org/learn).

Retrieves all the articles

```
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
```

To get single Article , based on a single field. In our case its `slug`

```
query getContentBySlug($slug : String){
	contentfulArticle(slug : {eq : $slug}){
    content{
      json
    }
  }
}
```

## Deploy with Netlify

[Netlify](https://netlify.com) CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. Use the button below to build and deploy your own copy of the repository:

### A Quick Note

Before deploying your site go to `Setting > Build & Deploy` in Netlify.The `.env` file we made for local work doesn’t get deployed,so add your environment variables there. Add your `spaceId` and `accessToken` with the same values as before. This helps you get rid of unwanted build failures.

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/alxshelepenok/gatsby-starter-lumen" target="_blank"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. Next, you’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

## Stay in touch

I love to hear feedback.

<a href = "http://facebook.com/sree.dhannu" ><img src="https://img.icons8.com/color/48/000000/facebook-new.png"> </a>
<a href = "https://twitter.com/_MrNullPointer" ><img src="https://img.icons8.com/color/48/000000/twitter.png"> </a>
