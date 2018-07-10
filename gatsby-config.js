module.exports = {
  siteMetadata: {
    title: 'Alicia Collymore',
  },
  pathPrefix: "/aliciacollymore.com",
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components'
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-122006925-1",
        head: false,
        anonymize: true,
        respectDNT: true
      },
    },
  ],
}
