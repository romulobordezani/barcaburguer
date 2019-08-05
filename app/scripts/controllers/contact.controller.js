'use strict';

/**
 * @ngdoc function
 * @name rbApp.controller:contactController
 * @description
 * # contactController
 * Controller of the rbApp
 */
angular.module('rbApp')
  .controller('contactController', function ($scope, $http, transformRequestAsFormPost, $mdDialog, $rootScope ){

    var addressFullFilled = false;

    function init(){

      $scope.user = {
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
      };

      $rootScope.contactButtonVisibility = false;

    }


    $scope.sendEmail = function(){

      if( ! $scope.contactForm.$valid ){
        return false;
      }

      $http(
        {
          method: 'post',
          url: '/api/sendemail',
          data:  $scope.user
        }
      ).then(
        function() {

          $mdDialog.show(
            $mdDialog.alert()
              .parent(angular.element(document.body))
              .title('Message Sent.')
              .content('I will reply it as soon as possible.  Thank you. Cheers')
              .ariaLabel('I will reply it as soon as possible. Thank you. Cheers')
              .ok('Ok')
          );

          $scope.user = {
            name: '',
            email: '',
            phone: '',
            address: '',
            message: ''
          };

        }
      ).catch(

        function(){

          $mdDialog.show(
            $mdDialog.alert()
              .parent(angular.element(document.body))
              .title('Oh no.')
              .content('Something went wrong with our server. Your message wasn\'t send. Please email me at romulobordezani@gmail.com.' )
              .ariaLabel('Something went wrong with our server. Your message wasn\'t send. Please email me at romulobordezani@gmail.com.')
              .ok('Dammit')
          );

        }

      );

    };

    init();

  });
