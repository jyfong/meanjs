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
var CampaignSchema = new Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  name: {
    type: String,
    default: '',
  },

  type: {
    type: String
  },


  squeeze: {
    page: {type: mongoose.Schema.Types.ObjectId, ref: 'Page'},
    name: String,
    path: String
  }
});


mongoose.model('Campaign', CampaignSchema);
