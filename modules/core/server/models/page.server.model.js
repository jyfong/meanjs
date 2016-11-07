'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  path = require('path'),
  config = require(path.resolve('./config/config')),
  Schema = mongoose.Schema,
  crypto = require('crypto'),
  validator = require('validator'),
  generatePassword = require('generate-password'),
  owasp = require('owasp-password-strength-test');


/**
 * User Schema
 */
var PageSchema = new Schema({
  name: {
    type: String,
    default: '',
  },
  path: {
    type: String
  },

  config: {
    type: String
  },
});


mongoose.model('Page', PageSchema);
