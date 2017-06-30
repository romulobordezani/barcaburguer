'use strict';

/**
 * @ngdoc function
 * @name rbApp.controller:appController
 * @description
 * # AboutCtrl
 * Controller of the rbApp
 */
angular.module('rbApp')
    .controller('appController', ['$scope', '$mdSidenav','leftMenuService', '$location', '$rootScope', '$timeout', 'CONFIG',
        function( $scope, $mdSidenav, leftMenuService, $location, $rootScope, $timeout, CONFIG ){


            var menu = {

                init : function(){
                    this.setListeners();
                    this.selectMenuItemByUrl();
                },

                setListeners : function(){

                    $scope.toggleSidenav = function(menuId) {
                        $mdSidenav(menuId).toggle();
                    };

                    $scope.menuClick = function( menuItem, e ) {

                        $scope.selected = angular.isNumber(menuItem) ? $scope.leftMenuList[menuItem] : menuItem;

                        $mdSidenav('leftMenu').toggle().then(function () {

                            if( menuItem.href.indexOf('http') > -1 ){

                                window.open(
                                    menuItem.href
                                );

                            }else{
                                $location.path(menuItem.href);
                            }

                        });

                        e.preventDefault();

                    };


                    $scope.swipeLeftMenu = function(){
                        $mdSidenav('leftMenu').close();
                    };

                    $scope.blowOnClick = function(){
                        $location.path('/');
                    };


                },

                loadService : function(){

                    leftMenuService
                        .loadMenu()
                        .then( function( leftMenu ) {
                            $scope.leftMenuList = [].concat(leftMenu);
                            menu.init();
                        });

                },

                selectMenuItemByUrl : function(){
                    for( var i=0; i < $scope.leftMenuList.length; i++ ){
                        if( $location.path().indexOf( $scope.leftMenuList[i].href) >= 0 ){
                            $scope.selected = $scope.leftMenuList[i];
                        }
                    }
                }

            };

            $scope.FIRST_YEAR = CONFIG.FIRST_YEAR;
            $scope.LAST_YEAR = CONFIG.LAST_YEAR;

            function attachEvents(){

                $rootScope.$on('$routeChangeStart', function(event, currRoute /* , prevRoute */ ){
                    $scope.animation = currRoute.animation || 'fade';
                    $scope.showFooter = currRoute.showFooter || false;
                });

                $rootScope.$on('forceAnimationSet', function(event, args) {
                    $scope.animation = args.animation;
                });

            }


            function init(){
                attachEvents();
                menu.loadService();
            }

            init();

        }
    ]);
