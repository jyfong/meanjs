var debug;
(function () {
  'use strict';

  angular
    .module('core')
    .controller('EditorController', EditorController);

  function EditorController($scope, $http, $stateParams, Authentication) {
    var vm = this;
    vm.authentication = Authentication;
    debug = $scope;

    $scope.selectedImg = "";

    $http.get('/images', {}).then(function(res){
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

    var tmp = {va: '', key: ''};
    $scope.onSelectImage = function(image) {
        console.log('onSelectImage', image);
        $(".images-library-pop").modal('hide');
        tmp.va[tmp.key] = 'url(http://'+image+')';
    }

    $scope.openImages = function(va, key) {
        // tmp = 

        $(".images-library-pop").modal('show');
        tmp = { va: va, key: key };
    }


    $scope.read = function() {

      $http.get('/api-v1/pages/'+$stateParams.id, {}).then(function(res){
        console.log('res: ', res);
        $scope.page = res.data;
      });

    }

    $scope.read();


    $scope.update = function() {
        var html = $("#mycon").html();
        var config = JSON.stringify($scope.settings);
        $http.post('/api-v1/pages/'+$stateParams.id, {html: html, config: config, path: $scope.page.path}).then(function(res){
            console.log('res: ', res);
            $scope.page = res.data;
        });
    }

    $scope.background = {};
    $scope.backgrounda = {};
    $scope.backgrounda.options = [
        { value: {"background-position":"center"}, text: 'Full Center Fit' }, 
        { value: {"background-position":""}, text: 'Full 100% Width' }, 
        { value: {"background-repeat":"no-repeat"}, text: 'No Repeat' }, 
        { value: {"background-repeat":"repeat"}, text: 'Repeat' },
    ]
    $scope.background['background-image'] = '';
    $scope.background['background-color'] = '';
    $scope.background['background-position'] = '';

    $scope.mycon = {};
    $scope.mycon.id = "mycon";

    $scope.firstTB = {};
    $scope.firstTB.type = 'text';
    $scope.firstTB.placeholder = 'Enter your name here';
    $scope.firstTB.required = 'true';

    $scope.secondTB = {};
    $scope.secondTB.type = 'text';
    $scope.secondTB.placeholder = 'Enter your email here';
    $scope.secondTB.required = 'true';

    $scope.inputTB = {};
    $scope.inputTB.width = '500px';
    $scope.inputTB.height = '50px';
    $scope.inputTB['background-color'] = '#ffffff'
    $scope.inputTB['font-family'] = '';
    $scope.inputTB['font-size'] = '';
    // $scope.inputTB['font-style'] = '';
    $scope.inputTB['text-align'] = 'left';
    $scope.inputTB['border-radius'] = '5px';
    // $scope.inputTB.
    $scope.inputTB['border-width'] = '3px';
    $scope.inputTB['border-color'] = '#dddddd';

    $scope.mybutton = {};
    $scope.mybutton['background-color'] = '#4CAF50';
    $scope.mybutton['color'] = '#ffffff';
    $scope.mybutton['font-family'] = 'Roboto, sans-serif';
    $scope.mybutton['font-size'] = '20px';
    $scope.mybutton['border-radius'] = '5px';
    $scope.mybutton['text'] = 'Free Instant Access';

    $scope.ecover = {};
    $scope.ecover['margin-top'] = '30px';
    $scope.ecover['padding-top'] = '30px';
    $scope.ecover['padding-left'] = '20px';
    $scope.ecover['padding-right'] = '20px';
    $scope.ecover['padding-bottom'] = '40px';

    $scope.ecover['background-color'] = '#000000';
    $scope.ecover['background-image'] = 'url(http://hdfreewallpaper.net/wp-content/uploads/2015/10/hd-wall-paper-earth-free-hd-wallpapers-for-desktop.jpg)';
    $scope.ecover['background-position'] = 'center';
    $scope.ecover['width'] = '280px';
    $scope.ecover['height'] = '350px';

    $scope.eheadline = {};
    $scope.eheadline['font-family'] = '';
    $scope.eheadline['font-size'] = '30px';
    $scope.eheadline['color'] = '#ffffff';
    $scope.eheadline['text'] = 'Journey To The Center Of The Earth';
    $scope.eheadline['line-height'] = '1.2em';

    $scope.eauthor = {};
    $scope.eauthor['text'] = 'Author Name';
    $scope.eauthor['font-size'] = '16px';
    $scope.eauthor['color'] = '#ffffff';
    $scope.eauthor['background-color'] = '#FFB300';

    $scope.page = {};
    $scope.page.title = '';
    $scope.page.description = '';
    $scope.page.keywords = '';
    $scope.page.icon = '';

    $scope.settings = {badge: {}, trackingCode: {}, 
        footer: {disclaimer: {}, termsNconditions: {}, privacyPolicy: {} },
        template: {}
     }

    $scope.settings.badge.display = '';
    $scope.settings.badge.link = '';
    $scope.settings.trackingCode.header = '';
    $scope.settings.trackingCode.body = '';
    $scope.settings.customCSS = '';
    $scope.settings.footer.text = '';
    $scope.settings.footer.disclaimer.display = '';
    $scope.settings.footer.disclaimer.text = '';
    $scope.settings.footer.termsNconditions.display = '';
    $scope.settings.footer.termsNconditions.text = '';
    $scope.settings.footer.privacyPolicy.display = '';
    $scope.settings.footer.privacyPolicy.text = '';
    $scope.settings.template.name = '';

    $scope.email = {webform: {}};
    $scope.email.webform.code = '';
    $scope.email.webform.redirectURL = '';


   }
}());
