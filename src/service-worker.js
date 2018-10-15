/* eslint-disable */

workbox.core.setCacheNameDetails({prefix: "personal-website"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


// html的缓存策略
workbox.routing.registerRoute(
  new RegExp('.*\.(?:html|json)'),
  workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
  new RegExp('.*\.(?:js|css)'),
  workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
  new RegExp('https://stroage\.fredliang.\.cn/'),
  workbox.strategies.staleWhileRevalidate()
);

self.addEventListener('install', function(event){
  console.log('installed!');
})

self.addEventListener('activate', function(event){
  console.log('activated!');
});

self.addEventListener('message', function(event){
  console.log("SW Received Message: " + event.data);
});

self.addEventListener('push', function(event) {
  const pushInfoPromise = fetch('https://open.fredliang.cn/blog/visitor')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      const title = 'Message from Fred Liang'
      const options = {
        body: 'currently ' + response.data + ' visitors',
        icon: '/img/icons/icon-128x128.png',
        renotify: true,
        actions: [],
        url: 'https://www.fredliang.cn/',
        tag: 'renotify'
      }

      return self.registration.showNotification(title, options);
    });

  const promiseChain = Promise.all([
    pushInfoPromise
  ]);

  event.waitUntil(promiseChain);
});

self.addEventListener('notificationclick', function(event) {
  const url = 'https://www.fredliang.cn';

  const promiseChain = Promise.all([
    clients.openWindow(url)
  ]);
  event.waitUntil(promiseChain);
});

self.addEventListener('notificationclose', function(event) {
  const dismissedNotification = event.notification;
  const promiseChain = console.log('notificationclose');
  event.waitUntil(promiseChain);
});