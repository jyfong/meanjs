'use strict';

/* eslint comma-dangle:[0, "only-multiline"] */
module.exports = {
  client: {
    lib: {
      css: [
        // bower:css
        'public/lib/bootstrap/dist/css/bootstrap.css',
        // 'public/lib/bootstrap/dist/css/bootstrap-theme.css',
        'public/lib/ng-img-crop/compile/unminified/ng-img-crop.css',
        'public/lib/angular-color-picker/dist/angularjs-color-picker.css',
        'public/lib/angular-color-picker/dist/themes/angularjs-color-picker-bootstrap.css',
        'public/lib/angular-bootstrap-colorpicker/css/colorpicker.css',
        'public/lib/angularjs-slider/dist/rzslider.css',
        'public/lib/textAngular/dist/textAngular.css'
        // endbower
      ],
      js: [
        // bower:js
        'public/lib/jquery/dist/jquery.js',
        'public/lib/bootstrap/dist/js/bootstrap.js',
        'public/lib/angular/angular.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/ng-file-upload/ng-file-upload.js',
        'public/lib/ng-img-crop/compile/unminified/ng-img-crop.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-mocks/angular-mocks.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
        'public/lib/flow.js/dist/flow.js',
        'public/lib/ng-flow/dist/ng-flow.js',
        'public/lib/angular-sanitize/angular-sanitize.js',
        'public/lib/tinycolor/dist/tinycolor-min.js',
        'public/lib/angular-color-picker/dist/angularjs-color-picker.js',
        'public/lib/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js',
        'public/lib/jquery-ui/jquery-ui.js',
        'public/lib/angularjs-slider/dist/rzslider.js',
        'public/lib/textAngular/dist/textAngular-rangy.min.js',
        'public/lib/textAngular/dist/textAngular-sanitize.min.js',
        'public/lib/textAngular/dist/textAngular.min.js'



        // endbower
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    img: [
      'modules/**/*/img/**/*.jpg',
      'modules/**/*/img/**/*.png',
      'modules/**/*/img/**/*.gif',
      'modules/**/*/img/**/*.svg'
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: ['gruntfile.js'],
    gulpConfig: ['gulpfile.js'],
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: ['modules/*/server/config/*.js'],
    policies: 'modules/*/server/policies/*.js',
    views: ['modules/*/server/views/*.html']
  }
};
