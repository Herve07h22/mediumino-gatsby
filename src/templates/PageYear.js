import React from "react"
import PostList from '../components/PostList'
import "./mystyles.scss"
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'

const TabAnnee = ({annee, valeur, lien}) => (
    <li className={annee===valeur ? "is-active" : ""}> 
        <Link to={lien} >{valeur || 'Tout'}</Link>
    </li>
)

export default ({ data, pageContext }) => {
    const annee         = parseInt(pageContext.annee || 0)
    const postList      = data.allScrapingHubItem.edges
    const annees        = data.allScrapingHubItem.distinct.map(a => parseInt(a)).sort( (a, b) => b-a )
    const nbArticles    = postList.length
    const fromDate      = annee ? ''+annee+'-01-01' : null
    const toDate        = annee ? ''+annee+'-12-31' : null
    const anneeEnCours  = new Date().getFullYear()

    return (
        <Layout nbArticles={nbArticles}>
            <div className="tabs">
                <ul>
                    <TabAnnee annee={annee} valeur={0} lien='/all' >Tout</TabAnnee>
                    { annees.map( a => <TabAnnee key={a} annee={annee} valeur={a} lien={a === anneeEnCours ? '/' : ('/annee-'+a)} />) }
                </ul>
            </div>
            <PostList postList={data.allScrapingHubItem.edges} fromDate={fromDate} toDate={toDate} />

        </Layout>
    )

}

export const query = graphql`
query ItemsByInterval {
    allScrapingHubItem(sort: {order: DESC, fields: postTotalClapCount}) {
      distinct(field: year)
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