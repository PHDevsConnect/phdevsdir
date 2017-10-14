const mongoose = require('mongoose');
const Developers = require('../models/developers');

exports.getDevelopers = (req, res, next) => {
  return Developers
    .find({})
    .exec((err, users) => {
      if (err) {
        return res.status(500).send({ data: { error: err, status: 500, success: false } });
      } else {
        return res.status(200).send({ data: { users, status: 200, success: true } });
      }
    });
}

exports.newDeveloper = (req, res, next) => {
  const developerData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    stack: req.body.stack.split(','),
    github_url: req.body.github_url
  };
  developers = new Developers(developerData).save()
  .then(() => {
    return res.status(201).send({ data: { user: developerData, status: 201, success: true } });
  }).catch((err) => {
    console.log(err);
    return res.status(500).send({ data: { error: err, status: 500, success: false } });
  });
}
