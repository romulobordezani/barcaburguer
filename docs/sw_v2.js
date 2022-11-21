self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v5').then(function(cache) {
      return cache.addAll([
        '/favicon.ico',
        '/images/favicons/android-chrome-192x192.png',
        '/images/favicons/android-chrome-512x512.png',
        '/images/favicons/android-icon-144x144.png',
        '/images/favicons/android-icon-192x192.png',
        '/images/favicons/android-icon-36x36.png',
        '/images/favicons/android-icon-48x48.png',
        '/images/favicons/android-icon-72x72.png',
        '/images/favicons/android-icon-96x96.png',
        '/images/favicons/apple-icon-114x114.png',
        '/images/favicons/apple-icon-120x120.png',
        '/images/favicons/apple-icon-144x144.png',
        '/images/favicons/apple-icon-152x152.png',
        '/images/favicons/apple-icon-180x180.png',
        '/images/favicons/apple-icon-57x57.png',
        '/images/favicons/apple-icon-60x60.png',
        '/images/favicons/apple-icon-72x72.png',
        '/images/favicons/apple-icon-76x76.png',
        '/images/favicons/apple-icon-precomposed.png',
        '/images/favicons/apple-icon.png',
        '/images/favicons/browserconfig.xml',
        '/images/favicons/favicon-16x16.png',
        '/images/favicons/favicon-32x32.png',
        '/images/favicons/favicon-96x96.png',
        '/images/favicons/favicon.ico',
        '/images/favicons/favicon.png',
        '/images/favicons/ms-icon-144x144.png',
        '/images/favicons/ms-icon-150x150.png',
        '/images/favicons/ms-icon-310x310.png',
        '/images/favicons/ms-icon-70x70.png',
        '/images/home/combo-destaque.2bdc13a4.png',
        '/images/home/destaque_acai.6acdf8f5.jpg',
        '/images/home/destaque_cardapio.fb30970f.jpg',
        '/images/home/destaque_ifood.e3b2e844.jpg',
        '/images/ogimage.png',
        '/images/socials/ico_facebook.4157d6d0.svg',
        '/images/socials/ico_ifood.svg',
        '/images/socials/ico_instagram.b90a0fcb.svg',
        '/images/socials/whatsapp-logo.b5cc4133.png',
        '/images/uis/Logo_BarcaBurguer_degrade.dc16bb68.svg',
        '/scripts/scripts.e239935c.js',
        '/scripts/vendor.98460ea9.js',
        '/styles/main.d1562e7a.css',
        '/styles/vendor.99529543.css',
        '/views/home.html',
        '/views/includes/browse-happy.html',
        '/views/includes/facebook-sdk.html',
        '/views/includes/footer.html',
        '/views/includes/menu-top.html',
        '/views/includes/ng-view.html',
        '/views/includes/pre-loader.html'
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
        return caches.match('/images/favicons/favicon.png');
      });
    }
  }));
});
