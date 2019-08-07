'use strict';
angular.module('productDirective', []).directive('product', [ 'Utils', '$timeout',
     function (Utils, $timeout) {
        return {
            restrict: 'E',

            scope: {
              title: '@',
              type: '@',
              itemData: '=',
              containerClass: '@'
            },

            transclude: true,

            templateUrl: '../views/directives/product.html',

            link: function(scope, element, attrs) {
              scope.showFilter = function(item){
                return item.show;
              };
            }
        };

     }
]);
