'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var developersSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true
  },
  stack: {
    type: Array,
    required: false
  },
  github_url: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  created_at: {
    type: Date,
    required: false
  },
  updated_at: {
    type: Number,
    required: false
  }
});

var Developers = mongoose.model('Developers', developersSchema);

module.exports = Developers;
//# sourceMappingURL=developers.js.map