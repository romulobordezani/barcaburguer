self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v2').then(function(cache) {
      return cache.addAll([
        '/404.html',
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
        '/images/home/banner.7136ef8d.png',
        '/images/home/banner.fddb0c78.jpg',
        '/images/home/combo-destaque.2bdc13a4.png',
        '/images/home/desconstrucao.a0d80efd.jpg',
        '/images/home/destaque_acai.6acdf8f5.jpg',
        '/images/home/destaque_cardapio.6a0ff034.jpg',
        '/images/home/destaque_chapa_quente.a96b465d.jpg',
        '/images/home/destaque_ifood.e3b2e844.jpg',
        '/images/home/kids.c2fafce3.jpg',
        '/images/home/logo-ml.2e2da351.png',
        '/images/home/post2.231d0ce0.jpg',
        '/images/home/post3.0882097e.jpg',
        '/images/home/post4.11996280.jpg',
        '/images/menu/cardapio.svg',
        '/images/menu/cardapio_.svg',
        '/images/menu/contact.svg',
        '/images/menu/home.svg',
        '/images/menu/ico_ifood.svg',
        '/images/ogimage.png',
        '/images/socials/ico_facebook.4157d6d0.svg',
        '/images/socials/ico_ifood.svg',
        '/images/uis/Logo_BarcaBurguer_degrade.dc16bb68.svg',
        '/images/uis/backTolist-centered.svg',
        '/images/uis/backTolist.svg',
        '/images/uis/ic_close_24px.svg',
        '/images/uis/ic_goto_24px.svg',
        '/images/uis/ic_launch_24px.svg',
        '/images/uis/ic_menu_black_24px.svg',
        '/images/uis/ic_paper_plane_24px.svg',
        '/images/uis/menu-icon.c42b098c.svg',
        '/images/uis/vertical-sppliter.ed85c15f.svg',
        '/scripts/scripts.bf24d468.js',
        '/scripts/vendor.6439a2d9.js',
        '/styles/main.f483c88f.css',
        '/styles/vendor.99529543.css',
        '/views/acai.html',
        '/views/cardapio.html',
        '/views/contact.html',
        '/views/directives/product.html',
        '/views/home.html',
        '/views/includes/browse-happy.html',
        '/views/includes/facebook-sdk.html',
        '/views/includes/footer.html',
        '/views/includes/menu-top-desktop.html',
        '/views/includes/menu-top-mobile.html',
        '/views/includes/ng-view.html',
        '/views/includes/pre-loader.html',
        '/views/regulamento.html',
        '/views/seed.html'
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

        caches.open('v2').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/images/favicons/favicon.png');
      });
    }
  }));
});
