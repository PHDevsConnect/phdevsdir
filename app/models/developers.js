//let as opposed to var, the variable maybe reassigned, henced i stuck to let
let mongoose = require('mongoose');

//const as opposed to var, identifier wont be reassigned
const Schema = mongoose.Schema;

//const as opposed to var, identifier wont be reassigned
const developersSchema = new Schema({
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

//let as opposed to var, the variable maybe reassigned, henced i stuck to let
let Developers = mongoose.model('Developers', developersSchema);

module.exports = Developers;