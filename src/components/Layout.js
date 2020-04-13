import React from "react"
import SiteMetadata from './SiteMetadata'

const Layout = ({nbArticles, children}) => (

    <div className="container">
        <SiteMetadata />
        <section className="section">
            <div className="container">
                <h1 className="title">Une sélection des meilleurs articles en Français</h1>
                <h2 className="subtitle">
                    Une sélection de {nbArticles} articles, actualisée chaque jour.
                </h2>
            </div>
        </section>

        <section className="section">
            <div className="container">
                {children}
            </div>
        </section>

        <footer className="level box">
            <div className="level-item has-text-centered">
                <p className="subtitle">
                Réalisé par <a href="https://camilab.co">Camilab</a> D'après une idée de <a href="https://michaeldeng.me/"> Michael Deng</a>. Aucun rapport avec  <a href="https://medium.com/">Medium</a>.
                </p>
               
               
            </div>
            <div className="level-item has-text-centered">
                
                <p>
                <code>#Gatsby #React #Scrapy #Bulma </code>
                </p>
            </div>
            
        </footer>
    </div>
)

export default Layout
