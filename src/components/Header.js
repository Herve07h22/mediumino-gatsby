import React from "react"
import {graphql, useStaticQuery } from 'gatsby'

const Header = () => {
    const data = useStaticQuery(graphql`
        query nbArticles {
            allScrapingHubItem {
                totalCount
            }
        }
    `)

    return (
        <section className="section">
            <div className="container">
                <h1 className="title">Une sélection des meilleurs articles en Français</h1>
                <h2 className="subtitle">
                    Une sélection de {data.allScrapingHubItem.totalCount} articles, actualisée chaque jour.
                </h2>
            </div>
        </section>
    )
}

export default Header
