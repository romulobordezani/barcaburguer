'use strict';

/**
 * @ngdoc function
 * @name rbApp.controller:NavBarCtrl
 * @description
 * # NavBarCtrl
 * Controller of the rbApp
 */
angular.module('rbApp')
  .controller('NavBarController', function ($scope, $rootScope) {


    function getCurrentLinkFromRoute(route) {
      let currentPath = route.$$route.originalPath;

      if (currentPath === '/') {
        return 'inicio';
      }

      return currentPath.replace('/', '');
    }

    $rootScope.$on('$routeChangeSuccess', function(event, current) {
      $scope.currentNavItem = getCurrentLinkFromRoute(current);
    });
  });




