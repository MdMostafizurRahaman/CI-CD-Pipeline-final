const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should return 'Hello, World this is a practice for CICD!'", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Rakib, World this is a practice for CICD!");
  });
});
