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


  app.route('/images').get(core.images);

  // var upload = multer({
  //     dest: './static/uploads/',
  //     rename: function (fieldname, filename) {
  //         return filename.replace(/\W+/g, '-').toLowerCase();
  //     }
  // });


  // app.route('/upload').post(upload.single('blob'), core.upload);



  // process.env.TMPDIR = 'abc'; // to avoid the EXDEV rename error, see http://stackoverflow.com/q/21071303/76173

  var multipart = require('connect-multiparty');
  var multipartMiddleware = multipart();
  var flow = require('./flow-node.js');

  // Configure access control allow origin header stuff
  var ACCESS_CONTROLL_ALLOW_ORIGIN = false;


    // Handle uploads through Flow.js
  app.post('/upload', multipartMiddleware, function(req, res) {
    flow(req.user.subdomain).post(req, function(status, filename, original_filename, identifier) {
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
    flow(req.user.subdomain).get(req, function(status, filename, original_filename, identifier) {
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
    flow(req.user.subdomain).write(req.params.identifier, res);
  });



  var mongoose = require('mongoose');
  var Campaign = mongoose.model('Campaign');
  var Page = mongoose.model('Page');
  app.get('/api-v1/campaigns', function(req, res) {
    Campaign.find({user: req.user._id}, function(err, campaigns) {
      res.json(campaigns);
    });
  });

  app.post('/api-v1/campaigns', function(req, res) {
    console.log('create campaign', res.body);
    var campaign = new Campaign(req.body);
    campaign.user = req.user._id;



    var page = new Page({});
    page.save(function(err) {

      campaign.squeeze.page = page.id;
      campaign.save(function(err) {
        res.json({message: 'Success'});
      });

    });
  });

  app.get('/api-v1/campaigns/:campaignId', function(req, res) {
    Campaign.findOne({_id: req.params.campaignId}, function(err, campaign) {
      res.json(campaign);
    });
  });


  app.post('/api-v1/campaigns/:campaignId', function(req, res) {
    Campaign.findOne({_id: req.params.campaignId}, function(err, campaign) {
      Object.assign(campaign, req.body);
      campaign.save(function(err) {

        //update page path
        Page.findOne({_id: campaign.squeeze.page}, function(err, page) {
          Object.assign(page, req.body.squeeze);
          page.save(function(err) {
            res.json(campaign);
          })
        });
      })
    });
  });

  app.delete('/api-v1/campaigns/:campaignId', function(req, res) {

    console.log('deleteCampaign', req.params.campaignId);
    Campaign.findOne({_id: req.params.campaignId}, function(err, campaign) {
      if(campaign) {

        campaign.remove(function(err) {
          res.json({message: 'Success'});
        })
      } else {
        res.json({message: 'Not found'})
      }
    });
  });


  app.get('/api-v1/pages/:id', function(req, res) {
    Page.findOne({_id: req.params.id}, function(err, page) {
      res.json(page);
    });
  });

  app.post('/api-v1/pages/:id', function(req, res) {
    Page.findOne({_id: req.params.id}, function(err, page) {
      Object.assign(page, req.body);
      page.save(function(err) {
        res.json(page);
      })
    });


    var fs = require('fs');
    fs.readFile("modules/core/server/views/template1.html", 'utf8', function(err, data) {

      fs.writeFile("public/"+req.user.subdomain+"/"+req.body.path+".html", data+req.body.html+"</body></html>", function(err) {
          if(err) {
              return console.log(err);
          }

          console.log("The file was saved!", req.user.subdomain, req.body.path);
      }); 
    });


  });


  
  // Define application route
  app.route('/*').get(core.renderIndex);

};
