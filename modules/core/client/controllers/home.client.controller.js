var debug;
(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  function HomeController($scope, $http, Authentication) {
    var vm = this;

    vm.authentication = Authentication;
    
    debug = $scope;

    $scope.selectedImg = "";

    $http.get('/images/abc', {}).then(function(res){
    	$scope.images = res.data;
    	console.log("images: ", res);
    });

    $scope.open = function() {
    	console.log('open')
    }

    $scope.campaign = { name: null, type: null };

    $scope.createCampaign = function(campaign) {
      console.log('campaign: ', campaign);
      $http.post('/api-v1/campaigns', campaign).then(function(res){
        console.log(res);
        $scope.listCampaigns();
      });
    }

    $scope.deleteCampaign = function(campaign) {
      console.log('deleteCampaign', campaign);
      $http.delete('/api-v1/campaigns/'+campaign._id, {}).then(function(res){
        console.log(res);
        $scope.listCampaigns();
      });
    }

    $scope.editCampaign = function(campaign) {

    }

    $scope.listCampaigns = function() {

      $http.get('/api-v1/campaigns', {}).then(function(res){
        console.log('get campaign: ', res);
        $scope.campaigns = res.data;
      });
    }

    $scope.listCampaigns();


  }
}());
