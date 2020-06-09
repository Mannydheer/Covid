const app = require("../index"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

describe("GET /getCountries", () => {
  it("responds with all countries from API.", async () => {
    const response = await request.get("/getCountries");
    expect(response.status).toBe(200);
  });
});

describe("GET /getCountries", () => {
  let testCountry = "canada";
  it("responds with COVID statistics about a country.", async () => {
    const response = await request.get(`/getSingleCountry/${testCountry}`);
    expect(response.status).toBe(200);
  });
});
