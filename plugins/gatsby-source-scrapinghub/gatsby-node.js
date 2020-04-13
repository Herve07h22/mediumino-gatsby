const fetch = require("node-fetch")

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
    const { createNode } = actions

    // Gatsby adds a configOption that's not needed for this plugin, delete it
    delete configOptions.plugins

    // Helper function that processes a photo to match Gatsby's node structure
    const processItem = item => {
        const nodeId = createNodeId(`scrapinghub-item-${item.postId}`)
        const nodeContent = JSON.stringify(item)
        const nodeData = Object.assign({}, item, {
            id: nodeId,
            parent: null,
            children: [],
            internal: {
                type: `scrapingHubItem`,
                content: nodeContent,
                contentDigest: createContentDigest(item),
            },
        })
        return nodeData
    }

    // plugin code goes here...
    //console.log("Testing my plugin", configOptions)
    const apiUrl = `https://storage.scrapinghub.com/items/${configOptions.project}?apikey=${configOptions.key}`

    console.log("apiUrl:", apiUrl)
    return (
        // Fetch a response from the apiUrl
        fetch(apiUrl)
            // Parse the response as JSON
            .then(response =>response.text())
            .then(response => {
                const lines = configOptions.limit ? response.split('\n').slice(0, configOptions.limit) : response.split('\n')
                return lines.map(e => {
                    try {
                        return JSON.parse(e)
                    }
                    catch(e) {
                        return null
                    }
                })
            })
            .then( items => items.filter(item => item && item.postId && item.detectedLanguage===configOptions.detectedLanguage) )
            .then( items => {
                const listOfPostIds = items.reduce( (acc, val) => acc.includes(val.postId) ? acc : [...acc, val.postId], [])
                return listOfPostIds.map( postId => items.find(item => item.postId === postId)).filter(item => !!item)
            })
            .then( items => items.forEach( item => {
                const nodeData = processItem(item)
                createNode(nodeData)
            }))

    )
                   
}

