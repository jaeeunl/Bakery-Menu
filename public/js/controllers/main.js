'use strict';

angular.module('bakeryMenuApp')
.controller('mainCtrl', function($scope, dataService) {  
  dataService.getMenus(function(response) { 
      $scope.menus = response.data.menus;
      $scope.category = 'all';
      $scope.categoryList = function(value) {
        $scope.category = value;
      }
      $scope.search = {};
      
    });
})


