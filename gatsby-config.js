module.exports = {
  siteMetadata: {
    title: "Matteo Maso - Software engineer based in Berlin",
    siteUrl: `https://matteomaso.com`,
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-EZTBZWNH4N"
          //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'MatteoMaso',
        short_name: 'Matteo Maso - Software engineer',
        description: 'Portfolio website of Matteo Maso - Software engineer based in Berlin',
        lang: 'en',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
        legacy: false, // this will not add apple-touch-icon links to <head>
      },
    },
  ],
};
