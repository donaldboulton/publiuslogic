const readJson = async (url, defaultValue = {}) => {
  let response = await fetch(url)

  try {
    return await response.json()
  } catch (_) {
    return []
  }
}

const getJsonUrl = data => {
  // TODO: Clean up this mess
  return (
    data &&
    data.allFile &&
    data.allFile.edges &&
    data.allFile.edges[0] &&
    data.allFile.edges[0].node.publicURL
  )
}

export { readJson, getJsonUrl }
