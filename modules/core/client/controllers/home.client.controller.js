(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  function HomeController() {
    var vm = this;

    $http.get('/images/abc', {}).then(function(res){
    	$scope.images = res;
    });
  }
}());
