// Example of configuration: <https://dev.to/nathan_sheryak/how-to-test-a-typescript-express-api-with-jest-for-dummies-like-me-4epd>

//import request from "supertest";
const request = require('supertest');

//import server from "../src/server";
const server = require('../src/server');

describe("Test server.js", () => {
  test("Catch-all route", async () => {
    const res = await request(server).get('/');
    
    expect(res.statusCode).toEqual(200);
    expect(res.headers['content-type']).toContain('text/html');
    expect(res.headers['content-type']).toMatch(/text\/html/i);
    expect(res.text).toEqual("Ok");
  });
});