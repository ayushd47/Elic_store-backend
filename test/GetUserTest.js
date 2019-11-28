var mocha = require("mocha");
var describe = mocha.describe;
var expect = require("chai").expect;
var assert = require("assert");

var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:3000//api/v1/");

describe("Get Users List", () => {
  // to get own sold item
  it("should be able to retrieve Users", function(done) {
    server
      .get("users")
      .expect("Content-type", /json/)
      .expect(200)
      .end(function(err, res) {
        res.status.should.equal(200);
        done();
      });
  });
});
