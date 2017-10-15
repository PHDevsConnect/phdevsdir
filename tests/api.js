process.env.NODE_ENV = "test";

let mongoose = require("mongoose");
let Developer = require("../server/models/developers");

// Require dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server/index");
let should = chai.should();
let faker = require('faker');

chai.use(chaiHttp);

describe("Developers", () => {
  beforeEach( (done) => {
    Developer.findOne( {last_name: "Doe"}, null, {limit: 1}).remove();
    done();
  });
  describe("/Get developers", () => {
    it("it should GET all developers when the route is hit", done => {
      chai
        .request(server)
        .get("/api/v1/developers")
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.an("object");
          done();
        });
    });
  });
  describe("/POST developers", () => {
    it("it should create a new dev record when all parameters are provided", done => {
      let developer = {
        first_name: faker.name.findName(),
        last_name: faker.name.findName(),
        email: faker.internet.email(),
        stack: "Python, JavaScript, PHP, Go",
        github_url: faker.internet.url()
      }
      chai.request(server)
        .post('/api/v1/developers')
        .send(developer)
        .end( (err, res) => {
          res.should.have.status(201 || 500)
          res.body.should.be.an('object')
          res.body.should.have.property('data');
          done();
        });
    });
  });
});

describe("Server", () => {
  describe("/Get server status", () => {
    it("it should return Server is Up! when route /isAlive is hit", done => {
      chai
        .request(server)
        .get("/isAlive")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
