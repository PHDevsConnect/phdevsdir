'use strict';

var mongoose = require('mongoose');
var Developers = require('../models/developers');

exports.getDevelopers = function (req, res, next) {
  return Developers.find({}).exec(function (err, users) {
    if (err) {
      return res.status(500).send({ data: { error: err, status: 500, success: false } });
    } else {
      return res.status(200).send({ data: { users: users, status: 200, success: true } });
    }
  });
};

exports.newDeveloper = function (req, res, next) {
  var developerData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    stack: req.body.stack.split(',').map(function (elem) {
      return elem.trim();
    }),
    github_url: req.body.github_url
  };
  developers = new Developers(developerData).save().then(function () {
    return res.status(201).send({ data: { user: developerData, status: 201, success: true } });
  }).catch(function (err) {
    console.log(err);
    return res.status(500).send({ data: { error: err, status: 500, success: false } });
  });
};
//# sourceMappingURL=DeveloperController.js.map