module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          //"GA-TRACKING_ID", // Google Analytics / GA
          "G-EZTBZWNH4N",
          //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
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
