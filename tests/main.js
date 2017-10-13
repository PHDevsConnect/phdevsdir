process.env.NODE_ENV = "development";

let mongoose = require("mongoose");
let Developer = require("../app/models/developers");

// Require dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");
let should = chai.should();

chai.use(chaiHttp);

describe("Developers", () => {
  beforeEach( (done) => {
    Developer.findOne( {last_name: "Doe"}, null, {limit: 1}).remove();
    done();
  });
  describe("/Get developers", () => {
    it("it should GET all developers", done => {
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
    it("it should create a new dev record", done => {
      let developer = {
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@mail.com",
        stack: "Python, JavaScript, PHP, Go",
        github_url: "https://github.com/johndoe"
      }
      chai.request(server)
        .post('/api/v1/developers')
        .send(developer)
        .end( (err, res) => {
          res.should.have.status(201 || 500)
          res.body.should.be.an('object')
          // res.body.should.have.property('success').eql(true);
          res.body.should.have.property('data');
          done();
        });
    });
  });
});

describe("Server", () => {
  describe("/Get server status", () => {
    it("it should return Server is Up!", done => {
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
