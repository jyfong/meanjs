var debug;
(function () {
  'use strict';

  angular
    .module('core')
    .controller('OverviewController', OverviewController);

  function OverviewController($scope, $http, Authentication, $stateParams) {
    var vm = this;

    vm.authentication = Authentication;
    
    debug = $scope;


    $scope.campaign = { name: null, type: null };


    $scope.readCampaign = function() {

      $http.get('/api-v1/campaigns/'+$stateParams.campaignId, {}).then(function(res){
        console.log('res: ', res);
        $scope.campaign = res.data;
      });
    }

    $scope.readCampaign();

    $scope.update = function(campaign) {

      $http.post('/api-v1/campaigns/'+campaign._id, campaign).then(function(res){
        console.log('res: ', res);
        $scope.readCampaign();
      });
    }


  }
}());
