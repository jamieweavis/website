module.exports = {
  siteMetadata: {
    title: `Full Stack JavaScript Developer Based in the UK | Jamie Weavis`,
    description: `I'm a Full Stack JavaScript Developer currently utilising modern JavaScript tools in the cloud including TypeScript, React, GraphQL, Apollo, Jest and more.`,
    author: `@jamieweavis`,
    siteUrl: `https://www.jamieweavis.dev`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2c323a`,
        theme_color: `#ef913f`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-MRZ9CZF',
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-115396792-1',
    //     head: false,
    //   },
    // },
  ],
};
