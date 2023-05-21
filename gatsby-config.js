/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `my-portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    //"gatsby-plugin-styled-components",
   "gatsby-plugin-postcss",
   'gatsby-transformer-remark',
   `gatsby-plugin-sharp`,
   `gatsby-transformer-sharp`,
   `gatsby-plugin-image`,
    //"gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: "gatsby-plugin-env-variables",
    //   options: {
    //     allowList: ["API_SECRET_KEY"],
    //   },
    // },
  ]
};