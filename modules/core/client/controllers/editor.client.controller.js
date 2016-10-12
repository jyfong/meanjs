var debug;
(function () {
  'use strict';

  angular
    .module('core')
    .controller('EditorController', EditorController);

  function EditorController($scope, $http) {
    var vm = this;
    debug = $scope;

    $scope.selectedImg = "";

    $http.get('/images/abc', {}).then(function(res){
    	$scope.images = res.data;
    	console.log("images: ", res);
    });

    // $(".summernote").summernote();

    $scope.open = function() {
    	console.log('open')
      // $(".summernote").summernote();
    }


    $scope.close = function() {
      console.log('open')
      // $(".summernote").summernote('destroy');
    }
  }
}());
