import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

const TabAnnee = ({annee, valeur, lien}) => (
    <li className={annee===valeur ? "is-active" : ""}> 
        <Link to={lien} >{valeur || 'Tout'}</Link>
    </li>
)

const YearTabs = ({annee}) => {
    const data = useStaticQuery(graphql`
        query listYears {
            allScrapingHubItem(sort: {fields: year, order: ASC}) {
                distinct(field: year)
            }
        }
    `)

    const annees        = data.allScrapingHubItem.distinct.map(a => parseInt(a)).sort( (a, b) => b-a )
    const anneeEnCours  = new Date().getFullYear()

    return (
        <div className="tabs">
            <ul>
                <TabAnnee annee={annee} valeur={0} lien='/all' >Tout</TabAnnee>
                { annees.map( a => <TabAnnee key={a} annee={annee} valeur={a} lien={a === anneeEnCours ? '/' : ('/annee-'+a)} />) }
            </ul>
        </div>
    )
}

export default YearTabs
