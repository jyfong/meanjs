'use strict';

var validator = require('validator'),
  path = require('path'),
  config = require(path.resolve('./config/config'));
var fs = require('fs');
var multer = require('multer');
var img = require('easyimage');
/**
 * Render the main application page
 */
exports.renderIndex = function (req, res) {
  var safeUserObject = null;
  if (req.user) {
    safeUserObject = {
      displayName: validator.escape(req.user.displayName),
      provider: validator.escape(req.user.provider),
      username: validator.escape(req.user.username),
      created: req.user.created.toString(),
      roles: req.user.roles,
      profileImageURL: req.user.profileImageURL,
      email: validator.escape(req.user.email),
      lastName: validator.escape(req.user.lastName),
      firstName: validator.escape(req.user.firstName),
      additionalProvidersData: req.user.additionalProvidersData
    };
  }

  res.render('modules/core/server/views/index', {
    user: JSON.stringify(safeUserObject),
    sharedConfig: JSON.stringify(config.shared)
  });
};

/**
 * Render the server error page
 */
exports.renderServerError = function (req, res) {
  res.status(500).render('modules/core/server/views/500', {
    error: 'Oops! Something went wrong...'
  });
};

/**
 * Render the server not found responses
 * Performs content-negotiation on the Accept HTTP header
 */
exports.renderNotFound = function (req, res) {

  res.status(404).format({
    'text/html': function () {
      res.render('modules/core/server/views/404', {
        url: req.originalUrl
      });
    },
    'application/json': function () {
      res.json({
        error: 'Path not found'
      });
    },
    'default': function () {
      res.send('Path not found');
    }
  });
};

exports.images = function (req, res) {
  var fs = require('fs');

  fs.readdir('public/abc', function(err, items) {
    var itemsUrl = items.map(function(item) {
      return 'localhost:3000/abc/'+item;
    });
    res.json(itemsUrl);
  });
}

exports.upload = function (req, res, next) {

  console.log(req);
  // fs.writeFile("public/abc/123.html", req.file, function(err) {
  //     if(err) {
  //         return console.log(err);
  //     }

  //     console.log("The file was saved!");
  // }); 
  res.json({success: true});
}

exports.save = function (req, res) {



  fs.readFile("modules/core/server/views/template1.html", 'utf8', function(err, data) {

    var fs = require('fs');
    fs.writeFile("public/abc/template.html", data+req.body.data+"</body></html>", function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    }); 
    res.send('')
  });

}




  var imgs = ['png', 'jpg', 'jpeg', 'gif', 'bmp']; // only make thumbnail for these

  function getExtension(fn) {
      return fn.split('.').pop();
  }

  function fnAppend(fn, insert) {
      var arr = fn.split('.');
      var ext = arr.pop();
      insert = (insert !== undefined) ? insert : new Date().getTime();
      return arr + '.' + insert + '.' + ext;
  }



  // exports.upload = function (req, res) {
  //   console.log(req.file, req.files)
  //     if (imgs.indexOf(getExtension(req.files.userFile.name)) != -1)
  //         img.info(req.files.userFile.path, function (err, stdout, stderr) {
  //             if (err) throw err;
  // //        console.log(stdout); // could determine if resize needed here
  //             img.rescrop(
  //                 {
  //                     src: req.files.userFile.path, dst: fnAppend(req.files.userFile.path, 'thumb'),
  //                     width: 50, height: 50
  //                 },
  //                 function (err, image) {
  //                     if (err) throw err;
  //                     res.send({image: true, file: req.files.userFile.originalname, savedAs: req.files.userFile.name, thumb: fnAppend(req.files.userFile.name, 'thumb')});
  //                 }
  //             );
  //         });
  //     else
  //         res.send({image: false, file: req.files.userFile.originalname, savedAs: req.files.userFile.name});
  // };



