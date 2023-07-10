/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: "/portfoio",
  siteMetadata: {
    title: `my-portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    //"gatsby-plugin-styled-components",
   "gatsby-plugin-postcss",
   {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 800,
          },
        },
      ],
    },
  },
   `gatsby-plugin-sharp`,
   `gatsby-transformer-sharp`,
   `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src/projects",
        path: `${__dirname}/src/content/projects`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src/skills",
        path: `${__dirname}/src/content/skills`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src/testimonials",
        path: `${__dirname}/src/content/testimonials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:"images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: "remark-class-names"
          }
        ],
      },
    },
  ]
};