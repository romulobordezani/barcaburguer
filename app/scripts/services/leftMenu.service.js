/*jshint latedef: false */
(function(){
    'use strict';

    angular.module('rbApp')
        .service('leftMenuService', ['$q', 'CONFIG', LeftMenuService ]);

            /**
             * Users DataService
             * Uses embedded, hard-coded data model; acts asynchronously to simulate
             * remote data service call(s).
             *
             * @returns {{loadAll: Function}}
             * @constructor
             */
            function LeftMenuService($q, CONFIG){
                var leftMenu = [

                    {
                        label: 'Início',
                        alt: 'Início',
                        href: '/',
                        target : '',
                        imgsrc: 'images/menu/home.svg',
                        class: 'round-crop'
                    },

                    {
                        label: 'Cardápio',
                        alt: 'Cardápio',
                        href: '/cardapio',
                        target : '_BLANK',
                        imgsrc: 'images/menu/cardapio.svg',
                        class: 'round-crop'
                    },

                    {
                        label: '',
                        alt: 'Delivery',
                        href: 'https://www.ifood.com.br/delivery/sao-paulo-sp/barca-burguer-vila-santista',
                        target : '_BLANK',
                        imgsrc: 'images/socials/ico_ifood.svg',
                        class: 'ifood'
                    },

                    {
                        label: 'Contato',
                        alt: 'Contato',
                        href: '/contato',
                        target : '',
                        imgsrc: 'images/menu/contact.svg',
                        class: 'round-crop'
                    }

                ];


                return {
                    loadMenu : function() {
                        return $q.when(leftMenu);
                    }
                };
            }

})();
