const path = require(`path`);
const { createRemoteFileNode } = require("gatsby-source-filesystem");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const PageYearTemplate = path.resolve(`./src/templates/PageYear.js`);
  const anneeEnCours = new Date().getFullYear();

  return graphql(
    `
      query listYears {
        allScrapingHubItem(sort: { fields: year, order: ASC }) {
          distinct(field: year)
        }
      }
    `,
    { limit: 6 }
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Création de la page toutes les années
    createPage({
      path: "all",
      component: PageYearTemplate,
    });

    // Création des pages par année

    const anneeHomePage = result.data.allScrapingHubItem.distinct.length
      ? parseInt(
          result.data.allScrapingHubItem.distinct[
            result.data.allScrapingHubItem.distinct.length - 1
          ]
        )
      : anneeEnCours;

    createPage({
      path: "/",
      component: PageYearTemplate,
      context: { annee: anneeHomePage },
    });

    result.data.allScrapingHubItem.distinct.forEach((annee) =>
      createPage({
        path: "annee-" + annee,
        component: PageYearTemplate,
        context: { annee: parseInt(annee) },
      })
    );
  });
};
/*
exports.onCreateNode = async ({
    node,
    actions: { createNode },
    store,
    cache,
    createNodeId,
  }) => {
    // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
    if (
      node.internal.type === "scrapingHubItem" && node.postPreviewImage 
    ) {
      let fileNode = await createRemoteFileNode({
        url: node.postPreviewImage, // string that points to the URL of the image
        parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
        createNode, // helper function in gatsby-node to generate the node
        createNodeId, // helper function in gatsby-node to generate the node id
        cache, // Gatsby's cache
        store, // Gatsby's redux store
      })
      // if the file was created, attach the new node to the parent node
      if (fileNode) {
        node.postPreviewImage___NODE = fileNode.id
      }
    }
  }
  */
