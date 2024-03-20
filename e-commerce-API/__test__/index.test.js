const request = require("supertest");
const app = require("../index"); // Express app instance

describe("GET /Audiobook", () => {
  it("responds with JSON containing audiobook data", async () => {
    const response = await request(app).get("/Audiobook");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array)); // Ensure response is an array
    // Add more assertions as needed to verify the structure and content of the response
  });
});
