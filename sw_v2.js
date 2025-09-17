self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v5').then(function(cache) {
      return cache.addAll([
        '/favicon.ico',
        '/public/images/favicons/android-chrome-192x192.png',
        '/public/images/favicons/android-chrome-512x512.png',
        '/public/images/favicons/android-icon-144x144.png',
        '/public/images/favicons/android-icon-192x192.png',
        '/public/images/favicons/android-icon-36x36.png',
        '/public/images/favicons/android-icon-48x48.png',
        '/public/images/favicons/android-icon-72x72.png',
        '/public/images/favicons/android-icon-96x96.png',
        '/public/images/favicons/apple-icon-114x114.png',
        '/public/images/favicons/apple-icon-120x120.png',
        '/public/images/favicons/apple-icon-144x144.png',
        '/public/images/favicons/apple-icon-152x152.png',
        '/public/images/favicons/apple-icon-180x180.png',
        '/public/images/favicons/apple-icon-57x57.png',
        '/public/images/favicons/apple-icon-60x60.png',
        '/public/images/favicons/apple-icon-72x72.png',
        '/public/images/favicons/apple-icon-76x76.png',
        '/public/images/favicons/apple-icon-precomposed.png',
        '/public/images/favicons/apple-icon.png',
        '/public/images/favicons/browserconfig.xml',
        '/public/images/favicons/favicon-16x16.png',
        '/public/images/favicons/favicon-32x32.png',
        '/public/images/favicons/favicon-96x96.png',
        '/public/images/favicons/favicon.ico',
        '/public/images/favicons/favicon.png',
        '/public/images/favicons/ms-icon-144x144.png',
        '/public/images/favicons/ms-icon-150x150.png',
        '/public/images/favicons/ms-icon-310x310.png',
        '/public/images/favicons/ms-icon-70x70.png',
        '/public/images/frySound.mp3',

      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {

        if(!(event.request.url.indexOf('http') === 0)){
          return response;
        }

        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();

        caches.open('v5').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/public/images/favicons/favicon.png');
      });
    }
  }));
});
