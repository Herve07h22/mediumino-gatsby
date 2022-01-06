/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Les suggestions de lectures et d'auteurs français dans Medium",
    siteUrl: "https://mediumino.fr",
    description:
      "Medium.com version France : Une selection des meilleurs articles de Medium écrits en français.",
    image: "Mediumino.jpg",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-scrapinghub",
      options: {
        key: process.env.SCRAPING_HUB_API_KEY,
        project: process.env.SCRAPING_HUB_PROJECT,
        detectedLanguage: "fr",
        //limit:100,
      },
    },
  ],
};
