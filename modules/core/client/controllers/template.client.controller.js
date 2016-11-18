(function () {
  'use strict';

  angular
    .module('core')
    .controller('TemplateController', TemplateController);

  TemplateController.$inject = ['$scope', '$state', 'Authentication', 'menuService'];

  function TemplateController($scope, $state, Authentication, menuService) {
    var vm = this;


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
        visible: '',
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
        visible: '',
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
        visible: '',
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
  }
}());
