const request = require("supertest");
var app = require("../server.js");

describe("GET /api/v1", () => {
  it(`respond with Backend up with Docker`, (done) => {
    request(app).get("/api/v1").expect("Backend up with Docker", done);
  });
});
