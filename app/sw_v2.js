self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v4').then(function(cache) {
      return cache.addAll([
        '/favicon.ico',
        '/images/cardapio/acai/acai350.png',
        '/images/cardapio/acai/acai700.png',
        '/images/cardapio/acai/barcaG.png',
        '/images/cardapio/acai/barcaM.png',
        '/images/cardapio/acai.png',
        '/images/cardapio/bgs/hamburger.png',
        '/images/cardapio/hamburger/chapa-quente.png',
        '/images/cardapio/hamburger/costela.png',
        '/images/cardapio/hamburger/hamburguer-carne-bacon.png',
        '/images/cardapio/hamburger/hamburguer-carne.png',
        '/images/cardapio/hamburger/hamburguer-egg.png',
        '/images/cardapio/hamburger/hamburguer-frango.png',
        '/images/cardapio/hamburger/hamburguerPernil.png',
        '/images/cardapio/hamburger/mineirinho.png',
        '/images/cardapio/hotdogs/hotdog-completo.png',
        '/images/cardapio/hotdogs/hotdog-especial.png',
        '/images/cardapio/hotdogs/hotdog-simples.png',
        '/images/cardapio/hotdogs/hotdog.png',
        '/images/cardapio/pagina1.png',
        '/images/cardapio/pagina2.png',
        '/images/cardapio/porcoes/calabresa.png',
        '/images/cardapio/porcoes/cebola.png',
        '/images/cardapio/porcoes/diversos.png',
        '/images/cardapio/porcoes/fritasGrande.png',
        '/images/cardapio/porcoes/fritasMedia.png',
        '/images/cardapio/porcoes/nuggetsGrande.png',
        '/images/cardapio/porcoes/nuggetsPequeno.png',
        '/images/cardapio/sobremesas/boloDePote.png',
        '/images/cardapio/sobremesas/miniChurros.png',
        '/images/cardapio/sobremesas/morangoNoEspeto.png',
        '/images/cardapio/tapiocas/doce.png',
        '/images/cardapio/tapiocas/salgada.png',
        '/images/contact/contatos-title.png',
        '/images/contact/ic_email_24px.8c518dde.svg',
        '/images/contact/ic_person_24px.ce91e393.svg',
        '/images/contact/ic_phone_24px.ad14821e.svg',
        '/images/contact/ic_place_24px.1b0c99d0.svg',
        '/images/contact/qr-code.png',
        '/images/contact/whatsapp-logo.png',
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
        '/images/frySound.mp3',
        '/images/home/banner-acai-m.45a31681.jpg',
        '/images/home/banner-acai.0d69fb79.jpg',
        '/images/home/banner-burguer-m.43dfc232.jpg',
        '/images/home/banner-burguer.43dfc232.jpg',
        '/images/home/banner-dogs.9ef23d03.jpg',
        '/images/home/banner.01a15148.jpg',
        '/images/home/combo-destaque.2bdc13a4.png',
        '/images/home/desconstrucao.a0d80efd.jpg',
        '/images/home/destaque_acai.6acdf8f5.jpg',
        '/images/home/destaque_cardapio.fb30970f.jpg',
        '/images/home/destaque_ifood.e3b2e844.jpg',
        '/images/home/post2.7ba2d0e1.jpg',
        '/images/home/post3.fee9dcc8.jpg',
        '/images/ogimage.png',
        '/images/socials/ico_facebook.4157d6d0.svg',
        '/images/socials/ico_ifood.svg',
        '/images/socials/ico_instagram.b90a0fcb.svg',
        '/images/socials/whatsapp-logo.b5cc4133.png',
        '/images/uis/Logo_BarcaBurguer_degrade.dc16bb68.svg',
        '/images/uis/menu-icon.c42b098c.svg',
        '/images/uis/vertical-sppliter.ed85c15f.svg',
        '/scripts/scripts.9b8e1cce.js',
        '/scripts/vendor.80006d43.js',
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

        caches.open('v4').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/images/favicons/favicon.png');
      });
    }
  }));
});
