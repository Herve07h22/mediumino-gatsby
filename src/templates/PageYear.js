import React from "react"
import PostList from '../components/PostList'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import YearTabs from '../components/YearTabs'

export default ({ data, pageContext }) => {
    const annee         = pageContext.annee
    return (
        <Layout>
            <YearTabs annee={annee} />
            <PostList postList={data.allScrapingHubItem.edges} />
        </Layout>
    )
}

export const query = graphql`
  query ItemsByInterval($annee: Int) {
    allScrapingHubItem(sort: {order: DESC, fields: postTotalClapCount}, filter: {year: {eq: $annee}}) {
      edges {
        node {
          postId
          postTitle
          year
          postFirstPublishedAt
          postTotalClapCount
          userName
          userId
          postSlug
          postPreviewImage
          name
          detectedLanguage
        }
      }
      
    }
  }
  
`