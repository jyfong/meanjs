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

    $scope.firstTB = {};
    $scope.firstTB.type = 'text';
    $scope.firstTB.placeholder = 'Enter your name here';
    $scope.firstTB.required = 'true';

    $scope.secondTB = {};
    $scope.secondTB.type = 'text';
    $scope.secondTB.placeholder = 'Enter your email here';
    $scope.secondTB.required = 'true';

    $scope.inputTB = {};
    $scope.inputTB.width = '300px';
    $scope.inputTB.height = '80px';
    $scope.inputTB['background-color'] = ''
    $scope.inputTB['font-family'] = '';
    $scope.inputTB['font-size'] = '';
    // $scope.inputTB['font-style'] = '';
    $scope.inputTB['text-align'] = 'left';
    $scope.inputTB['border-radius'] = '5px';
    // $scope.inputTB.
    $scope.inputTB['border-width'] = '3px';
    $scope.inputTB['border-color'] = '';
   }
}());
