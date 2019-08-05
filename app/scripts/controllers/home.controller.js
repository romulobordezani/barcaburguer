'use strict';

/**
 * @ngdoc function
 * @name rbApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the rbApp
 */
angular.module('rbApp')
    .controller('homeController', function ($scope, Utils, $window) {
        $scope.goTo = Utils.goTo;
        $scope.window = $window;
    });




