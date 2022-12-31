const path = require("path");
const pathPrefix = "/wiki/";
const siteMetadata = {
  title: "Everything that I know",
  shortName: "Deepak Wiki",
  description:
  "Accumulating thoughts, knowledge, tips and anything that is worth keeping a not of. These notes are build using the obsidian tool and deployed here as well for easy access.",
  twitterName: "deepaksood619",
  imageUrl: "/graph-visualisation.jpg",
  siteUrl: "https://deepaksood619.github.io/wiki/",
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/..`,
        ignore: [`**/\.*/**/*`],
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      options: {
        nav: [
          {
            title: "Github",
            url: "https://github.com/deepaksood619/wiki/",
          },
          {
            title: "Twitter",
            url: "https://twitter.com/deepaksood619",
          },
        ],
        editUrl:
          "https://github.com/deepaksood619/wiki/tree/main/",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [],
      },
    },
  ],
};
