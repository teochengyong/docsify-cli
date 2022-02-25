module.exports = {
  template: './ssr.html',
  maxAge: 60 * 60 * 1000,
  config: {
    auto2top: true,
    coverpage: true,
    executeScript: true,
    loadSidebar: true,
    loadNavbar: true,
    mergeNavbar: true,
    maxLevel: 4,
    subMaxLevel: 2,
    name: 'docsify'
  }
}
