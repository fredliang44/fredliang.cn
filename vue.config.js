
var PrerenderSpaPlugin = require('prerender-spa-plugin')
var path = require('path')

var manifestJSON = require('./public/manifest.json')

module.exports = {
  pwa: {
    name: manifestJSON.short_name,
    themeColor: manifestJSON.theme_color,
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    // workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      swSrc: 'src/service-worker.js'
      // skipWaiting: true,
      // clientsClaim: true
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return
    return {
      plugins: [
        new PrerenderSpaPlugin({
          // Absolute path to compiled SPA
          staticDir: path.resolve(__dirname, './dist'),
          // List of routes to prerender
          routes: ['/', '/photo', '/about'],
          // Options
          postProcess (context) {
            let titles = {
              '/': 'Fred Liang',
              '/photo': 'Photo',
              '/about': 'About Me'
            }
            context.html = context.html.replace(
              /<title>[^<]*<\/title>/i,
              `<title>${titles[context.route]}</title>`
            )
            return context
          }
        })
      ]
    }
  }
}
