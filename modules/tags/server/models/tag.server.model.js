'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Tag Schema
 */
var TagSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  label: {
    type: String,
    default: '',
    trim: true,
    required: 'Label cannot be blank'
  }
});

mongoose.model('Tag', TagSchema);
