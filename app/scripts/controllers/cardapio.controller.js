'use strict';

/**
 * @ngdoc function
 * @name rbApp.controller:cardapioController
 * @description
 * # CardapioCtrl
 * Controller of the rbApp
 */
angular.module('rbApp')
  .controller('cardapioController', function ($scope){

    $scope.hamburgers = [];
    $scope.hotdogs = [];
    $scope.acai = [];
    $scope.tapiocas = [];
    $scope.porcoes = [];
    $scope.bebidas = [];
    $scope.sobremesas = [];

    function init(){

      const db = firebase.firestore();

      db.collection("hamburgers").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          $scope.hamburgers.push(doc.data());
        });
        $scope.$apply();
      });

      db.collection("hotdogs").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          $scope.hotdogs.push(doc.data());
        });
        $scope.$apply();
      });

      db.collection("acai").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          $scope.acai.push(doc.data());
        });
        $scope.$apply();
      });

      db.collection("tapiocas").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          $scope.tapiocas.push(doc.data());
        });
        $scope.$apply();
      });

      db.collection("porcoes").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          $scope.porcoes.push(doc.data());
        });
        $scope.$apply();
      });

      db.collection("bebidas").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          $scope.bebidas.push(doc.data());
        });
        $scope.$apply();
      });

      db.collection("sobremesas").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          $scope.sobremesas.push(doc.data());
        });
        $scope.$apply();
      });


    }

    init();

  });
