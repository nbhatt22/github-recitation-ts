const express = require("express");
const request = require("supertest");
const fib = require("../src/fib");

const app = express();
app.get("/fib/:num", fib);

describe("rest", () => {
  it("fib zero test", async () => {
    const response = await request(app).get("/fib/0");
    expect(response.text).not.toBeNull();
    expect(response.text).toEqual("fibonacci(0) is 0");
  });

  it("fib 1 test", async () => {
    const response = await request(app).get("/fib/1");
    expect(response.text).not.toBeNull();
    expect(response.text).toEqual("fibonacci(1) is 1");
  });

  it("fib negative test", async () => {
    const response = await request(app).get("/fib/-2");
    expect(response.text).not.toBeNull();
    expect(response.text).toEqual("fibonacci(-2) is undefined");
  });

  it("fib 21 test", async () => {
    const response = await request(app).get("/fib/21");
    expect(response.text).not.toBeNull();
    expect(response.text).toEqual("fibonacci(21) is 10946");
  });
});
