'use strict';

module.exports = function (app) {
  // Root routing
  var core = require('../controllers/core.server.controller');
  var express = require('express')
  , router = express.Router()
  , multer = require('multer')

  // Define error pages
  app.route('/server-error').get(core.renderServerError);

  // Return a 404 for all undefined api, module or lib routes
  app.route('/:url(api|modules|lib)/*').get(core.renderNotFound);


  app.route('/images/abc').get(core.images);

  var uploading = multer({
  	dest: __dirname + '/uploads/',
  })


  app.route('/upload', uploading.array('photos', 12)).post(core.upload);
  
  // Define application route
  app.route('/*').get(core.renderIndex);

};
