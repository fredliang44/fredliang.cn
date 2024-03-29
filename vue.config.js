
var PrerenderSpaPlugin = require('prerender-spa-plugin')
var AliyunossWebpackPlugin = require('aliyunoss-webpack-plugin')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
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
      swSrc: 'src/service-worker.js',
      // swDest: path.resolve(__dirname, 'dist', 'firebase-messaging-sw.js'),
      importWorkboxFrom: 'local'
      // skipWaiting: true,
      // clientsClaim: true
    }
  },
  configureWebpack: config => {
    var plugins = [
      new PrerenderSpaPlugin({
        // Absolute path to compiled SPA
        staticDir: path.resolve(__dirname, './dist'),
        // List of routes to prerender
        routes: ['/', '/photo', '/story', '/about'],
        // Options
        postProcess (context) {
          const titles = {
            '/': 'Fred Liang',
            '/photo': 'Photo',
            '/story': 'Story',
            '/story/unionsql': 'UnionSQL',
            '/about': 'About Me'
          }
          context.html = context.html.replace(
            /<title>[^<]*<\/title>/i,
            `<title>${titles[context.route]}</title>`
          )
          return context
        }
      }),
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_debugger: true,
            drop_console: false
          }
        },
        sourceMap: false,
        parallel: true
      })]

    var ossPlugin = new AliyunossWebpackPlugin({
      buildPath: 'dist/**',
      accessKeyId: process.env.AliAccessKeyID,
      accessKeySecret: process.env.AliAccessKeySecret,
      region: process.env.WebsiteOSSRegion,
      bucket: process.env.WebsiteOSSBucket,
      deleteAll: true,
      generateObjectPath: function (filename, file) {
        return file.replace(/dist\//, '')
      }
    })

    // dev environment
    if (process.env.NODE_ENV !== 'production') return

    // now environment
    if (process.env.NOW_ENV !== undefined) {
      return {
        plugins: plugins
      }
    }
    // build environment
    plugins.push(ossPlugin)
    return {
      plugins: plugins
    }
  }
}
