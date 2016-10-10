var debug;
(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  function HomeController($scope, $http) {
    var vm = this;
    debug = $scope;

    $scope.selectedImg = "";

    $http.get('/images/abc', {}).then(function(res){
    	$scope.images = res.data;
    	console.log("images: ", res);
    });

    $scope.open = function() {
    	console.log('open')
    }
  }
}());
