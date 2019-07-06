<h1 align="center">
    <img alt="Contentful" title="Contentful" src = "https://user-images.githubusercontent.com/21126965/60759275-1314eb80-a040-11e9-8e75-ee8e1d75169a.png" width = "200"> </br>
    Gatsby Contentful Starter
</h1>

<h4 align="center">
  A clean , minimal, and responsive starter for creating blogs uses <a href="https://github.com/gatsbyjs/gatsby" target="_blank">Gatsby</a>.
</h4>


## Quick Start 🚀

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
+ tags

#### Query
