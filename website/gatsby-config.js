const path = require('path');
const packageJson = require('./package.json');
const { homepage, description, author, keywords } = packageJson;
const title = 'layout-ui';
module.exports = {
  siteMetadata: {
    siteUrl: homepage,
    title,
    description,
    author,
    keywords,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/../README.md`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/docs`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: title,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: title,
        icon: `../logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        remarkPlugins: [require('./plugins/gatsby-remark-live-code')],
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-autolink-headers' },
          { resolve: 'gatsby-remark-smartypants' },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/icons/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-174483672-1',
      },
    },

    'gatsby-plugin-filbert',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
  ],
};
