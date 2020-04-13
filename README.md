# Mediumino website

## Quick start

### 1. Set env variables
- SCRAPING_HUB_API_KEY : your ScrapingHub key
- SCRAPING_HUB_PROJECT : your ScrapingHub project id

Scrapped items will be fetched from : `https://storage.scrapinghub.com/items/<SCRAPING_HUB_PROJECT>`

### 2. Update gatsby-config

```
module.exports = {
  siteMetadata: {
    title: "Les suggestions de lectures et d'auteurs français dans Medium",
    siteUrl: "https://mediumino.fr",
    description: "Medium.com version France : Une selection des meilleurs articles de Medium écrits en français.",
    image: "Mediumino.jpg"
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
}
```

### 3. Test the website

```
gatsby develop
```





