import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const SiteMetadata = () => {
  const {
    site: {
      siteMetadata: { siteUrl, title, description, image },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          title
          description
          image
        }
      }
    }
  `)

  return (
    <Helmet defer={false} defaultTitle={title} titleTemplate={`%s | ${title}`}>
        <html lang="fr" />
        <link rel="canonical" href={`${siteUrl}`} />
        <meta
            name="viewport"
            content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <meta content={description} name="description"></meta>
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr" />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={`${siteUrl}/${image}`} />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="350" />
        <meta property="og:description" content={description} />

        <meta name="twitter:card" content="summary" />
        <script defer id="fairlytics-id-ajcu6jd9k7ysd6" fairlyticskey="ad6a61c0-8186-4f5d-a103-9593af8cd49a" src="https://fairlytics.netlify.com/dist/js/tag.js"></script>

    </Helmet>
  )
}

export default SiteMetadata
