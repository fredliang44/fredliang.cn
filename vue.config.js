
var PrerenderSpaPlugin = require('prerender-spa-plugin')
var AliyunossWebpackPlugin = require('aliyunoss-webpack-plugin')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var path = require('path')
var oss = require('./oss')
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
    if (process.env.NODE_ENV !== 'production') return
    return {
      plugins: [
        new PrerenderSpaPlugin({
          // Absolute path to compiled SPA
          staticDir: path.resolve(__dirname, './dist'),
          // List of routes to prerender
          routes: ['/', '/photo', '/story', '/about'],
          // Options
          postProcess (context) {
            let titles = {
              '/': 'Fred Liang',
              '/photo': 'Photo',
              '/story': 'Story',
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
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: false
            }
          },
          sourceMap: false,
          parallel: true
        }),
        new AliyunossWebpackPlugin({
          buildPath: 'dist/**',
          region: oss.region,
          accessKeyId: oss.accessKeyId,
          accessKeySecret: oss.accessKeySecret,
          bucket: oss.bucket,
          deleteAll: true,
          generateObjectPath: function (filename, file) {
            return file.replace(/dist\//, '')
          }
        })
      ]
    }
  }
}
