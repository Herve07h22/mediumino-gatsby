import React from "react"
import SiteMetadata from './SiteMetadata'
import Header from './Header'
import "./mystyles.scss"

const Layout = ({children}) => (

    <div className="container">
        <SiteMetadata />
        <Header /> 

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
