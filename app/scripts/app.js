'use strict';

angular
  .module('rbApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ngMessages',
    'mdParallax',
    'angularytics',
    'plangular',
    'addClassOnClick',
    'productDirective'
  ])

  .config(
    function ( $routeProvider, $mdThemingProvider, AngularyticsProvider, plangularConfigProvider, CONFIG ) {
      $routeProvider

        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'homeController',
          animation: 'fade'
        })

        .when('/acai', {
          templateUrl: 'views/acai.html',
          controller: 'acaiController',
          animation: 'fade'
        })

        .when('/contato', {
          templateUrl: 'views/contact.html',
          controller: 'contactController',
          animation: 'fade',
          hideFooter : true
        })

        .when('/cardapio', {
          templateUrl: 'views/cardapio.html',
          controller: 'cardapioController',
          animation: 'fade'
        })

        .when('/regulamento', {
          templateUrl: 'views/regulamento.html',
          controller: 'homeController',
          animation: 'fade'
        })

        .when('/seed', {
          templateUrl: 'views/seed.html',
          controller: 'seedController',
          animation: 'fade'
        })

        .otherwise({
          redirectTo: '/',
          animation: 'fade'
        });

      $mdThemingProvider.theme('default').dark()
        .primaryPalette('grey')
        .accentPalette('light-green');

      AngularyticsProvider.setEventHandlers(['GoogleUniversal']);
      plangularConfigProvider.clientId = 'a5f0b5300855bcc76cb9957762d89deb';
    }

  ).run(
  function ( $rootScope, $timeout, $templateCache, $http, Angularytics, Animator, CONFIG, $mdSidenav, $location ) {

    Angularytics.init();

    $rootScope.date = new Date();

    const environment = document.location.host.indexOf('localhost') >= 0 ? 'local' : 'outside';
    const loadingTime = environment === 'local' ? 100 : 10000;


    $timeout( function(){
      var spinnerParent = document.getElementById('rb-body');
      var spinner = document.getElementById('main-pre-loader-wrapper');
      spinnerParent.removeChild(spinner);
    }, loadingTime);

    var audio = document.createElement("audio");
    audio.src = "images/frySound.mp3";
    audio.autoplay = true;

    audio.addEventListener("canplaythrough", function () {
      setTimeout(function(){
          audio.pause();
        },
        loadingTime);
    }, false);


    $rootScope.$on('$routeChangeSuccess', function () {
      Animator.scrollTo(document.getElementById('ngview-container'), 0, 500);
    });


    $http.get('views/contact.html', { cache: $templateCache }).then(function(){
      $http.get('views/cardapio.html', { cache: $templateCache }).then(function(){
        $http.get('views/acai.html', { cache: $templateCache }).then(function(){});
      });
    });

    var signature = [

      '                                             ',
      '      __             __                      ',
      '     /__)  _    /   / _)  _ _/_ _   _    o   ',
      '    / ( ()//)(/(() /__)()/ (/(- /_ (//\\//    ',
      '                                             ',
      '                                             ',
      '                                    ' + CONFIG.LAST_YEAR + '     ',
      '                                             ',

    ].join('\r\n');

    console.log('%c'+signature, 'font-size: 11px; color: #333333; background: #F6F6F6; ');

  }
);


