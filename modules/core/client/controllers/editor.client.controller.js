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
    var tmpTxt = {va: '', key: ''};
    $scope.open = function(va, key) {
    	console.log('open', va, key, va[key])
        tmpTxt.va = va;
        tmpTxt.key = key;
      // $(".summernote").summernote();
      $scope.myTextEditor = va[key];
      $("#myTextEditor").modal();
    }


    $scope.close = function() {
      console.log('close', $scope.myTextEditor);
      tmpTxt.va[tmpTxt.key] = $scope.myTextEditor;
      $('#myTextEditor').modal();
      // $(".summernote").summernote('destroy');
    }

    var tmp = {va: '', key: ''};
    $scope.onSelectImage = function(image) {
        console.log('onSelectImage', image);
        $(".images-library-pop").modal('hide');
        tmp.va[tmp.key] = 'url('+image+')';
    }

    $scope.openImages = function(va, key) {
        // tmp = 

      console.log('openImages', va, key);
        $(".images-library-pop").modal('show');
        // tmp = { va: va, key: key };
        tmp.va = va;
        tmp.key = key;
    }


    $scope.read = function() {

      $http.get('/api-v1/pages/'+$stateParams.id, {}).then(function(res){
        console.log('res: ', res);
        $scope.page = res.data;
        var config = JSON.parse($scope.page.config);
        console.log('config: ', config);
        $scope.settings = config.settings || $scope.settings;
        $scope.styles = config.styles || $scope.styles;
      });

    }

    $scope.read();



    $scope.update = function() {
        var html = $("#abcdef").html();
        var config = JSON.stringify({ settings: $scope.settings, styles: $scope.styles });
        $http.post('/api-v1/pages/'+$stateParams.id, {html: html, config: config, path: $scope.page.path}).then(function(res){
            console.log('res: ', res);
            $scope.page = res.data;
        });
    }


    $scope.settings = {
      meta: {
        title: '',
        description: '',
        keywords: '',
        icon: ''
      },
      badge: {
        visible: 'yes',
        link: ''
      },
      trackingCodes: {
        header: '',
        body: ''
      },
      customCss: '',
      footer: {
        text: 'Copyright 2016 AllRights Reserved',
        disclaimer: 'on',
        disclaimerText: 'This is a disclaimer text',
        termsNConditions: '',
        termsNConditionsText: '',
        privacyPolicy: '',
        privacyPolicyText: ''
      },
      emailSettings: {
        email: '',
        redirectUrl: ''
      }
    }


    $scope.styles = {
      background: {
        'background-color': '#000000',
        'background-image': 'url(http://www.hd-wallpapersdownload.com/script/widescreen-wallpapers/desktop-earth-moving-wallpaper-dowload.jpg)',
        'background-position': 'center'
      },
      container: {
        id: 'container',
        pageWidth: '',
        'margin-top': '70px',
        'padding-top': '30px',
        'padding-left': '0px',
        'padding-right': '0px',
        'padding-bottom': '70px',
        'background-color': '',
        'background-image': '',
        'background-position': '',
        'border-radius': '5px',
        'border-width': '3px',
        'border-style': 'solid',
        'border-color': '#222222'
      },
      row: {
        id: 'row',
        'margin-top': '0px',
        'padding-top': '10px',
        'padding-left': '40px',
        'padding-right': '40px',
        'padding-bottom': '10px',
        'background-color': '',
        'background-image': '',
        'background-position': '',
      },
      headline: {
        id: 'headline',
        'margin-top': '',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      inputTF: {
        visible: 'show',
        id: 'iput',
        text: 'Enter your name & email below',
        'customform': {
          'margin-top': '20px',
        },
        firstTB: {
          type: '',
          placeholder: 'Enter your name here',
          required: ''
        },
        secondTB: {
          type: '',
          placeholder: 'Enter your email here',
          required: ''
        },
        styles: {
          width: '500px',
          height: '50px',
          'background-color': '#ffffff',
          'font-family': '',
          'font-size': '',
          'font-style': '',
          'text-align': 'left',
          'border-radius': '5px',
          'border': '',
          'border-width': '1px',
          'border-color': '#dddddd'
        },
      },
      button: {
        visible: 'show',
        id: 'button',
        'type': '',
        'link': '',
        'text': 'Free Instant Access',
        styles: {
          'margin-top': '-10px',
          'width': '400px',
          'height': '55px',
          'background-color': '#4CAF50',
          'color': '#ffffff',
          'font-family': 'Roboto, sans-serif',
          'font-size': '20px',
          'font-style': 'normal',
          'border-radius': '5px',
        },
      },
      ecover: {
        visible: 'show',
        id: 'ecover',
        styles: {
          'margin-top': '30px',
          'padding-top': '30px',
          'padding-left': '20px',
          'padding-right': '20px',
          'padding-bottom': '40px',
          'background-color': '#000000',
          'background-image': 'url(http://hdfreewallpaper.net/wp-content/uploads/2015/10/hd-wall-paper-earth-free-hd-wallpapers-for-desktop.jpg)',
          'background-position': 'center',
          'width': '280px',
          'height': '350px'
        },
        headline: {
          'text': 'Journey To The Center Of The Earth' ,
          'font-family': '',
          'font-size': '30px',
          'color': '#ffffff',
          'font-style': '',
          'line-height': '1.2em',
        },
        author: {
          'text': 'Author Name',
          'font-size': '16px',
          'color': '#ffffff',
          'background-color': '#FFB300',
        }
      },
      exitpop: {
        onoff: '',
        pageWidth: '',
        'text': '',
        styles: {
          'margin-top': '10px',
          'background-color': '#ffffff',
          'background-image': 'url()',
          'background-position': '',
          visible: '',
          'border-radius': '2px',
          'border-width': '5px',
          'border-color': '#cccccc',
          'border-style': 'solid'
        }
      },
      exitsplash: {
        onoff: '',
        link: '',
        message: '',
      }
    }

    $scope.previewExitpop = function() {
      $(".trigger-exitpop").click();
    }
  }
}());
