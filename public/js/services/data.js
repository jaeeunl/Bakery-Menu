'use strict';

angular.module('bakeryMenuApp')
.service('dataService', function($http) {
  
  this.getMenus = function(callback){
    $http.get('mock/menu.json')
    .then(callback)
  };
  
});