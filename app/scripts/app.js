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
        'addClassOnClick'
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
                    controller: 'homeController',
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
                    controller: 'homeController',
                    animation: 'fade'
                })


                .otherwise({
                    redirectTo: '/',
                    animation: 'fade'
                });

            $mdThemingProvider.theme('default').dark()
                .primaryPalette('grey')
                .accentPalette('deep-orange');

            AngularyticsProvider.setEventHandlers(['GoogleUniversal']);


            plangularConfigProvider.clientId = 'a5f0b5300855bcc76cb9957762d89deb';


        }

).run(
    function ( $rootScope, $timeout, $templateCache, $http, Angularytics, Animator, CONFIG ) {

        Angularytics.init();

        $rootScope.date = new Date();

        $timeout( function(){
            var spinnerParent = document.getElementById('rb-body');
            var spinner = document.getElementById('main-pre-loader-wrapper');
            spinnerParent.removeChild(spinner);
        }, 3000);


        $rootScope.$on('$routeChangeSuccess', function () {
            Animator.scrollTo(document.getElementById('ngview-container'), 0, 500);
        });


        $http.get('views/contact.html', { cache: $templateCache }).then(function(){

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


