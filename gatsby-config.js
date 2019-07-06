const dotenv = require('dotenv')

if(process.env.NODE_ENV !== 'production'){
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `Gatsby Contentful Starter`,
    description: `This starter ships with the main Gatsby configuration files and contentful api`,
    author: `Mohan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#263238`,
        theme_color: `#263238`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `b2oeyxchybpq`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // `@contentful/rich-text-react-renderer`

    
  ],
}
