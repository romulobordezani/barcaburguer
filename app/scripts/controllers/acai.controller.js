'use strict';

/**
 * @ngdoc function
 * @name rbApp.controller:acaiController
 * @description
 * # acaiCtrl
 * Controller of the rbApp
 */
angular.module('rbApp')
  .controller('acaiController', function ($scope){

    $scope.acai_complementos = [];
    $scope.acai_complementos_extra = [];
    $scope.acai = [];

    function init(){

      const db = firebase.firestore();

      db.collection("acai_complementos").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          $scope.acai_complementos.push(doc.data());
        });
        $scope.$apply();
      });

      db.collection("acai_complementos_extra").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          $scope.acai_complementos_extra.push(doc.data());
        });
        $scope.$apply();
      });

      db.collection("acai").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          $scope.acai.push(doc.data());
        });
        $scope.$apply();
      });

    }

    init();

  });
