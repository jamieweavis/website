module.exports = {
  siteMetadata: {
    title: 'Jamie Weavis - JavaScript Developer - Portfolio',
    siteUrl: 'https://jamieweavis.com/',
    metaTags: [
      {
        name: 'description',
        content: 'Description'
      },
      {
        name: 'keywords',
        content: 'keyword1, keyword2'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data/'
      }
    }
  ]
};
