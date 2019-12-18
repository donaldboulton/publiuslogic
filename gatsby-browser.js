const scrollToElement = require('scroll-to-element')

exports.onRouteUpdate = ({ location }) => {
  checkHash(location)
}

const checkHash = location => {
  const { hash } = location
  if (hash) {
    scrollToElement(hash, {
      offset: -95,
      duration: 1000,
    })
  }
}
