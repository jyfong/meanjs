'use strict';

module.exports = function (app) {
  // Root routing
  var core = require('../controllers/core.server.controller');
  var express = require('express')
  , router = express.Router()
  , multer = require('multer')

  var img = require('easyimage');

  // Define error pages
  app.route('/server-error').get(core.renderServerError);

  // Return a 404 for all undefined api, module or lib routes
  app.route('/:url(api|modules|lib)/*').get(core.renderNotFound);


  app.route('/images/abc').get(core.images);

  // var upload = multer({
  //     dest: './static/uploads/',
  //     rename: function (fieldname, filename) {
  //         return filename.replace(/\W+/g, '-').toLowerCase();
  //     }
  // });


  // app.route('/upload').post(upload.single('blob'), core.upload);
  app.route('/save').post(core.save);



  // process.env.TMPDIR = 'abc'; // to avoid the EXDEV rename error, see http://stackoverflow.com/q/21071303/76173

  var multipart = require('connect-multiparty');
  var multipartMiddleware = multipart();
  var flow = require('./flow-node.js')('abc');

  // Configure access control allow origin header stuff
  var ACCESS_CONTROLL_ALLOW_ORIGIN = false;


    // Handle uploads through Flow.js
  app.post('/upload', multipartMiddleware, function(req, res) {
    flow.post(req, function(status, filename, original_filename, identifier) {
      console.log('POST', status, original_filename, identifier);
      if (ACCESS_CONTROLL_ALLOW_ORIGIN) {
        res.header("Access-Control-Allow-Origin", "*");
      }
      // res.status(status).send();
      res.status(/^(partly_done|done)$/.test(status) ? 200 : 500).send();
    });
  });


  app.options('/upload', function(req, res){
    console.log('OPTIONS');
    if (ACCESS_CONTROLL_ALLOW_ORIGIN) {
      res.header("Access-Control-Allow-Origin", "*");
    }
    res.status(200).send();
  });

  // Handle status checks on chunks through Flow.js
  app.get('/upload', function(req, res) {
    flow.get(req, function(status, filename, original_filename, identifier) {
      console.log('GET', status);
      if (ACCESS_CONTROLL_ALLOW_ORIGIN) {
        res.header("Access-Control-Allow-Origin", "*");
      }

      if (status == 'found') {
        status = 200;
      } else {
        status = 204;
      }

      res.status(status).send();
    });
  });

  app.get('/download/:identifier', function(req, res) {
    flow.write(req.params.identifier, res);
  });



  
  // Define application route
  app.route('/*').get(core.renderIndex);

};
