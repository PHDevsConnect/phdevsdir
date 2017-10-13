require("babel-polyfill");

require("dotenv").config();

const express = require("express"),
  http = require("http"),
  socketio = require("socket.io"),
  router = express.Router(),
  helmet = require("helmet"),
  logger = require("morgan"),
  session = require("express-session"),
  cookieParser = require("cookie-parser"),
  bcrypt = require("bcrypt"),
  crypto = require("crypto"),
  path = require("path"),
  shortid = require("shortid"),
  fs = require("fs"),
  fileParser = require("connect-multiparty")(),
  validator = require("validator"),
  mime = require("mime"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  _ = require("lodash"),
  app = express();

const environment = process.env.NODE_ENV || "development";
mongoose.Promise = global.Promise;

const online_DB_uri = `mongodb://heroku_8s9nbdfn:4vjc4tbv8oho7jg10tqnv1qd3p@ds113795.mlab.com:13795/heroku_8s9nbdfn`,
  local_DB_uri = `mongodb://localhost:27017/phdevsdir`;

mongoose.connect(
  environment === "production" ? online_DB_uri : online_DB_uri,
  {
    useMongoClient: true
  },
  (err, db) => {
    if (err) {
      console.log("Couldn't connect to database");
    } else {
      console.log(`Connected To ${environment} Database`);
    }
  }
);

app.use(logger("dev"));
app.use(helmet());
app.disable("x-powered-by");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
process.env.PWD = process.cwd();
app.use(express.static(path.join(process.env.PWD, "public")));

const api = express.Router();
require("./app/routes/index.js")(api);
app.use("/api/v1", api);
app.get("/", (req, res) => {
  res.send({
    message: "Valid endpoint is /api/v1/"
  });
});

/**
 * Serve API
 * Module dependencies.
 */

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);
const io = socketio(server);
/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, function() {
  console.log("listening on port " + port);
});
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
const debug = require("debug");
function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
