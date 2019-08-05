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

      db.collection("hamburgers").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          $scope.hamburgers.push(doc.data());
        });
        $scope.$apply();
      });

      db.collection("hotdogs").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          $scope.hotdogs.push(doc.data());
        });
        $scope.$apply();
      });

      db.collection("acai").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          $scope.acai.push(doc.data());
        });
        $scope.$apply();
      });

      db.collection("tapiocas").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          $scope.tapiocas.push(doc.data());
        });
        $scope.$apply();
      });

      db.collection("porcoes").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          $scope.porcoes.push(doc.data());
        });
        $scope.$apply();
      });

      db.collection("bebidas").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          $scope.bebidas.push(doc.data());
        });
        $scope.$apply();
      });

      db.collection("sobremesas").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          $scope.sobremesas.push(doc.data());
        });
        $scope.$apply();
      });


    }

    init();

  });
