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
    'angularytics',
    'plangular',
    'addClassOnClick',
  ])

  .config(
    function ( $routeProvider, $mdThemingProvider, AngularyticsProvider, plangularConfigProvider, CONFIG ) {
      $routeProvider

        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'homeController',
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
    const loadingTime = environment === 'local' ? 100 : 100;


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
      Animator.scrollTo(document.getElementById('rb-body'), 0, 500);
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


