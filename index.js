require('dotenv').config();

const express = require("express"),
  http = require('http'),
  socketio = require('socket.io'),
  router = express.Router(),
  helmet = require('helmet'),
  logger = require('morgan'),
  session = require('express-session'),
  cookieParser = require('cookie-parser'),
  bcrypt = require('bcrypt'),
  crypto = require('crypto'),
  path = require('path'),
  shortid = require('shortid'),
  fs = require('fs'),
  fileParser = require('connect-multiparty')(),
  validator = require('validator'),
  mime = require("mime"),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  _ = require('lodash'),
  app = express();

const environment = process.env.NODE_ENV || "development";
mongoose.Promise = global.Promise;

const online_DB_uri = `mongodb://heroku_8s9nbdfn:4vjc4tbv8oho7jg10tqnv1qd3p@ds113795.mlab.com:13795/heroku_8s9nbdfn`,
  local_DB_uri = `mongodb://localhost:27017/phdevsdir`;

mongoose.connect( environment === "production" ? online_DB_uri : local_DB_uri, {
  useMongoClient: true
}, (err, db) => {
  if (err) {
    console.log("Couldn't connect to database");
  } else {
    console.log(`Connected To ${environment} Database`);
  }
});

const Developers = require('./models/developers');

app.use(logger('dev'));
app.use(helmet());
app.disable('x-powered-by');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
process.env.PWD = process.cwd();
app.use(express.static(path.join(process.env.PWD, 'public')));

router.get('/api/v1/developers', (req, res) => {
  return Developers
  .find({})
  .exec((err, users) => {
    if (err) {
      return res.status(500).send({ data: { error: err, status: 500, success: false } });
    } else {
      return res.status(200).send({ data: { users, status: 200, success: true } });
    }
  });
});

router.post('/api/v1/developers', (req, res) => {
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
});

app.use(router);

const server = http.createServer(app);
const io = socketio(server);
const port = app.set('PORT', process.env.PORT || 3000);

server.listen(app.get('PORT'), () => {
  console.log(`server running on port ${app.get('PORT')}`);
});