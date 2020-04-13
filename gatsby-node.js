const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage }    = actions
    const PageYearTemplate  = path.resolve(`./src/templates/PageYear.js`)
    const anneeEnCours      = new Date().getFullYear()

    return graphql(`
    query listYears {
        allScrapingHubItem(sort: {fields: year, order: ASC}) {
        distinct(field: year)
        }
    }
    `, { limit: 6 }).then(result => {
        if (result.errors) {
            throw result.errors
        }

        // Création de la page toutes les années
        createPage({
            path:'all',
            component: PageYearTemplate,
            context: { annee: null }
        })


        // Création des pages par année
        result.data.allScrapingHubItem.distinct.forEach(annee => 
            createPage({
            path: parseInt(annee)===anneeEnCours ? '/' : ('annee-'+annee),
            component: PageYearTemplate,
            context: { annee: annee,},
            })
        )
    })
}

      